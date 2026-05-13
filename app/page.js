'use client';

import Link from 'next/link';
import MollyMuellerHeader from './case-studies/MollyMuellerHeader';
import Nav from '@/app/components/Nav/Nav';
import useLayoutEffectSafe from '@/app/hooks/useLayoutEffectSafe';
import s from './page.module.css';

export default function Home() {
  useLayoutEffectSafe(() => {
    const MAX_W = 960;
    const TAG_H = 120;
    const TAG_COUNT = 4;

    function scaleTags() {
      const wrap = document.getElementById('tags-wrap');
      if (!wrap) return;
      const availW = wrap.parentElement?.clientWidth ?? window.innerWidth;
      const ratio = Math.min(availW / MAX_W, 1);
      if (ratio < 1) {
        wrap.style.transformOrigin = 'top center';
        wrap.style.transform = `scale(${ratio})`;
        wrap.style.marginBottom = `${TAG_H * TAG_COUNT * (ratio - 1)}px`;
      } else {
        wrap.style.transform = '';
        wrap.style.marginBottom = '';
      }
    }
    scaleTags();
    window.addEventListener('resize', scaleTags);
    return () => window.removeEventListener('resize', scaleTags);
  }, []);

  return (
    <main className={s.page}>

      {/* ── MOLLY MUELLER header — same technique as case studies ── */}
      <MollyMuellerHeader id="mm-header-home" />

      <Nav />

      {/* ── Centered content ───────────────────────────────────── */}
      <div className={s.content}>

        <div id="tags-wrap" className={s.tagsWrap}>

        {/* AI-EMPOWERED */}
        <Link href="/case-studies?tag=ai" className={`${s.tagLine} ${s.hoverGroup}`}
          style={{ width: 720, height: 120, fontSize: 75, lineHeight: 'normal' }}
          aria-label="AI-Empowered">
          <span className={`${s.shade} ${s.abs}`} style={{ left: 0, top: 0, whiteSpace: 'nowrap' }} aria-hidden="true">ai-empowered</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 16.5, top: -3.75 }} aria-hidden="true">a</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 77,    top: -3.75 }} aria-hidden="true">i</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 129,   top: -3.75 }} aria-hidden="true">-</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 168, top: -3.75 }} aria-hidden="true">e</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 224,top: -3.75 }} aria-hidden="true">m</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 295,top: -3.75 }} aria-hidden="true">p</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 354, top: -3.75 }} aria-hidden="true">o</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 417,top: -3.75 }} aria-hidden="true">w</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 487,top: -3.75 }} aria-hidden="true">e</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 543, top: -3.75 }} aria-hidden="true">r</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 606.5,   top: -3.75 }} aria-hidden="true">e</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 663, top: -3.75 }} aria-hidden="true">d</span>
        </Link>

        {/* SYSTEMS-OBSESSED */}
        <Link href="/case-studies?tag=systems" className={`${s.tagLine} ${s.hoverGroup}`}
          style={{ width: 960, height: 120, fontSize: 75, lineHeight: 'normal' }}
          aria-label="Systems-Obsessed">
          <span className={`${s.shade} ${s.abs}`} style={{ left: 7.5, top: -6.25, whiteSpace: 'nowrap' }} aria-hidden="true">systems-obsessed</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 23,  top: -11.25 }} aria-hidden="true">s</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 78, top: -11.25 }} aria-hidden="true">y</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 138.5, top: -11.25 }} aria-hidden="true">s</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 193.75,top: -11.25 }} aria-hidden="true">t</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 251,   top: -11.25 }} aria-hidden="true">e</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 307,   top: -11.25 }} aria-hidden="true">m</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 378, top: -11.25 }} aria-hidden="true">s</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 434,   top: -11.25 }} aria-hidden="true">-</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 474,top: -11.25 }} aria-hidden="true">o</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 537.25,top: -11.25 }} aria-hidden="true">b</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 597.75,top: -11.25 }} aria-hidden="true">s</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 655,   top: -11.25 }} aria-hidden="true">e</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 710.5,   top: -11.25 }} aria-hidden="true">s</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 766,   top: -11.25 }} aria-hidden="true">s</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 823, top: -11.25 }} aria-hidden="true">e</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 880,   top: -11.25 }} aria-hidden="true">d</span>
        </Link>

        {/* DATA-DRIVEN */}
        <Link href="/case-studies?tag=data" className={`${s.tagLine} ${s.hoverGroup}`}
          style={{ width: 660, height: 120, fontSize: 75, lineHeight: 'normal' }}
          aria-label="Data-Driven">
          <span className={`${s.shade} ${s.abs}`} style={{ left: 0, top: -7.5, whiteSpace: 'nowrap' }} aria-hidden="true">data-driven</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left:15.5, top: -13.75 }} aria-hidden="true">d</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 79.5, top: -13.75 }} aria-hidden="true">a</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 137.5, top: -13.75 }} aria-hidden="true">t</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 192,top: -13.75 }} aria-hidden="true">a</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 253.25,   top: -13.75 }} aria-hidden="true">-</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 293,top: -12.5  }} aria-hidden="true">d</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 356,top: -13.75 }} aria-hidden="true">r</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 418,top: -13.75 }} aria-hidden="true">i</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 472,   top: -12.5  }} aria-hidden="true">v</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 535.25,top: -12.5  }} aria-hidden="true">e</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 591,top: -12.5  }} aria-hidden="true">n</span>
        </Link>

        {/* PRODUCT DESIGNER */}
        <Link href="/about" className={`${s.tagLine} ${s.hoverGroup}`}
          style={{ width: 930, height: 120, fontSize: 75, lineHeight: 'normal' }}
          aria-label="Product Designer">
          <span className={`${s.shade} ${s.abs}`} style={{ left: 465, transform: 'translateX(-50%)', top: -5.44, whiteSpace: 'nowrap' }} aria-hidden="true">product designer</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 20.75,    top: -12 }} aria-hidden="true">p</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 79,  top: -12 }} aria-hidden="true">r</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 142.25,top: -12 }} aria-hidden="true">o</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 205,top: -12 }} aria-hidden="true">d</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 267.25,top: -12 }} aria-hidden="true">u</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 331.5,top: -12 }} aria-hidden="true">c</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 383.5, top: -12 }} aria-hidden="true">t</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 467.25,top: -12 }} aria-hidden="true">d</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 531,   top: -11.1  }} aria-hidden="true">e</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 587.25,top: -10.95 }} aria-hidden="true">s</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 642.25,top: -10.83 }} aria-hidden="true">i</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 696,   top: -10.68 }} aria-hidden="true">g</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 756,   top: -10.51 }} aria-hidden="true">n</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 819.75,top: -10.36 }} aria-hidden="true">e</span>
          <span className={`${s.fill} ${s.abs}`} style={{ left: 876,   top: -10.21 }} aria-hidden="true">r</span>
        </Link>

        </div>{/* end tags-wrap */}

        <Link href="/case-studies" className={s.ctaWrapper}>
          <span className={s.ctaLink}>check out my case studies</span>
          <svg aria-hidden="true" width="22" height="28" viewBox="0 0 22 28" fill="none" style={{flexShrink:0}}>
            <path d="M2 2L20 14L2 26Z" fill="var(--color-accent)" stroke="var(--color-accent)" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"/>
          </svg>
        </Link>

      </div>
    </main>
  );
}
