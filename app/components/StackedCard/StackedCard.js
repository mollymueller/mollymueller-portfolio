import s from './StackedCard.module.css';

/**
 * StackedCard
 * The signature three-layer shadow card used throughout the site.
 *
 * Props:
 *   children     — card content
 *   mobilePad    — if true, uses compact mobile padding even on desktop
 *                  (used when the parent explicitly wants compact padding)
 *   className    — extra class on the face (for one-off overrides)
 *   wrapClass    — extra class on the wrapper
 */
export default function StackedCard({
  children,
  mobilePad = false,
  className = '',
  wrapClass = '',
}) {
  const padClass = mobilePad ? s['pad-mobile'] : s['pad-desktop'];

  return (
    <div className={`${s.wrapper} ${wrapClass}`}>
      <div className={s.shadowRed}  aria-hidden="true" />
      <div className={s.shadowDark} aria-hidden="true" />
      <div className={`${s.face} ${padClass} ${className}`}>
        {children}
      </div>
    </div>
  );
}
