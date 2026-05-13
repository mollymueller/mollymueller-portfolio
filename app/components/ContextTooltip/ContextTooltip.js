'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './ContextTooltip.module.css';

function BottomSheet({ title, content, onClose }) {
  // Lock body scroll while sheet is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return createPortal(
    <>
      <div className={s.backdrop} onClick={onClose} aria-hidden="true" />
      <div className={s.sheet} role="dialog" aria-modal="true" aria-label={title}>
        <div className={s.sheetHeader}>
          <span className={s.sheetTitle}>{title}</span>
          <button className={s.closeBtn} onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className={s.sheetBody}>{content}</div>
      </div>
    </>,
    document.body
  );
}

export default function ContextTooltip({ title = 'Background & Context', content, children }) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <span
      className={s.wrapper}
      onMouseEnter={() => !isMobile && setOpen(true)}
      onMouseLeave={() => !isMobile && setOpen(false)}
    >
      {children}
      <span
        className={s.iconAnchor}
        onClick={(e) => { e.stopPropagation(); setOpen(prev => !prev); }}
      >
        <svg
          className={s.icon}
          aria-label="More context"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeWidth="1.2" />
          <text x="7" y="10.8" textAnchor="middle" fontSize="8.5" fontFamily="Georgia, serif" fill="currentColor" fontStyle="italic">i</text>
        </svg>

        {/* Desktop hover tooltip */}
        {open && !isMobile && (
          <span className={s.panel}>
            <span className={s.caret} aria-hidden="true" />
            <span className={s.box}>
              <span className={s.title}>{title}</span>
              <span className={s.body}>{content}</span>
            </span>
          </span>
        )}
      </span>

      {/* Mobile bottom sheet */}
      {open && isMobile && (
        <BottomSheet title={title} content={content} onClose={() => setOpen(false)} />
      )}
    </span>
  );
}
