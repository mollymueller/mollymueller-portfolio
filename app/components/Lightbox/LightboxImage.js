'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Lightbox.module.css';

function LightboxOverlay({ src, alt, onClose }) {
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

  return createPortal(
    <div className={s.overlay} onClick={onClose}>
      <button className={s.closeBtn} onClick={onClose} aria-label="Close">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <line x1="1" y1="1" x2="15" y2="15" stroke="#2a2a2a" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="15" y1="1" x2="1" y2="15" stroke="#2a2a2a" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt || ''}
        className={s.lightboxImg}
        onClick={(e) => e.stopPropagation()}
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
