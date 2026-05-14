import Image from 'next/image';
import MollyMuellerHeader from '@/app/case-studies/MollyMuellerHeader';
import StackedCard from '@/app/components/StackedCard/StackedCard';
import Nav from '@/app/components/Nav/Nav';
import s from './page.module.css';

export default function AboutPage() {
  return (
    <main className={s.page}>

      <MollyMuellerHeader id="mm-header-about" />

      <Nav />

      {/* About card */}
      <div className={s.cardWrap}>
        <StackedCard>
          <div className={s.cardInner}>

            {/* Left: photo + name + role */}
            <div className={s.leftCol}>
              <div className={s.photoWrap}>
                <Image
                  src="/images/molly-about.webp"
                  alt="Molly Mueller"
                  width={260}
                  height={260}
                  className={s.photo}
                  priority
                />
              </div>
              <h1 className={s.name}>molly mueller</h1>
              <p className={s.role}>Senior Product Designer</p>
              <div className={s.accent} />
            </div>

            {/* Right: bio */}
            <div className={s.rightCol}>
              <p className={s.bio}>
                <b>I'm an ai-empowered, systems-obsessed, and data-driven product designer with 8+ years experience.</b>
              </p>
              <p className={s.bio}>
                For the past few years I was a Senior Product Designer at Freedom Forever, one of the largest residential solar installers in the U.S. I led design for Volt, the company's proprietary mobile sales app, from MVP through two full redesigns.
              </p>
              <p className={s.bio}>
                Over the last year, I crossed into front-end AI engineering — building out a design system in code, shipping the full redesign, and developing AI-powered tooling the team used to ship faster and implement design more consistently. At a moment when the line between designer, PM, and developer is blurring fast, I jumped in and seized the moment.
              </p>
              <p className={s.bio}>
                When I'm not designing or building products I can often be found walking around San Francisco, going to movies or shows with my husband or at home: painting, reading, or watching tv with our two cats.
              </p>
              <p className={s.bio}>
                <b>I'm based in San Francisco and currently open to freelance or full time opportunities.</b>
              </p>
            </div>

          </div>
        </StackedCard>
      </div>

    </main>
  );
}
