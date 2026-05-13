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

export default function MollyMuellerHeader({ id = 'mm-header' }) {
  useLayoutEffectSafe(() => {
    function scale() {
      const el = document.getElementById(id);
      if (!el) return;
      const outer = el.parentElement;
      const containerW = outer ? outer.clientWidth : window.innerWidth;
      const ratio = Math.min(containerW / 1233, 1);
      const visualW = 1233 * ratio;
      const offsetX = (containerW - visualW) / 2;
      el.style.transformOrigin = 'top left';
      el.style.transform = `translateX(${offsetX}px) scale(${ratio})`;
    }
    scale();
    window.addEventListener('resize', scale);
    return () => window.removeEventListener('resize', scale);
  }, [id]);

  return (
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
  );
}
