import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCaseStudy, getFilteredCaseStudies } from '@/app/data/case-studies';
import CaseStudyTitle from './CaseStudyTitle';
import CaseStudyPageIntro from './CaseStudyPageIntro';
import { SectionCard } from '@/app/components';
import s from './page.module.css';

// BungeeHeading positions per slug — taken from Figma / BungeeHeading docstring.
// left values are center-of-letter positions (CSS applies translateX(-50%) on .fill).
// volt coordinates are from Figma. gamification + solar-university are measured from
// scaled 60px reference data until Figma frames exist for those titles.
const HEADING_DATA = {
  volt: {
    fontSize: 90,
    shadeWords: [
      { text: 'volt', left: 0,      top: 10.5 },
      { text: '2.0',  left: 315.75, top: 5.25 },
    ],
    letters: [
      { char: 'v', left: 49,  top: 5 },
      { char: 'o', left: 125, top: 5 },
      { char: 'l', left: 199.5,    top: 5 },
      { char: 't', left: 261.5, top: 5 },
      { char: '2', left: 362, top: 0 },
      { char: '.', left: 417, top: 0 },
      { char: '0', left: 476.25, top: 0 },
    ],
    width: 500,
    height: 113,
  },
  gamification: {
    fontSize: 90,
    shadeWords: [
      { text: 'gamification', left: 0, top: 9 },
    ],
    letters: [
      { char: 'g', left: 50,  top: 3 },
      { char: 'a', left: 124, top: 3 },
      { char: 'm', left: 204,    top: 3 },
      { char: 'i', left: 276.5, top: 3 },
      { char: 'f', left: 343, top: 3 },
      { char: 'i', left: 404.5, top: 3 },
      { char: 'c', left: 470, top: 3 },
      { char: 'a', left: 541,  top: 3 },
      { char: 't', left: 608, top: 3 },
      { char: 'i', left: 673, top: 3 },
      { char: 'o', left: 743, top: 3 },
      { char: 'n', left: 819, top: 3 },
    ],
    width: 844,
    height: 113,
  },
  'solar-university': {
    fontSize: 90,
    shadeWords: [
      { text: 'solar university', left: 0, top: 9 },
    ],
    letters: [
      { char: 's', left: 46,  top: 3 },
      { char: 'o', left: 117, top: 3 },
      { char: 'l', left: 191.5, top: 3 },
      { char: 'a', left: 265.75, top: 3 },
      { char: 'r', left: 340, top: 3 },
      { char: 'u', left: 445.5, top: 3 },
      { char: 'n', left: 522.5, top: 3 },
      { char: 'i', left: 591, top: 3 },
      { char: 'v', left: 660.38, top: 3 },
      { char: 'e', left: 732.38, top: 3 },
      { char: 'r', left: 804, top: 3 },
      { char: 's', left: 875.5, top: 3 },
      { char: 'i', left: 940.5, top: 3 },
      { char: 't', left: 1006, top: 3 },
      { char: 'y', left: 1076, top: 3 },
    ],
    width: 1101,
    height: 113,
  },
};

export async function generateStaticParams() {
  const studies = getFilteredCaseStudies();
  return studies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} — Molly Mueller`,
    description: study.subtitle ?? `${study.title} case study`,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const headingData = HEADING_DATA[slug];

  return (
    <main className={s.page}>

      {/* ── Page header: title, then back below ─────── */}
      <div className={s.pageHeader}>


        {/* ◄ back — below heading, left-aligned */}
        <Link href="/case-studies" className={s.backLink}>
          <svg aria-hidden="true" width="22" height="28" viewBox="0 0 22 28" fill="none" className={s.backArrow}>
            <path d="M20 2L2 14L20 26Z" fill="var(--color-accent)" stroke="var(--color-accent)" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"/>
          </svg>
          back
        </Link>

        {/* Title — full width, centered */}
        <div className={s.titleCenter}>
          {headingData ? (
            <CaseStudyTitle
              ariaLabel={study.title}
              shadeWords={headingData.shadeWords}
              letters={headingData.letters}
              width={headingData.width}
              height={headingData.height}
              fontSize={headingData.fontSize}
            />
          ) : (
            <h1 className={s.titleFallback} aria-label={study.title}>
              <span className={s.titleFallbackShade} aria-hidden="true">{study.title}</span>
              <span className={s.titleFallbackFill} aria-hidden="true">{study.title}</span>
            </h1>
          )}
        </div>


      </div>

      {/* ── Intro card: subtitle pill + role/scope + hero image ── */}
      <div className={s.introRow}>
        <CaseStudyPageIntro
          subtitle={study.subtitle}
          role={study.role}
          scope={study.scope}
          introImage={study.introImage}
          introImages={study.introImages}
        />
      </div>

      {/* ── Section cards ─────────────────────────── */}
      <div className={s.sections}>
        {study.sections.map((section) => (
          <SectionCard
            key={section.id}
            heading={section.heading}
            tags={section.tags}
            leftContent={section.left}
            rightContent={section.right}
            images={section.images}
            imagesBelow={section.imagesBelow}
            collage={section.collage}
            imageRight={section.imageRight}
            imageLeft={section.imageLeft}
            collageBelow={section.collageBelow}
            leftCollage={section.leftCollage}
            introImages={section.introImages}
            cta={section.cta}
          />
        ))}
      </div>

    </main>
  );
}
