'use client';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import s from './Lightbox.module.css';

function LightboxOverlay({ src, alt, onClose }) {
  const [zoomed, setZoomed] = useState(false);
  const [panReady, setPanReady] = useState(false); // space held
  const [panning, setPanning] = useState(false);    // space held + dragging
  const overlayRef = useRef(null);
  const dragRef = useRef({ x: 0, y: 0, left: 0, top: 0 });
  const didPanRef = useRef(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const scrollY = window.scrollY;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, [onClose]);

  // Hold space to grab-and-pan while zoomed in (Figma-style)
  useEffect(() => {
    if (!zoomed) return;
    const onKeyDown = (e) => {
      if (e.code === 'Space') { e.preventDefault(); setPanReady(true); }
    };
    const onKeyUp = (e) => {
      if (e.code === 'Space') { setPanReady(false); setPanning(false); }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
      setPanReady(false);
      setPanning(false);
    };
  }, [zoomed]);

  // Drag-to-pan listeners, active only while a pan drag is in progress
  useEffect(() => {
    if (!panning) return;
    const onMove = (e) => {
      const o = overlayRef.current;
      if (!o) return;
      didPanRef.current = true;
      o.scrollLeft = dragRef.current.left - (e.clientX - dragRef.current.x);
      o.scrollTop = dragRef.current.top - (e.clientY - dragRef.current.y);
    };
    const onUp = () => setPanning(false);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
  }, [panning]);

  const startPan = (e) => {
    if (!panReady) return;
    e.preventDefault();
    const o = overlayRef.current;
    dragRef.current = { x: e.clientX, y: e.clientY, left: o.scrollLeft, top: o.scrollTop };
    didPanRef.current = false;
    setPanning(true);
  };

  // Don't close / toggle if the gesture was a space-pan
  const guarded = (fn) => (e) => {
    if (e) e.stopPropagation();
    if (panReady || didPanRef.current) { didPanRef.current = false; return; }
    fn();
  };

  const cursorClass = panning ? s.overlayGrabbing : panReady ? s.overlayGrab : '';

  return createPortal(
    <div
      ref={overlayRef}
      className={`${s.overlay} ${zoomed ? s.overlayZoomed : ''} ${cursorClass}`}
      onClick={guarded(onClose)}
      onMouseDown={startPan}
    >
      <button className={s.closeBtn} onClick={onClose} aria-label="Close">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <line x1="1" y1="1" x2="15" y2="15" stroke="#2a2a2a" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="15" y1="1" x2="1" y2="15" stroke="#2a2a2a" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </button>
      <button
        className={s.zoomBtn}
        onClick={(e) => { e.stopPropagation(); setZoomed((z) => !z); }}
        aria-label={zoomed ? 'Zoom out' : 'Zoom in'}
        title={zoomed ? 'Zoom out (hold space to pan)' : 'Zoom in'}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2a2a2a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7"/>
          <line x1="16.5" y1="16.5" x2="22" y2="22"/>
          <line x1="8" y1="11" x2="14" y2="11"/>
          {!zoomed && <line x1="11" y1="8" x2="11" y2="14"/>}
        </svg>
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt || ''}
        className={`${s.lightboxImg} ${zoomed ? s.lightboxImgZoomed : ''}`}
        onClick={guarded(() => setZoomed((z) => !z))}
        draggable={false}
      />
    </div>,
    document.body
  );
}

export default function LightboxImage({ src, alt, children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={s.wrap}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') setOpen(true); }}
      >
        {children}
        <div className={s.zoomIcon} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7"/>
            <line x1="16.5" y1="16.5" x2="22" y2="22"/>
            <line x1="11" y1="8" x2="11" y2="14"/>
            <line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
        </div>
      </div>
      {open && <LightboxOverlay src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}
