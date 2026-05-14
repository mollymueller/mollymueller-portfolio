'use client';

import BungeeHeading from '@/app/components/BungeeHeading/BungeeHeading';
import useLayoutEffectSafe from '@/app/hooks/useLayoutEffectSafe';
import s from './page.module.css';

// scaleWidth: virtual intrinsic width used ONLY for the scale ratio.
// Centering always uses the actual `width` (DOM element size).
// Pass the same scaleWidth to multiple lines so they share an identical ratio.
function ScaledLine({ id, shadeWords, letters, width, height, fontSize, ariaLabel = '', mobileWidth, scaleWidth }) {
  useLayoutEffectSafe(() => {
    function scale() {
      const el = document.getElementById(id);
      if (!el) return;
      const outer = el.parentElement;
      const containerW = outer ? outer.clientWidth : window.innerWidth;
      if (!containerW) return;
      const isMobile = window.innerWidth < 768;
      const intrinsicW = scaleWidth || ((isMobile && mobileWidth) ? mobileWidth : width);
      const ratio = Math.min(containerW / intrinsicW, 1);
      const visualW = width * ratio;
      const offsetX = (containerW - visualW) / 2;
      el.style.transformOrigin = 'top left';
      el.style.transform = `translateX(${offsetX}px) scale(${ratio})`;
      el.style.height = `${height * ratio}px`;
    }
    scale();
    window.addEventListener('resize', scale);
    return () => window.removeEventListener('resize', scale);
  }, [id, width, mobileWidth, scaleWidth]);

  return (
    <div className={s.titleOuter}>
      <div id={id} className={s.titleInner} style={{ width, height }}>
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

export default function CaseStudyTitle({
  ariaLabel,
  shadeWords,
  letters,
  width,
  height,
  fontSize = 120,
  mobileWidth,
  mobileSplit,
}) {
  return (
    <>
      {/* Desktop single-line heading; hidden on mobile only when a mobileSplit exists */}
      <div className={`${s.desktopTitle}${mobileSplit ? ` ${s.desktopTitleHasSplit}` : ''}`}>
        <ScaledLine
          id="cs-title"
          ariaLabel={ariaLabel}
          shadeWords={shadeWords}
          letters={letters}
          width={width}
          height={height}
          fontSize={fontSize}
          mobileWidth={mobileWidth}
        />
      </div>

      {/* Mobile: per-word BungeeHeadings stacked — correct Bungee technique */}
      {mobileSplit && (
        <div className={s.mobileSplitWrap} role="heading" aria-level={1} aria-label={ariaLabel}>
          {mobileSplit.map((line, i) => (
            <ScaledLine
              key={i}
              id={`cs-title-m${i}`}
              shadeWords={line.shadeWords}
              letters={line.letters}
              width={line.width}
              height={line.height}
              fontSize={line.fontSize || fontSize}
              scaleWidth={line.scaleWidth}
            />
          ))}
        </div>
      )}
    </>
  );
}
