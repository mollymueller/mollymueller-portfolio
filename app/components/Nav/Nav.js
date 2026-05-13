'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import s from './Nav.module.css';

export default function Nav() {
  const pathname = usePathname();

  const active = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav className={s.nav} aria-label="Site navigation">
      <Link href="/" className={`${s.link} ${s.homeLink} ${active('/') ? s.active : ''}`}>
        home
      </Link>
      <Link href="/case-studies" className={`${s.link} ${s.caseStudiesLink} ${active('/case-studies') ? s.active : ''}`}>
        case studies
      </Link>
      <Link href="/about" className={`${s.link} ${s.aboutLink} ${active('/about') ? s.active : ''}`}>
        about me
      </Link>
    </nav>
  );
}
