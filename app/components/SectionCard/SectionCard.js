import Image from 'next/image';
import StackedCard from '../StackedCard/StackedCard';
import PhotoCollage from '../PhotoCollage/PhotoCollage';
import ContextTooltip from '../ContextTooltip/ContextTooltip';
import s from './SectionCard.module.css';

/** Wrap segments of *emphasized text* in <em>; plain strings pass through unchanged. */
function parseEmphasisSegments(text) {
  if (typeof text !== 'string') return text;
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.length >= 2 && part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

/**
 * SectionCard
 * A full-case-study content section.
 *
 * Props:
 *   heading      — section title in Bungee 60px
 *   tags         — optional array of tag strings (shown in accent color below heading)
 *   leftContent  — array of paragraph strings for the left column
 *   rightContent — paragraph strings OR { intro: string, bullets: string[] } for bullet lists
 *   images       — optional array of { src, alt } shown below the text columns
 *   collage      — if true, images rendered as PhotoCollage (4-panel fanned layout)
 *   mobileImage  — optional { src, alt } — shown between left and right text on mobile
 */
export default function SectionCard({
  heading,
  tags = [],
  leftContent = [],
  rightContent = [],
  images = [],
  imagesBelow = [],
  collage = false,
  mobileImage = null,
  cta = null,
  imageRight = null,
  imageLeft = null,
  collageBelow = false,
  leftCollage = null,
  introImages = null,
}) {
  const rightIsBullets =
    rightContent && !Array.isArray(rightContent) && rightContent.bullets;

  const hasImages = images && images.length > 0;

  return (
    <StackedCard>
      <div className={s.inner}>

        {/* Heading */}
        <h2 className={s.heading}>{heading}</h2>

        {/* Optional tags */}
        {tags.length > 0 && (
          <div className={s.tags}>
            {tags.map((t) => <span key={t}>#{t}</span>)}
          </div>
        )}

        {/* Intro images row: laptop | phone | laptop (above body copy) */}
        {introImages && introImages.length > 0 && (
          <div className={s.introImageRow}>
            {introImages.map((img, i) => (
              <div
                key={i}
                className={img.type === 'phone' ? s.introPhoneWrap : s.introLaptopWrap}
              >
                {img.isGif ? (
                  <>
                    {/* Layer 1: phone body with dark gray bg already baked in */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/iphone-background.png" alt="" className={s.introPhoneBg} />
                    {/* Layer 2: GIF inside screen area */}
                    <div className={s.introGifWrap}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.src} alt={img.alt || ''} className={s.introGifEl} />
                    </div>
                    {/* Layer 3: black outline frame on top */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/iphone-frame-cutout.png" alt="" className={s.introPhoneFrameOverlay} />
                  </>
                ) : (
                  <Image
                    src={img.src}
                    alt={img.alt || ''}
                    fill
                    className={s.introImageEl}
                    sizes="(max-width: 767px) 80vw, 38vw"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Images — collage or grid (above body copy) */}
        {hasImages && (
          <div className={s.imagesSection}>
            {collage ? (
              <PhotoCollage images={images} />
            ) : (
              <div className={s.imagesRow} data-count={images.length}>
                {images.map((img, i) => (
                  <div key={i} className={s.imageItem}>
                    {img.src ? (
                      <Image
                        src={img.src}
                        alt={img.alt || ''}
                        width={800}
                        height={600}
                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
                      />
                    ) : (
                      <div className={s.imgPlaceholder} aria-hidden="true" />
                    )}
                    {img.alt && <p className={s.imgCaption}>{img.alt}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Body columns */}
        <div className={`${s.columns}${imageLeft ? ' ' + s.columnsStretch : ''}`}>

          {/* Left column — portrait image, paragraphs, or collage */}
          <div className={`${s.col}${imageLeft ? ' ' + s.colImageLeft : ''}`}>
            {imageLeft ? (
              <Image
                src={imageLeft.src}
                alt={imageLeft.alt || ''}
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
              />
            ) : null}
            {leftContent.map((para, i) => (
              <p key={i}>
                {typeof para === 'string' ? parseEmphasisSegments(para) : (
                  <>
                    {para.prefix && para.prefix}
                    {para.tooltip ? (
                      <ContextTooltip
                        title={para.tooltip.title}
                        content={para.tooltip.paragraphs.map((t, j) => <span key={j} style={{ display: 'block' }}>{t}</span>)}
                      >
                        <span>{para.lead}</span>
                      </ContextTooltip>
                    ) : (
                      <span className={s.bodyLead}>{para.lead}</span>
                    )}
                    {para.text && ' '}{para.text}
                  </>
                )}
              </p>
            ))}

            {/* Left-column image(s) — renders below paragraphs inside the left column */}
            {leftCollage && leftCollage.length === 1 && (
              <div className={s.leftImageWrap}>
                <Image
                  src={leftCollage[0].src}
                  alt={leftCollage[0].alt || ''}
                  width={800}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
                />
              </div>
            )}
            {leftCollage && leftCollage.length === 2 && (
              <div className={s.leftCollageWrap}>
                <Image
                  src={leftCollage[0].src}
                  alt={leftCollage[0].alt || ''}
                  width={1200}
                  height={600}
                  className={s.overlapBase}
                />
                <div className={s.overlapFront}>
                  <Image
                    src={leftCollage[1].src}
                    alt={leftCollage[1].alt || ''}
                    width={800}
                    height={600}
                    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Mobile-only image between columns */}
          {mobileImage && (
            <div className={s.mobileImage}>
              {mobileImage.src ? (
                <Image
                  src={mobileImage.src}
                  alt={mobileImage.alt || ''}
                  width={800}
                  height={500}
                  className={s.mobileImgEl}
                />
              ) : (
                <div className={s.mobileImgPlaceholder} aria-hidden="true" />
              )}
            </div>
          )}

          {/* Right column — paragraphs, bullet list, or portrait image */}
          <div className={s.col}>
            {imageRight ? (
              <div className={s.imageRightWrap}>
                <Image
                  src={imageRight.src}
                  alt={imageRight.alt || ''}
                  width={391}
                  height={632}
                  style={{ width: '100%', maxWidth: imageRight.maxWidth || '342px', height: 'auto', display: 'block', borderRadius: '4px', margin: '0 auto' }}
                />
              </div>
            ) : rightIsBullets ? (
              <>
                {rightContent.para && (
                  <p>{parseEmphasisSegments(rightContent.para)}</p>
                )}
                {rightContent.intro && (
                  <p>{parseEmphasisSegments(rightContent.intro)}</p>
                )}
                <ul>
                  {rightContent.bullets.map((item, i) => (
                    <li key={i}>{parseEmphasisSegments(item)}</li>
                  ))}
                </ul>
              </>
            ) : (
              Array.isArray(rightContent) &&
              rightContent.map((para, i) => (
                <p key={i}>{parseEmphasisSegments(para)}</p>
              ))
            )}
          </div>

        </div>

        {/* Images below body copy */}
        {imagesBelow && imagesBelow.length > 0 && (
          <div className={s.imagesSection}>
            {collageBelow && imagesBelow.length === 2 ? (
              <div className={s.imagesOverlapWrap}>
                <Image
                  src={imagesBelow[0].src}
                  alt={imagesBelow[0].alt || ''}
                  width={1200}
                  height={600}
                  className={s.overlapBase}
                />
                <div className={s.overlapFront}>
                  <Image
                    src={imagesBelow[1].src}
                    alt={imagesBelow[1].alt || ''}
                    width={800}
                    height={600}
                    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                  />
                </div>
              </div>
            ) : (
              <div className={s.imagesRow} data-count={imagesBelow.length}>
                {imagesBelow.map((img, i) => (
                  <div key={i} className={s.imageItem} style={img.maxWidth ? { maxWidth: img.maxWidth, margin: '0 auto' } : {}}>
                    {img.src ? (
                      <Image
                        src={img.src}
                        alt={img.alt || ''}
                        width={1200}
                        height={600}
                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
                      />
                    ) : (
                      <div className={s.imgPlaceholder} aria-hidden="true" />
                    )}
                    {img.caption && <p className={s.imgCaption}>{img.caption}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CTA link */}
        {cta && (
          <div className={s.ctaRow}>
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={s.ctaLink}
            >
              {cta.text}
              <span className={s.ctaArrow} aria-hidden="true" />
            </a>
          </div>
        )}

      </div>
    </StackedCard>
  );
}
