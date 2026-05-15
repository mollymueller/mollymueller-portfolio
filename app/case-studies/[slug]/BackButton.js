'use client';

import Link from 'next/link';
import s from './page.module.css';

export default function BackButton() {
  return (
    <Link href="/case-studies" className={s.backLink} aria-label="Go back">
      <svg aria-hidden="true" width="22" height="28" viewBox="0 0 22 28" fill="none" className={s.backArrow}>
        <path d="M20 2L2 14L20 26Z" fill="var(--color-accent)" stroke="var(--color-accent)" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"/>
      </svg>
      back
    </Link>
  );
}
