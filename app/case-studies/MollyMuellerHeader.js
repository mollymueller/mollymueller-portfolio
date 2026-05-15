'use client';

import BungeeHeading from '../components/BungeeHeading/BungeeHeading';
import useLayoutEffectSafe from '../hooks/useLayoutEffectSafe';
import s from './page.module.css';

const SHADE_WORDS = [
  { text: 'molly mueller', left: 611, top: 0, center: true },
];

const FILL_LETTERS = [
  // molly
  { char: 'm', left: 73,    top: -6 },
  { char: 'o', left: 179.5, top: -6 },
  { char: 'l', left: 277.5, top: -6 },
  { char: 'l', left: 372.5, top: -6 },
  { char: 'y', left: 461.5, top: -6 },
  // mueller
  { char: 'm', left: 606,   top: -6 },
  { char: 'u', left: 714,   top: -6 },
  { char: 'e', left: 810.5, top: -6 },
  { char: 'l', left: 902.5, top: -6 },
  { char: 'l', left: 998.5, top: -6 },
  { char: 'e', left: 1091,  top: -6 },
  { char: 'r', left: 1187,  top: -6 },
];

// Mobile split: each word as its own BungeeHeading, each JS-scaled independently.
// Both lines use scaleWidth=960 so they scale at the same ratio and appear the same
// visual height as case-study titles (fontSize 90, scaleWidth 720): 120/90 × 720 = 960.
//
// "molly" fill positions are the same as desktop (shade starts at ~x=0 either way).
// "mueller" fill positions rebased by 533 — the offset where "mueller" shade begins
// in the desktop "molly mueller" text (verified: 'm' at 606 − 533 = 73, same bearing
// as the 'm' in "molly", confirming the rebase is consistent).
const MOBILE_LINES = [
  {
    id: 'mm-header-m0',
    scaleWidth: 960,
    shadeWords: [{ text: 'molly', left: 0, top: 0 }],
    letters: [
      { char: 'm', left: 73,    top: -6 },
      { char: 'o', left: 179.5, top: -6 },
      { char: 'l', left: 277.5, top: -6 },
      { char: 'l', left: 372.5, top: -6 },
      { char: 'y', left: 461.5, top: -6 },
    ],
    width: 510,
    height: 158,
  },
  {
    id: 'mm-header-m1',
    scaleWidth: 960,
    shadeWords: [{ text: 'mueller', left: 0, top: 0 }],
    letters: [
      { char: 'm', left: 73,   top: -6 },
      { char: 'u', left: 181,  top: -6 },
      { char: 'e', left: 277.5, top: -6 },
      { char: 'l', left: 369.5, top: -6 },
      { char: 'l', left: 465.5, top: -6 },
      { char: 'e', left: 558,  top: -6 },
      { char: 'r', left: 654,  top: -6 },
    ],
    width: 720,
    height: 158,
  },
];

// scaleWidth: virtual width used to compute the scale ratio (shared across lines
// so both words always scale at the same rate). width is the BungeeHeading DOM width.
function ScaledLine({ id, shadeWords, letters, width, height, scaleWidth }) {
  useLayoutEffectSafe(() => {
    function scale() {
      const el = document.getElementById(id);
      if (!el) return;
      const outer = el.parentElement;
      const containerW = outer ? outer.clientWidth : window.innerWidth;
      if (!containerW) return; // hidden — skip
      const intrinsicW = scaleWidth || width;
      const ratio = Math.min(containerW / intrinsicW, 1);
      const visualW = width * ratio;
      const offsetX = (containerW - visualW) / 2;
      el.style.transformOrigin = 'top left';
      el.style.transform = `translateX(${offsetX}px) scale(${ratio})`;
      el.style.height = `${height * ratio}px`;
      el.style.visibility = 'visible';
    }
    scale();
    window.addEventListener('resize', scale);
    return () => window.removeEventListener('resize', scale);
  }, [id, width, scaleWidth]);

  return (
    <div className={s.mobileLineOuter}>
      <div id={id} className={s.headerInner} style={{ width, height }}>
        <BungeeHeading
          ariaLabel=""
          fontSize={120}
          width={width}
          height={height}
          shadeWords={shadeWords}
          letters={letters}
        />
      </div>
    </div>
  );
}

export default function MollyMuellerHeader({ id = 'mm-header' }) {
  useLayoutEffectSafe(() => {
    function scale() {
      const el = document.getElementById(id);
      if (!el) return;
      const outer = el.parentElement;
      const containerW = outer ? outer.clientWidth : window.innerWidth;
      if (!containerW) return; // hidden — skip
      const ratio = Math.min(containerW / 1233, 1);
      const visualW = 1233 * ratio;
      const offsetX = (containerW - visualW) / 2;
      el.style.transformOrigin = 'top left';
      el.style.transform = `translateX(${offsetX}px) scale(${ratio})`;
      el.style.visibility = 'visible';
    }
    scale();
    window.addEventListener('resize', scale);
    return () => window.removeEventListener('resize', scale);
  }, [id]);

  return (
    <>
      {/* Desktop: single-line JS-scaled */}
      <div className={s.headerOuter}>
        <div id={id} className={s.headerInner}>
          <BungeeHeading
            ariaLabel="Molly Mueller"
            fontSize={120}
            width={1233}
            height={158}
            shadeWords={SHADE_WORDS}
            letters={FILL_LETTERS}
          />
        </div>
      </div>

      {/* Mobile: per-word BungeeHeadings stacked — correct Bungee technique */}
      <div className={s.mobileHeaderSplit} role="heading" aria-level={1} aria-label="Molly Mueller">
        {MOBILE_LINES.map((line) => (
          <ScaledLine key={line.id} {...line} />
        ))}
      </div>
    </>
  );
}
