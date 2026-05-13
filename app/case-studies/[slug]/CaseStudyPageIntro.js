import Image from 'next/image';
import StackedCard from '@/app/components/StackedCard/StackedCard';
import s from './CaseStudyPageIntro.module.css';

export default function CaseStudyPageIntro({ subtitle, role, scope, introImage, introImages }) {
  return (
    <StackedCard className={s.face}>
      <div className={s.inner}>

        {/* ── Subtitle pill ──────────────────────── */}
        {subtitle && (
          <div className={s.subtitlePill}>
            <p className={s.subtitleText}>{subtitle}</p>
          </div>
        )}

        {/* ── Role / Scope meta ──────────────────── */}
        {(role || scope) && (
          <p className={s.meta}>
            {role && (
              <>
                <span className={s.metaLabel}>My role:</span>
                <span className={s.metaValue}>{role}</span>
              </>
            )}
            {role && scope && <br />}
            {scope && (
              <>
                <span className={s.metaLabel}>Scope:</span>
                <span className={s.metaValue}>{scope}</span>
              </>
            )}
          </p>
        )}

      </div>

      {/* ── Three-image row (laptop | phone | laptop) ── */}
      {introImages && (
        <div className={s.imageRow}>
          {introImages.map((img, i) => (
            <div
              key={i}
              className={img.type === 'phone' ? s.phoneWrap : s.laptopWrap}
            >
              {img.isGif ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={img.src} alt={img.alt || ''} className={s.gifEl} />
              ) : (
                <Image
                  src={img.src}
                  alt={img.alt || ''}
                  fill
                  className={s.imageEl}
                  sizes="(max-width: 767px) 80vw, 38vw"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── Single intro image ── */}
      {introImage && !introImages && (
        <div className={s.heroWrap}>
          <Image
            src={introImage}
            alt=""
            width={1200}
            height={600}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            priority
          />
        </div>
      )}

    </StackedCard>
  );
}
