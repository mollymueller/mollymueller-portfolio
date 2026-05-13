import Image from 'next/image';
import s from './PhotoCollage.module.css';

/**
 * PhotoCollage
 * 4-panel fanned/overlapping screenshot layout used in the AI Tooling section.
 * Each panel has a gradient fade-to-background at the bottom.
 *
 * Props:
 *   images — array of up to 4 { src, alt } objects
 *            src can be null for placeholder
 */
export default function PhotoCollage({ images = [] }) {
  const panelClasses = [s.panel1, s.panel2, s.panel3, s.panel4];

  // Pad to always render 4 panels
  const panels = [0, 1, 2, 3].map((i) => images[i] ?? null);

  return (
    <div className={s.collage} aria-hidden="true">
      {panels.map((img, i) => (
        <div key={i} className={`${s.panel} ${panelClasses[i]}`}>
          {img?.src ? (
            <Image
              src={img.src}
              alt={img.alt || ''}
              fill
              className={s.panelImg}
              sizes="(max-width: 767px) 100vw, 35vw"
            />
          ) : (
            <div className={s.panelPlaceholder}>
              image {i + 1}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
