/**
 * Case study data
 * ───────────────
 * All case study content lives here. Add sections, update text,
 * swap image paths — the pages and components read from this file.
 *
 * tags must match the nav filter values: 'ai' | 'systems' | 'data'
 */

export const caseStudies = [
  {
    slug: 'volt',
    title: 'volt 2.0',
    tags: ['ai', 'systems'],
    titleSize: 55,
    tagsRight: true,
    excerpt: [
      {
        prefix: 'I led design and user research for ',
        leadLink: { text: 'Volt', href: 'https://apps.apple.com/us/app/volt/id1644756647' },
        leadSep: ', ',
        lead: "Freedom Forever's",
        tooltip: {
          title: 'Background & Context',
          paragraphs: [
            'I worked at Freedom Forever—one of the largest residential solar installers in the U.S.—from 2021 to 2026. My time there abruptly ended when the company filed for bankruptcy in April of 2026 following cascading bankruptcies in the residential solar industry.',

            'Prior to the bankruptcy, the software team kicked into high gear to compensate for cash flow crunches and reduced staff. These financial challenges accelerated AI adoption. Led by our VP of Product and Engineering, I received a master class and crash course in utilizing AI tools and best practices alongside my fellow product and developer colleagues.',
          ],
        },
        text: 'proprietary mobile sales app—from MVP through two full redesigns, and countless enhancements and feature releases. Recently I crossed into front-end AI engineering and built a design system in code, shipped the full redesign, and developed AI-powered tooling the team used to ship faster and implement design consistently.',
      },
      'My case studies here are all related to Volt 2.0. The Volt 2.0 iteration  wasn\'t just about the new look and design system--it was about new AI workflows that empowered me to elevate the UX and UI of the shipped product, work faster and communicate better with PMs and developers, and dive into the data directly to correct misalignment between a gamification feature and actual user behavior.',
    ],
    image: '/images/volt-hero.webp',
    imageAlt: 'Volt 2.0 — a suite of screens from the redesigned mobile app',
    imageOffset: 32,
    introImage: null,
    subtitle: 'A mobile app rebrand, a design system, and what happens when a designer gets into the code 🤗',
    role: 'Lead designer and front-end design engineer',
    scope: 'Design system, component library, Figma-to-code theming architecture, AI-assisted coding, AI design agent and skill creation',
    sections: [
      {
        id: 'origins',
        heading: "Volt\'s Origins & Evolution",
        tags: [],
        left: [
    
          {
            prefix: "The need for a custom native app for our sales teams had been brewing at Freedom Forever for years: ",
            lead: "our sales dealers",
            text: "were paying up to $30k a month for third-party canvassing software that wasn\'t integrated with our platform—a Freedom Forever solution meant free, fully customized tooling and a genuine differentiator in the industry.",
            tooltip: {
              title: "Sales Dealer Organizations",
              paragraphs: [
                "One of the most unique aspects of the residential solar industry is the nature of a sale — a deal isn\'t truly closed until the system is installed and working. This makes the relationship between the sellers (or dealers) and installers important — neither party makes money if the job is not completed and properly installed. Freedom Forever exclusive Super Dealer partnerships acted as the sales arm for the business. This mutually beneficial relationship incentivized Freedom Forever to support the dealers with development resources, including integrated software products, like the Volt App.",
              ],
            },
          },
          "In September 2022, the app found its moment and Volt was born. I took the lead design role and we launched the MVP in January 2023 with its core features: door knocking tools, lead management, leaderboards, and",
          
        ],
        right: [
          'appointment scheduling; prioritized for sales reps and appointment setters in the field.',
         'Within the first four months, downloads doubled, leads created grew from 59k to 583k, and events per user tripled. By March 2026, the app had grown to 18,000 monthly active users—with the majority consistently rating satisfaction with Volt 5/5. Features expanded to include competitions, commissions pipeline, project management, chat, rep onboarding, activity feeds, push notifications, and more.',
        ],
        images: [
          { src: '/images/volt-mvp-mockup.webp', alt: '[ MVP ]' },
          { src: '/images/volt-1-mockup.webp',   alt: '[ Volt 1.0 ]' },
          { src: '/images/volt-2-mockup.webp',   alt: '[ Volt 2.0 ]' },
        ],
      },
      {
        id: 'rebrand',
        heading: 'The 2.0 Rebrand',
        tags: [],
        left: [
          'Solar Pros—Volt\'s largest dealer partner at 64% of total MAU—merged with another super dealer. The stakeholder sales leaders had a clear ask surrounding the merger: Volt should feel native to their branding and speak to a "swaggy" sales rep culture.',
          'Working with their brand guidelines and direction, I developed the new look for Volt. The differentiator between the 1.0 rebrand and 2.0 was that this time I had a new superpower—Claude Code as my front-end engineering partner.',
        ],
        right: [
          'What started in Figma as a carefully thought-out design system became an opportunity to implement a theme-based token system with more defined rules for typography, colors, and components in the code itself—something my systems-obsessed, AI-curious brain could not resist.',
          'The result was a new visual language for Volt: a token-based design system that works consistently in Figma and in code, plus an AI-powered agent and design skill that checks for anti-patterns and hard-coded values and offers style guide corrections for anyone shipping Volt code.',
        ],
        images: [
          { src: '/images/volt-rebrand-banner-light.webp', alt: '' },
        ],
        imagesBelow: [
          { src: '/images/volt-rebrand-banner-2.webp', alt: '' },
        ],
      },
      {
        id: 'design-system',
        heading: 'Building the Design System',
        tags: [],
        left: [
          'Before I defined the new design system, I knew where I wanted to end up—with a simple yet visually striking system that could translate cleanly into the codebase and become the backbone of a design guide AI skill or agent.',
          'I started in Figma, designing core screens and iterating until I had the skeleton of a rules-based system I was satisfied with and had stakeholder sign-off. Then I shared the Figma design system with Claude with the direction to improve the current code architecture from a design system standpoint. Working with Claude Code and the team\'s developers, we devised the plan to replace hard coded UI elements with design tokens and a style theming architecture.',
          'One added complexity: the directive to use a dark gradient for the app\'s dark-themed UI. Volt had always been dark-first, so I put extra care into getting that primary dark mode *just right*.',
        ],
        right: {
          para: 'It required transparent components specific to the dark theme to maintain the modern, "swaggy" look. This meant the most straightforward token architecture was off the table. I still took pains to ensure the system was rules-based and legible to both developers and AI agents.',
          intro: 'The design system covers:',
          bullets: [
            'Full dark and light mode palettes with semantic color roles',
            'Opacity and translucent token variants for gradient surfaces',
            'Typography scale: Tomorrow (display/headings), Oswald (labels/buttons), Inter (body/UI)',
            'Sharp-corner-first component library: buttons, inputs, cards, sheets, navigation elements',
            'A published style guide designed to serve as the backbone for the AI skills and agent',
          ],
        },
        images: [
          { src: '/images/volt-design-guide-1.webp', alt: '' },
          { src: '/images/volt-design-system-2.webp', alt: '' },
        ],
        imageGapBelow: 24,
        cta: { text: 'view the guide', href: 'https://volt-styleguide.figma.site/' },
      },
      {
        id: 'into-the-code',
        heading: 'into the code',
        tags: [],
        left: [
          'I implemented the full UI rebrand in the app\'s code, iterating on the smallest details with Claude until the final screens mirrored my design vision. I also had Claude generate an HTML design guide that we referenced and iterated on as we went—which meant I was refining the design system and the code at the same time.',
          'The system in the code is organized around semantic tokens layered over primitives: primitives define the raw values, semantic tokens map those',
        ],
        right: [
          'primitives to roles — text.primary, surface.secondary, etc. A component never references a raw hex value; it references a role.', 
          'The architecture routed everything through a single centralized theme object passed down from PaperProvider—colors, opacity variants, gradient tokens, typography, spacing, shapes, and component-specific values—all defined once, flowing everywhere. This made it possible to rebrand Volt without affecting another app on our mobile platform that used a few shared components.', 
        ],
        images: [
          { src: '/images/volt-code-1.webp', alt: '' },
          { src: '/images/volt-code-2.webp', alt: '' },
        ],
        imageGapBelow: 24,
      },
      {
        id: 'ai-tooling',
        heading: 'The AI Tooling Layer',
        tags: [],
        left: [
          'Because I was deliberate and iterative about creating a systematic, rules based design guide in sync with the code, translating it into a Claude skill was straightforward. Once the design system was fully defined, I translated the entire system into a suite of Claude Code tooling—a skill, two slash commands, and a dedicated agent—tools anyone coding in the Volt app could use before QA and shipping.',
          'The Skill—Volt Style Guide Expert loads the full design system context—token values, component rules, dark/light mode specs, layout principles.',
          'Slash Commands\n/volt-tokens—reads token values directly from source files and returns current specs by category (colors, typography, spacing, shapes, components).',
        ],
        right: [
          '/volt-check — audits any file for design system violations across 10 categories. Reports issues with exact fixes but does not auto-fix—the developer decides what to change.',
          'The volt-reviewer-agent: A dedicated compliance agent that reviews git diffs for design system violations before code is committed or a PR is opened. Checks only new or modified lines, not entire files — flagging token misuse, anti-patterns, and component violations at the diff level.',
          'The tooling required testing and iteration, but after a few rounds the skills were working as expected—catching hard-coded values and most style rule violations and offering corrections that could easily be implemented.',
        ],
        images: [
          { src: '/images/volt-ai-tooling-1.png', alt: '' },
          { src: '/images/volt-ai-tooling-2.png', alt: '' },
        ],
      },
    ],
  },

  {
    slug: 'solar-university',
    title: 'solar university',
    tags: ['ai', 'data'],
    titleSize: 55,
    tagsRight: true,
    excerpt: [
      {
        prefix: "Solar University is an in-house Learning Management System (LMS) kicked off by our PM and senior developer while I was still heads-down finishing the Volt 2.0 redesign. Building an in-house LMS would have been time prohibitive just a handful of months prior, but with AI we could do it ourselves in a fraction of the time. This also meant the PM and developer could utilize AI to handle the early design scaffolding. In order to get my design direction in without stalling the rebrand, I conducted a compressed design process: a full UX audit with AI-assisted note-taking, an AI-research and brainstorm session that both validated my instincts and surfaced new ideas, and an ",
        link: { text: "interactive prototype", href: "https://solar-university.figma.site/" },
        suffix: " delivered in under a day.",
      },
    ],
    image: '/images/solar-university-hero.png',
    imageAlt: 'Solar University — learning tracks dashboard on a laptop',
    cardImages: {
      phones: [
        { src: '/images/solar-u-question.png', alt: 'Solar University quiz question screen', position: 'left'             },
        { src: '/images/lms-phone.GIF',         alt: 'Solar University mobile lesson view',   position: 'center', isGif: true },
        { src: '/images/solar-u-answer.png',   alt: 'Solar University quiz answer screen',   position: 'right'            },
      ],
    },
    introImage: null,
    introImages: null,
    subtitle: "Rapid research and prototyping for an in-house LMS",
    role: 'Lead designer',
    scope: 'UX audit, online learning research, rapid prototyping, AI-assisted design',
    sections: [
      {
        id: 'context',
        heading: 'The business case & Kick off',
        tags: [],
        images: [
          { src: '/images/LMS-sketch.png', alt: '' },
        ],
        left: [
          "The business case for an in-house LMS was obvious: we were paying $20,000 a month for Docebo, a clunky third-party training platform that was prone to technical issues out of our control. It was also one of the first touch points reps had with our system during onboarding and was required before fully accessing Volt. Building an in-house LMS would have been time prohibitive just a handful of months prior, but with AI we could do it ourselves in a fraction of the time.",
        ],
        right: [
          "We kicked things off with a full team brainstorm to identify the core needs for the learning experience and admin tool. We covered requirements for version 1.0 and noted ideas to save for future enhancements as well as first step research tasks. Then the PM and developer started work on the back-end and LMS admin portal.",
        ],
      },
      {
        id: 'audit',
        heading: 'The Audit',
        tags: [],
        left: [
          "I went through our full onboarding flow the way a rep would—hitting the required online training and going through the full set of lessons. As I went, I opened a Claude chat in Slack as a running notepad, recording my observations via voice transcription as they came to me.",
          "I noted what I thought the platform got right—the lessons were bite-size less than 10 minutes each with some interactivity, layout and format variety, with questions or quizzes to confirm comprehension. And I noted the UX problems—the bite-sized lessons encouraged me to keep going but they didn\'t automatically lead to the next required lesson. Instead I lost momentum figuring out where I was and what was next. And overall the mobile experience was not clean and responsive.",
          "Ideas surfaced mid-audit: what if instead of a standard quiz, certain lessons asked reps to record themselves explaining a concept in their own words? For technical content like net metering, true-ups, utility rate structures—the kind of knowledge you need in the field—being able to articulate it out loud is a better test of understanding than picking an answer from a list. Or similarly, typing out the answer yourself compared to selecting it from multiple choice could also improve retention.",
        ],
        right: [],
        imageRight: { src: '/images/audit-2.webp', alt: 'AI note-taking in Slack during the Docebo audit', maxWidth: '280px', marginTop: '-32px' },
      },
      {
        id: 'research',
        heading: 'Research & Brainstorming',
        tags: [],
        left: [],
        imageLeft: { src: '/images/lms-report.png', alt: 'Research findings for Solar University LMS' },
        right: [
          "Having Claude in the loop as a note-taking and refining partner meant that by the time I was done with the audit, I had organized, usable feedback.",
          "After the audit I shifted into research mode, asking Claude to surface best practices for online learning UX. Some of what came back confirmed what I'd already seen—the bite-sized module format Docebo actually had right, with lessons landing around 7 to 10 minutes, is well-supported. Attention drops fast in online learning, and short completable units give users a sense of achievement, motivation, and confidence to keep going.",
          "The research also sparked ideas for further down the road: what if our admin tool utilized an \"LMS-expert\" AI agent to assist the people building the courses? Flagging when a lesson was running too long or suggesting cleaner explanations or a new layout variation.",
          "The result was a plan for what our system\'s MVP must address—follow simple best practices and fix the clunkiness of Docebo plus a roadmap for future AI enhancements.",
        ],
      },
      {
        id: 'prototype',
        heading: 'Quick Prototyping',
        tags: [],
        left: [
          "With the audit feedback and research in hand, I moved into Figma and built a working interactive prototype in roughly half a day. The goal wasn't pixel perfection or realistic content— it was to show the flow, the structure, and the decisions I'd made.",
          "The prototype is built on the Volt 2.0 design system which already had prompts for the design skill that I could quickly modify and feed to Figma Make. That meant I could focus my time on the architecture and the flows, transitions, and animations and show rather than tell.",
        ],
        right: {
          para: "One of the clearest problems in the Docebo audit was the break in momentum between lessons. In the prototype, finishing a lesson immediately serves up the next one. If a rep is working through a track, the experience is continuous until the track is done.",
          intro: "What the prototype shows:",
          bullets: [
            "*Seamless lesson sequencing* — completing a lesson flows directly into the next, no dead ends or unnecessary navigation",
            "*Progress indicators* at both the individual lesson and overall track level — always visible so reps know exactly where they are and how close they are to finishing",
            "*Learning tracks* with a required vs. optional distinction — clear from the start which content gates full app access and which is available to explore further",
            "*Prerequisite unlocking* — tracks open in sequence as required content is completed, giving structure without over-constraining",
            "*Multiple assessment types* — multiple choice, flip card review, and accordion-style content, with the groundwork for the recording format as a future layer",
            "*Track completion animation* — a small celebration moment when a rep finishes a full track, consistent with the gamification thinking running through the rest of the app",
          ],
        },
        imageAboveLeft: { src: '/images/solar-u-mobile.png', alt: 'Solar University prototype — mobile view', href: 'https://solar-university.figma.site/' },
        introImagesBelow: [
          { src: '/images/solar-lms-dashboard.png', alt: 'Solar University learning tracks dashboard', type: 'laptop' },
          { src: '/images/lms-phone.GIF',             alt: 'Solar University mobile lesson view',       type: 'phone', isGif: true },
          { src: '/images/solar-lms-quiz.png',       alt: 'Solar University quiz screen',              type: 'laptop' },
        ],
        cta: {
          href: "https://solar-university.figma.site/",
          text: "view the prototype",
        },
      },
    ],
  },

  {
    slug: 'gamification',
    title: 'gamification',
    tags: ['ai', 'data', 'systems'],
    titleSize: 55,
    tagsRight: true,
    excerpt: [
      "Gamification in Volt was a longtime goal based on a fundamental understanding of our users and how sales reps are wired and motivated. I was asked to design motivation and incentive features for Volt at numerous points over the years, but beyond the general leaderboard and competitions, gamification features were sidelined for core project management and communication tools.",
      {
        prefix: "Finally, a badge achievements system—integrated with native notifications, an admin tool for managing badge content, and a social wins feed—was just days from shipping when Freedom Forever filed for bankruptcy. This case study is about what led up to this",
        italic: " near ",
        suffix: "launch: how I used data and research to correct unrealistic badge thresholds and proved my new Volt 2.0 design system and AI-powered workflow could lead to a faster, more direct path from design intent to shipped code.",
      },
    ],
    image: '/images/gamification-hero.webp',
    imageAlt: 'Gamification — achievements, badge earned modal, and wins feed screens',
    imageOffset: 20,
    introImage: null,
    badgeImages: [
      { src: '/images/badge-row.png', alt: 'First Blood, Giant Slayer, and The Architect badges' },
    ],
    subtitle: "A badge achievements system grounded in the data and how motivation actually works",
    role: 'Lead designer and front-end design engineer',
    scope: 'Feature design, data analysis, gamification system, AI assisted coding',
    sections: [
      {
        id: 'exploration',
        heading: 'Years of Exploration',
        tags: [],
        imagesRight: [
          { src: '/images/gamification-sketch.png', alt: '' },
          { src: '/images/years-of-designs-2.png', alt: '' },
        ],
        left: [
          "Ideas and false starts for gamification features in Volt ran through the app\'s entire history. Over the years I designed goal and stats dashboards, competition UIs, leaderboard variations, and reward concepts that ended up deprioritized and in my design graveyard. So when the time it came to prioritize these features we had a clear sense of what solar reps actually responded to and what stakeholders wanted to see.",
          "Late in 2025 the team was tasked by internal leadership with prioritizing gamification again. As a team, we brainstormed and explored a robust suite of features including badges, streaks, daily activities, a prize locker, and journeys through levels. Eventually, we had our game plan all laid out—we even had a full Epic with skeleton tickets in Jira and I had a few rough wireframe concepts sketched out.",
          "Then the curve-ball: the external stakeholders came to us with the Volt 2.0 rebrand ask and placed it at the top of their wish list. The good news: a swaggy new look would lend itself perfectly to the gamification features already in the works. The bad news: I needed to design, code, and release the rebrand first. So the backend dev work started while I juggled gamification, LMS prototyping, and the Volt redesign concepts simultaneously.",
        ],
        right: [],
      },
      {
        id: 'philosophy',
        heading: 'The Philosophy',
        tags: [],
        imagesBelow: [
          { src: '/images/gamification-philosophy.png', alt: '' },
        ],
        left: [
          "The thing I kept coming back to when thinking about gamification was this: effective digital rewards can be as simple as an animation, a sound, or haptic buzz. Duolingo built a $5 billion company on that premise. Slot machines have been exploiting it for decades.",
          "My goal was to find every opportunity to celebrate the small stuff—a door knocked, an appointment set, an assist logged—with a moment of reward that felt good enough to keep them coming back.",
        ],
        right: [
          "The longer-term vision was a sales journey mode built into onboarding so new rep's first experience of Volt would be through a guided path, earning badges for completing the actions that would set them up to succeed: knocking their first door, setting their first appointment, getting their first assist. We didn't get that far but this philosophy shaped how I thought about the badge system we eventually built.",
        ],
      },
      {
        id: 'data',
        heading: 'Catching What the Data Revealed',
        tags: [],
        imagesBelow: [
          { src: '/images/gamification-data-analysis.webp', alt: '' },
          { src: '/images/gamification-badge-analysis.png', alt: '' },
        ],
        left: [
          "Here\'s where the data comes in and things get interesting. A set of badges and thresholds had been signed off and had already been programed into the backend system.",
          "But once Volt 2.0 was released and I was able to turn my focus to how the badge achievements would look and work, I started with questioning how realistic the badge thresholds were. So I used our data agent and Querylab skill with access to our internal databases and Mixpanel and started asking: 'How many of our actual users can earn these badges?' It turned out a significant portion of the thresholds were out of reach for the majority of our active users. Many would have taken years to achieve. That was clearly an issue and not at all aligned with my vision—badges that feel impossible",
        ],
        right: [
          "to earn aren't motivating—they're demoralizing. I also noticed the system was almost entirely oriented toward closers or reps who made sales. It had nothing meaningful for appointment setters—a large and important part of our user base—and exactly the type of junior reps we needed to engage.",
          "I brought these issues back to the team with the data to back it up. Then went through the badge set and kept analyzing and checking the data in order to ensure we had a more achievable set of badges—some easy, some medium, some hard and some for the junior reps appointment setting at the top of the sales funnel.",
        ],
      },
      {
        id: 'activity-feed',
        heading: 'Final screens and a new work flow',
        tags: [],
        images: [
          { src: '/images/gamification-badge-unlock.png', alt: '' },
          { src: '/images/gamification-achievements.png', alt: '' },
        ],
        left: [
          "The achievement badges were part of a few connected features, each owned by a different developer. An admin tool that let the team upload badge images, names, and descriptions. Native push notifications so reps were alerted the moment they earned a badge. And a Wins tab added to the existing activity feed, where reps could share their achievements socially with their team.",
          "Most of these features were well underway before Volt 2.0 had fully shipped—based off those early wireframes and AI design. That made them",
        ],
        right: [
          "a natural test case: real features, real code, real developers—and a chance to apply my new design system and AI skills to work already in motion.",
          "The new workflow changed everything. Instead of waiting for TestFlight builds, writing up feedback and waiting for another test build from a developer, I could pull the branch to my local environment, run my Volt skill and do a quick round of UI code polish before pushing everything back exactly how I wanted it."
        ],
      },
    ],
  },
];

/** Get a single case study by slug */
export function getCaseStudy(slug) {
  return caseStudies.find((cs) => cs.slug === slug) ?? null;
}

/** Always returns all case studies — tag is used for highlighting only */
export function getFilteredCaseStudies() {
  return caseStudies;
}


