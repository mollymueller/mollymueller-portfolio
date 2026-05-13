'use client';

import BungeeHeading from '@/app/components/BungeeHeading/BungeeHeading';
import useLayoutEffectSafe from '@/app/hooks/useLayoutEffectSafe';
import s from './page.module.css';

export default function CaseStudyTitle({ ariaLabel, shadeWords, letters, width, height, fontSize = 120 }) {
  useLayoutEffectSafe(() => {
    function scale() {
      const el = document.getElementById('cs-title');
      if (!el) return;
      const outer = el.parentElement;
      const containerW = outer ? outer.clientWidth : window.innerWidth;
      const ratio = Math.min(containerW / width, 1);
      const visualW = width * ratio;
      const offsetX = (containerW - visualW) / 2;
      el.style.transformOrigin = 'top left';
      el.style.transform = `translateX(${offsetX}px) scale(${ratio})`;
      el.style.height = `${height * ratio}px`;
    }
    scale();
    window.addEventListener('resize', scale);
    return () => window.removeEventListener('resize', scale);
  }, [width]);

  return (
    <div className={s.titleOuter}>
      <div id="cs-title" className={s.titleInner} style={{ width, height }}>
        <BungeeHeading
          ariaLabel={ariaLabel}
          fontSize={fontSize}
          width={width}
          height={height}
          shadeWords={shadeWords}
          letters={letters}
        />
      </div>
    </div>
  );
}
