import { getFilteredCaseStudies } from '@/app/data/case-studies';
import CaseStudyIntroCard from '@/app/components/CaseStudyIntroCard/CaseStudyIntroCard';
import MollyMuellerHeader from './MollyMuellerHeader';
import Nav from '@/app/components/Nav/Nav';
import s from './page.module.css';

export const metadata = {
  title: 'Case Studies — Molly Mueller',
  description: 'AI empowered, systems obsessed, data driven product design case studies.',
};

export default async function CaseStudiesPage({ searchParams }) {
  const params = await searchParams;
  const activeTag = params?.tag ?? null;
  const studies = getFilteredCaseStudies(activeTag);

  return (
    <main className={s.page}>

      {/* MOLLY MUELLER header — client component for JS scaling */}
      <MollyMuellerHeader />

      <Nav />

      {/* Case study cards */}
      <div className={s.cards}>
        {studies.map((study) => (
          <CaseStudyIntroCard
            key={study.slug}
            slug={study.slug}
            title={study.title}
            titleSize={study.titleSize}
            tags={study.tags}
            activeTag={activeTag}
            excerpt={study.excerpt}
            image={study.image}
            imageAlt={study.imageAlt}
            subtitle={study.subtitle}
            tagsRight={study.tagsRight}
            cardImages={study.cardImages ?? null}
            imageOffset={study.imageOffset ?? 0}
          />
        ))}
      </div>

    </main>
  );
}
