import Link from 'next/link';
import Image from 'next/image';
import StackedCard from '../StackedCard/StackedCard';
import ContextTooltip from '../ContextTooltip/ContextTooltip';
import LightboxImage from '../Lightbox/LightboxImage';
import s from './CaseStudyIntroCard.module.css';

const TAG_LABELS = {
  ai: 'ai-empowered',
  systems: 'systems-obsessed',
  data: 'data-driven',
};

export default function CaseStudyIntroCard({
  slug,
  title,
  titleSize = 60,
  tags = [],
  activeTag = null,
  excerpt = [],
  image = null,
  imageAlt = '',
  subtitle = null,
  tagsRight = false,
  cardImages = null,
  badgeImages = null,
  imageOffset = 0,
  priority = false,
  role = null,
  scope = null,
}) {
  const href = `/case-studies/${slug}`;

  const tagElements = tags.map((tag) => (
    <span
      key={tag}
      className={`${s.tag} ${tag === activeTag ? s.active : ''}`}
    >
      #{TAG_LABELS[tag] ?? tag}
    </span>
  ));

  return (
    <StackedCard>

      {/* Header row: title left, tags right (when tagsRight) */}
      <div className={s.cardTop}>
        <h2 className={s.title} style={{ fontSize: titleSize + 'px' }}>
          <Link href={href} className={s.titleLink}>{title}</Link>
        </h2>
        {tagsRight && (
          <div className={s.tagsInline} aria-label="Case study tags">
            {tagElements}
          </div>
        )}
      </div>

      {/* Tags below title (default layout) */}
      {!tagsRight && (
        <div className={s.tagsBelow} aria-label="Case study tags">
          {tagElements}
        </div>
      )}

      {/* Body + image */}
      <div className={s.content}>
        <div className={s.leftCol}>
          {/* Subtitle (optional) — inside leftCol so image aligns to its top */}
          {subtitle && <p className={s.subtitle}>{subtitle}</p>}
          <div className={s.body}>
            {excerpt.map((para, i) => (
              <p key={i}>
                {typeof para === 'string' ? para : para.link ? (
                  <>
                    {para.prefix && para.prefix}
                    <a href={para.link.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>{para.link.text}</a>
                    {para.suffix && para.suffix}
                  </>
                ) : para.italic ? (
                  <>{para.prefix}<em>{para.italic}</em>{para.suffix}</>
                ) : (
                  <>
                    {para.leadLink ? (
                      <>
                        {para.prefix && para.prefix}
                        <a
                          href={para.leadLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'var(--color-accent)', textDecoration: 'none' }}
                        >
                          {para.leadLink.text}
                        </a>
                        {para.leadSep}
                        {para.tooltip && (
                          <ContextTooltip
                            title={para.tooltip.title}
                            content={para.tooltip.paragraphs.map((t, j) => <span key={j} style={{ display: 'block' }}>{t}</span>)}
                          >
                            <span>{para.lead}</span>
                          </ContextTooltip>
                        )}
                      </>
                    ) : para.tooltip ? (
                      <ContextTooltip
                        title={para.tooltip.title}
                        content={para.tooltip.paragraphs.map((t, j) => <span key={j} style={{ display: 'block' }}>{t}</span>)}
                      >
                        <span>{para.lead}</span>
                      </ContextTooltip>
                    ) : (
                      <span className={s.bodyLead}>{para.lead}</span>
                    )}
                    {para.text && <>{' '}{para.text}</>}
                  </>
                )}
              </p>
            ))}
          </div>

          {/* Role / Scope container */}
          {(role || scope) && (
            <div className={s.roleScope}>
              <p className={s.roleScopeText}>
                {role && (
                  <><span className={s.roleScopeLabel}>My role: </span>{role}<br /></>
                )}
                {scope && (
                  <><span className={s.roleScopeLabel}>Scope: </span>{scope}</>
                )}
              </p>
            </div>
          )}

          {/* Mobile-only: tags shown after body copy */}
          <div className={s.mobileTagsEnd} aria-label="Case study tags">
            {tagElements}
          </div>
        </div>

        {cardImages ? (
          <div className={s.cardImageCol}>
            {/* Phone cluster */}
            <div className={s.phoneCluster}>
              {cardImages.phones.map((phone, i) => (
                <div
                  key={i}
                  className={
                    phone.position === 'center' ? s.phoneCenter :
                    phone.position === 'left'   ? s.phoneLeft   : s.phoneRight
                  }
                >
                  {phone.isGif ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/iphone-background.png" alt="" className={s.phoneBg} fetchpriority={priority ? 'high' : undefined} />
                      <div className={s.phoneGifWrap}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={phone.src} alt={phone.alt || ''} className={s.phoneGifEl} fetchpriority={priority ? 'high' : undefined} />
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/iphone-frame-cutout.png" alt="" className={s.phoneFrameOverlay} fetchpriority={priority ? 'high' : undefined} />
                    </>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={phone.src} alt={phone.alt || ''} className={s.phoneFlatImg} fetchpriority={priority ? 'high' : undefined} />
                  )}
                </div>
              ))}
            </div>
            {/* Laptop below cluster */}
            {cardImages.laptop && (
              <div className={s.laptopWrap}>
                <Image
                  src={cardImages.laptop.src}
                  alt={cardImages.laptop.alt || ''}
                  width={374}
                  height={225}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority={priority}
                />
              </div>
            )}
          </div>
        ) : badgeImages ? (
          /* Gamification layout: badges row above hero image */
          <div className={s.badgesImageCol}>
            <div className={s.badgesRow}>
              {badgeImages.map((badge, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={badge.src} alt={badge.alt || ''} className={s.badgeImg} />
              ))}
            </div>
            {image && (
              <LightboxImage src={image} alt={imageAlt || title}>
                <Image
                  src={image}
                  alt={imageAlt || title}
                  width={910}
                  height={766}
                  sizes="(max-width: 767px) 100vw, 560px"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority={priority}
                  fetchPriority={priority ? 'high' : undefined}
                />
              </LightboxImage>
            )}
          </div>
        ) : (
          <div className={s.imageCol} style={{ marginTop: imageOffset }}>
            {image ? (
              <LightboxImage src={image} alt={imageAlt || title}>
                <Image
                  src={image}
                  alt={imageAlt || title}
                  width={5270}
                  height={4096}
                  sizes="(max-width: 767px) 100vw, 607px"
                  style={{ width: '100%', height: 'auto', aspectRatio: '5270 / 4096' }}
                  priority={priority}
                  fetchPriority={priority ? 'high' : undefined}
                />
              </LightboxImage>
            ) : (
              <div className={s.imagePlaceholder} aria-hidden="true">
                image
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className={s.footer}>
        <Link href={href} className={s.caseStudyLink}>
          full case study
          <svg aria-hidden="true" width="22" height="28" viewBox="0 0 22 28" fill="none" style={{flexShrink:0}}>
            <path d="M2 2L20 14L2 26Z" fill="var(--color-accent)" stroke="var(--color-accent)" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"/>
          </svg>
        </Link>
      </div>

    </StackedCard>
  );
}
