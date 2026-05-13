import s from './BungeeHeading.module.css';

/**
 * BungeeHeading
 * The layered Bungee Shade + Bungee Regular heading technique,
 * data-driven so it works for any case study title.
 *
 * Props:
 *   ariaLabel   — accessible text for the heading (required)
 *   fontSize    — font size in px (default: 120 for case study titles)
 *   width       — container width in px (must accommodate all letters)
 *   height      — container height in px
 *   shadeWords  — array of { text, left, top } — the Bungee Shade base layers
 *   letters     — array of { char, left, top } — the Bungee Regular fill letters,
 *                 each centered via translateX(-50%) at the given left value
 *   className   — optional extra class on the wrapper
 *
 * All left/top values are in px, taken directly from Figma dev mode.
 *
 * Example (Volt 2.0 at 120px):
 *   shadeWords={[
 *     { text: 'volt', left: 0,   top: 14 },
 *     { text: '2.0',  left: 421, top: 7  },
 *   ]}
 *   letters={[
 *     { char: 'v', left: 65,    top: 14 },
 *     { char: 'o', left: 165,   top: 14 },
 *     { char: 'l', left: 264,   top: 14 },
 *     { char: 't', left: 345.5, top: 14 },
 *     { char: '2', left: 480.5, top: 7  },
 *     { char: '.', left: 555.5, top: 7  },
 *     { char: '0', left: 635,   top: 7  },
 *   ]}
 */
export default function BungeeHeading({
  ariaLabel,
  fontSize = 120,
  width,
  height,
  shadeWords = [],
  letters = [],
  className = '',
}) {
  return (
    <div
      className={`${s.wrapper} ${className}`}
      style={{
        fontSize,
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
      }}
      aria-label={ariaLabel}
      role="heading"
      aria-level={1}
    >
      {/* Shade base layers */}
      {shadeWords.map((word, i) => (
        <span
          key={i}
          className={s.shade}
          style={{
            left: word.left,
            top: word.top,
            whiteSpace: 'nowrap',
            ...(word.center && { transform: 'translateX(-50%)' }),
          }}
          aria-hidden="true"
        >
          {word.text}
        </span>
      ))}

      {/* Fill letter overlays */}
      {letters.map((letter, i) => (
        <span
          key={i}
          className={s.fill}
          style={{ left: letter.left, top: letter.top }}
          aria-hidden="true"
        >
          {letter.char}
        </span>
      ))}
    </div>
  );
}
