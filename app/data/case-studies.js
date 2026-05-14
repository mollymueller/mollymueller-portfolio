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
        leadLink: { text: 'Volt', href: 'https://apps.apple.com/us/app/volt/id1644756647' },
        leadSep: ' by ',
        lead: 'Freedom Forever',
        text: 'is a lead management and canvassing app built for solar sales teams.',
        tooltip: {
          title: 'Background & Context',
          paragraphs: [
            'I worked at Freedom Forever—one of the largest residential solar installers in the U.S.—from 2021 to 2026.',
            'A new law that passed in 2025 lead to cascading bankruptcies in the solar industry and ultimately claimed Freedom Forever. My time there abruptly ended when the company filed for bankruptcy in April of 2026.',
            'Prior to the bankruptcy, the software team kicked into high gear to compensate for cash flow crunches and reduced staff. These financial challenges accelerated AI adoption. Led by our VP of Product and Engineering, I received a master class and crash course in utilizing AI tools and best practices alongside my fellow product and developer colleagues.',
          ],
        },
      },
      "I was the lead designer on Volt from it\'s origins and MVP launch. Over the course of a few years, I led Volt through two redesigns, designed many new features and enhancements, and initiated direct user research. And as our product and engineering AI infrastructure took off, I developed and coded a new design system and component library for Volt 2.0. This case study goes into more detail on the Volt 2.0 rebrand.",
    ],
    image: '/images/volt-hero.webp',
    imageAlt: 'Volt 2.0 — a suite of screens from the redesigned mobile app',
    imageOffset: 32,
    introImage: null,
    subtitle: 'A mobile app rebrand, a design system, and what can happen when a designer gets into the code',
    role: 'Lead designer and front-end design engineer',
    scope: 'Design system, component library, Figma-to-code theming architecture, AI assisted coding, AI design agent and skill creation',
    sections: [
      {
        id: 'origins',
        heading: "Volt\'s Origins & Evolution",
        tags: [],
        left: [
    
          {
            prefix: "The need for a custom native app for our sales teams had been building at Freedom Forever for years: ",
            lead: "our sales dealers",
            text: "were paying up to $30k a month for third-party canvassing software that wasn\'t integrated with our platform — a Freedom Forever solution meant free, fully customized tooling and a genuine differentiator in the industry.",
            tooltip: {
              title: "Sales Dealer Organizations",
              paragraphs: [
                "One of the most unique aspects of the residential solar industry is the nature of a sale — a deal isn\'t truly closed until the system is installed and working. This makes the relationship between the sellers (or dealers) and installers important — neither party makes money if the job is not completed and properly installed. Freedom Forever exclusive Super Dealer partnerships acted as the sales arm for the business. This mutually beneficial relationship incentivized Freedom Forever to support the dealers with development resources, including integrated software products, like the Volt App.",
              ],
            },
          },
          "In September 2022, the app found its moment and Volt was born. I took the lead design role and worked through daily stand-ups and sprints with a small team. We launched the MVP in January 2023 with its core features prioritized for sales reps and appointment setters in the field.",
          
        ],
        right: [
         'Within the first four months, downloads doubled, leads created grew from 59k to 583k, and events per user tripled.', 
         'Over the next few years, I led Volt through two redesigns — introducing a structured design system in Figma, dark and light mode variables, and an expanded component library — alongside the user research program and the 2.0 rebrand highlighted in this case study. By March 2026, the app had grown to 18,000 monthly active users and expanded to include commissions pipeline, project management, chat, rep onboarding, an activity feed, and enhanced gamification.',
        ],
        images: [
          { src: '/images/volt-mvp-mockup.webp', alt: '[ MVP ]' },
          { src: '/images/volt-1-mockup.webp',   alt: '[ Volt 1.0 ]' },
          { src: '/images/volt-2-mockup.png',   alt: '[ Volt 2.0 ]' },
        ],
      },
      {
        id: 'rebrand',
        heading: 'The 2.0 Rebrand',
        tags: [],
        left: [
          'Solar Pros — Volt\'s largest dealer partner at nearly 24,000 users and 64% of total MAU — merged with another super dealer and solidified their partnership with us. The stakeholder sales leaders had a clear ask: Volt should follow their branding and feel "more swaggy" and in line with the sales rep culture.',
          'Working with their brand guidelines and direction, I developed the new look for Volt. The differentiator between the 1.0 rebrand and 2.0 was that this time I had a new superpower — Claude Code as my front-end engineering partner.',
        ],
        right: [
          'What started in Figma as a carefully thought-out design system became an opportunity to implement a theme-based token system with more defined rules for typography, colors, and components in the code itself — something my systems-obsessed, AI-curious brain could not resist.',
          'The result was a new visual language for Volt: a token-based design system that works consistently in Figma and in code, plus an AI-powered agent and design skill that checks for anti-patterns and hard-coded values and offers style guide corrections for anyone shipping Volt code.',
        ],
        images: [
          { src: '/images/volt-rebrand-banner-2.webp', alt: '' },
        ],
      },
      {
        id: 'design-system',
        heading: 'Building the Design System',
        tags: [],
        left: [
          'Before I defined the new design system, I knew where I wanted to end up — a simple yet visually striking system that could translate cleanly between light and dark modes and into the codebase, with the ultimate goal of creating an AI skill or agent that could implement the design rules.',
          'I started in Figma, designing core screens and iterating until I had a rules-based system I was satisfied with and had stakeholder sign-off on. Then I shared the Figma design system — typography styles, color and shape variables — with Claude, with the direction to improve the code architecture from a design system standpoint. Working with Claude Code and the team\'s developers, we devised the plan to implement the full redesign in code.',
          'One added complexity: the directive to use a dark gradient for the app\'s dark-themed UI. Volt had always been dark-first, so I put extra care into getting that primary dark mode *just right*.',
        ],
        right: {
          para: 'It required transparent components specific to the dark theme to maintain the modern, "swaggy" look — which meant the most straightforward token architecture was off the table. I still took pains to ensure the system was rules-based and legible to both developers and AI agents.',
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
          { src: '/images/volt-design-system-1.webp', alt: '' },
          { src: '/images/volt-design-system-2.webp', alt: '' },
        ],
        cta: { text: 'view the guide', href: 'https://volt-styleguide.figma.site/' },
      },
      {
        id: 'into-the-code',
        heading: 'into the code',
        tags: [],
        left: [
          'I implemented the full UI rebrand in the app\'s code, iterating on the smallest details with Claude until the final screens mirrored my design vision. I also had Claude generate an HTML design guide that we referenced and iterated on as we went — which meant I was refining the design system and the code at the same time.',
          'The system in the code is organized around semantic tokens layered over primitives: primitives define the raw values, semantic tokens map those primitives to roles — text.primary, surface.secondary, etc. A component never references a raw hex value; it references a role.',
        ],
        right: [
          'The architecture routes everything through a single centralized theme object passed down from PaperProvider — colors, opacity variants, gradient tokens, typography, spacing, shapes, component-specific values — all defined once, flowing everywhere.', 
          'The typography system required particular care. React Native requires exact font file names rather than family names with weights — so we built a font families map that resolves each weight to the correct platform-specific file name for iOS and Android. The full type scale — display, headings, subtitles, overline, body, caption — was defined from Figma specs and wired into the theme.',
        ],
        images: [
          { src: '/images/volt-code-1.webp', alt: '' },
          { src: '/images/volt-code-2.webp', alt: '' },
        ],
      },
      {
        id: 'ai-tooling',
        heading: 'The AI Tooling Layer',
        tags: [],
        left: [
          'Once the design system was fully defined and documented, I translated the entire system into a suite of Claude Code tooling — a skill, two slash commands, and a dedicated agent — tools anyone coding in the Volt app could use before QA and shipping.',
          'The Skill — Volt Style Guide Expert loads the full design system context — token values, component rules, dark/light mode specs, layout principles — so every implementation follows the Volt system.',
          'Slash Commands\n/volt-tokens — reads token values directly from source files and returns current specs by category (colors, typography, spacing, shapes, components).',
        ],
        right: [
          '/volt-check — audits any file for design system violations across 10 categories. Reports issues with exact fixes but does not auto-fix — the developer decides what to change.',
          'The volt-reviewer-agent: A dedicated compliance agent that reviews git diffs for design system violations before code is committed or a PR is opened. Checks only new or modified lines, not entire files — flagging token misuse, anti-patterns, and component violations at the diff level.',
          'The tooling required testing and iteration, but after a few rounds the skills were working as expected — catching hard-coded values and style rule violations and offering corrections.',
        ],
        images: [
          { src: '/images/volt-ai-tooling-1.png', alt: '' },
          { src: '/images/volt-ai-tooling-2.png', alt: '' },
        ],
      },
      {
        id: 'takeaways',
        heading: 'Takeaways',
        tags: [],
        left: [
          'As soon as AI tools were connected to our codebase and non-developers were encouraged to set up dev environments, I dove in. After years of waiting on developers to implement my designs and rarely seeing them land with the level of detail and polish I intended, I finally had a direct line from design thinking to working code.',
        ],
        right: [
          'AI gave me a real understanding of how the code worked and how the styles were being applied so and how to improve things directly. The design system and AI tooling became infrastructure that made things faster, more consistent, and easier to communicate across a team.',
        ],
        images: [],
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
      "Solar University is an in-house Learning Management System (LMS) that was kicked off by our PM and a senior developer while I was still heads-down finishing the Volt 2.0 redesign. Building an in-house LMS would have been time prohibitive just a handful of months prior, but with AI we could do it ourselves in a fraction of the time. This also meant the PM and developer could move fast with AI handling the early design scaffolding. In order to provide designs and direction without stalling the rebrand, I conducted a compressed design process: a full UX audit with AI-assisted note-taking, an AI-research and brainstorm session that both validated my instincts and surfaced new ideas, and a working prototype delivered in about a day.",
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
        heading: 'The context',
        tags: [],
        introImages: [
          { src: '/images/solar-lms-dashboard.png', alt: 'Solar University learning tracks dashboard', type: 'laptop' },
          { src: '/images/lms-phone.GIF',             alt: 'Solar University mobile lesson view',       type: 'phone', isGif: true },
          { src: '/images/solar-lms-quiz.png',       alt: 'Solar University quiz screen',              type: 'laptop' },
        ],
        left: [
          "The Solar University is an in-house Learning Management System (LMS) kicked off by our PM and a senior developer while I was still heads-down finishing the Volt 2.0 redesign. The business case was obvious: we were paying $20,000 a month for Docebo, a clunky third-party training platform that was prone to technical issues out of our control. It was also one of the first touch points reps had with our system—the final onboarding step required in order to fully access Volt and start selling. Building an in-house LMS would have been time prohibitive just a handful of months prior, but with AI we could do it ourselves in a fraction of the time.",
        ],
        right: [
          "This also meant the PM and developer could move fast with AI handling the early design scaffolding. I knew if I didn\'t get my design input in early, the product would get too far down a road without it. Online learning UX is something I\'m genuinely interested in so I made sure to carve out some time. Over the course of one evening and into the next day, I conducted a compressed design process: a full UX audit with AI-assisted note-taking, an AI-research and brainstorm session that both validated my instincts and surfaced new ideas, and a working prototype delivered in roughly half a day.",
        ],
      },
      {
        id: 'audit',
        heading: 'The Audit',
        tags: [],
        left: [
          "First I went through our full onboarding flow the way a rep would—hitting the required online training and going through the full set of lessons. As I went, I opened a Claude chat in Slack as a running notepad, recording my observations via voice transcription as they came to me.",
          "I noted what I thought the platform got right—the lessons were bite-size less than 10 minutes each with some interactivity, layout and format variety, with questions or quizzes to confirm comprehension. And I noted the UX problems—the bite-sized lessons encouraged me to keep going but they didn\'t automatically lead to the next required lesson. Instead I lost momentum figuring out where I was and what was next. And overall the mobile experience was not clean and responsive.",
          "Ideas surfaced mid-audit: what if instead of a standard quiz, certain lessons asked reps to record themselves explaining a concept in their own words? For technical content—net metering, true-ups, utility rate structures—the kind of knowledge you need in the field, being able to articulate it out loud is a better test of understanding than picking an answer from a list.",
        ],
        right: [],
        imageRight: { src: '/images/audit-hero.png', alt: 'AI note-taking in Slack during the Docebo audit' },
      },
      {
        id: 'research',
        heading: 'Research & Brainstorming',
        tags: [],
        left: [],
        imageLeft: { src: '/images/lms-research.png', alt: 'Research findings for Solar University LMS' },
        right: [
          "Having Claude in the loop as a note-taking and refining partner meant that by the time I was done with the audit, I had organized, usable feedback.",
          "After the audit I shifted into research mode, asking Claude to surface best practices for online learning UX. Some of what came back confirmed what I\'d already seen—the bite-sized module format Docebo actually had right, with lessons landing around 7 to 10 minutes, is well-supported. Attention drops fast in online learning, and short completable units give users a sense of achievement, motivation, and confidence to keep going.",
          "The research also sparked ideas for potential enhancements beyond the MVP: what if our admin tool utilized an \"LMS-expert\" AI agent to assist the people building the courses? Flagging when a lesson was running too long, suggesting cleaner explanations, surfacing gaps in a module\'s structure before it went live, or offering a layout variation.",
          "The result was a plan for what our system\'s MVP must address—following simple best practices and fixing the clunkiness of Docebo and a roadmap for future AI enhancements.",
        ],
      },
      {
        id: 'prototype',
        heading: 'Quick Prototyping',
        tags: [],
        left: [
          "With the audit feedback and research in hand, I moved into Figma and built a working interactive prototype in roughly half a day. The goal wasn\'t pixel perfection or realistic content— it was to show the flow, the structure, and the decisions I\'d made— something the PM and developer could actually click through rather than interpret from static mockups.",
          "The prototype is built on the Volt 2.0 design system, which meant I wasn\'t starting from zero on visual language. I focused my time on the architecture and the UX decisions that needed to be visible to be understood.",
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
        leftCollage: [
          { src: '/images/solar-u-mobile.png', alt: 'Solar University prototype — mobile view' },
        ],
        cta: {
          href: "https://solar-university.figma.site/",
          text: "view the prototype",
        },
      },
      {
        id: 'takeaways',
        heading: 'Takeaways',
        tags: [],
        left: [
          "Solar University was another product just at the finish line that never fully shipped before the bankruptcy came. But this case study is worth documenting — because it demonstrates how AI changes the pace and texture of design work.",
          "The audit, research, synthesis, and prototype would have taken days through a conventional process. Using AI at each stage—not to replace the design thinking, but to accelerate the parts that slow it down—compressed that into a single day\'s work.",
        ],
        right: [
          "The research-to-prototype path is the part I\'d carry forward into any future work on learning products. Jumping straight into a working prototype with AI rather than going through rounds of static screens first meant the PM and developer had something to react to immediately.",
          "The combination of genuine design expertise and AI-assisted speed is something I want to keep exploring — this was an early proof of what that can look like.",
        ],
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
      "Gamification in Volt was a longtime goal based on a fundamental understanding of our users and how sales reps are wired and motivated. I was asked to design motivation and incentive features for Volt at numerous points over the years but beyond the general leaderboard and competitions, gamification features were sidelined for core project management and communication tools.",
      {
        prefix: "A badge achievements system—integrated with native notifications, an admin tool for managing badge content, and a social wins feed—was just days from to shipping when Freedom Forever filed for bankruptcy. This case study is about what lead up to this",
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
    subtitle: "A gamification system for sales reps, grounded in the data and how motivation actually works",
    role: 'Lead designer and front-end design engineer',
    scope: 'Feature design, data analysis, gamification system, AI assisted coding',
    sections: [
      {
        id: 'exploration',
        heading: 'Years of Exploration',
        tags: [],
        images: [
          { src: '/images/years-of-designs.webp', alt: '' },
        ],
        left: [
          "Gamification wasn\'t a single project — it was a thread that ran through Volt\'s entire history. Over the years I designed goal and stats dashboards, competition UIs, leaderboard variations, and reward concepts that lived in my design graveyard before the final version took shape.",
          "That history mattered. By the time we were building the badge system in earnest, I had a clear sense of what solar reps actually responded to, what stakeholders wanted to see, and what had been tried and abandoned.",
        ],
        right: [
          "The competition and leaderboard features were already live in the app — reps could see rankings, stats, and head-to-head results. The badge system was the next layer: persistent recognition that lived on a rep\'s profile, visible to them and to their team.",
          "The new Volt 2.0 design system gave the gamification UI a home it had never had before. I designed the badges and their unlock states within the new visual language — dark gradient surfaces, the \"swaggy\" brand direction, and the sharp-corner component library that defined 2.0.",
        ],
      },
      {
        id: 'philosophy',
        heading: 'The Philosophy',
        tags: [],
        images: [
          { src: '/images/gamification-badge-unlock.webp', alt: '' },
          { src: '/images/gamification-achievements.webp', alt: '' },
        ],
        left: [
          "The thing I kept coming back to when thinking about gamification was this: the most effective rewards cost nothing. An animation. A sound. A haptic buzz. Programmed into the app — no budget, no prize fulfillment, no logistics. Duolingo built a $5 billion company on that premise. Slot machines have been exploiting it for decades. The machine makes enormous noise for the smallest monetary payout, and it makes you want to keep playing.",
          "Solar sales is exhausting work. Reps are knocking on doors in the heat, getting rejected constantly, working on commission. My goal was to find every opportunity to celebrate the small stuff — a door knocked, an appointment set, an assist logged — with a moment of reward that felt good enough to keep them coming back.",
        ],
        right: [
          "Competitions and prizes were already part of the culture — stakeholders had been running their own sales contests long before Volt existed. Those cost real money. What I was interested in was the in-between: the daily behaviors that don\'t win a trip to Vegas but still deserve acknowledgment. The badge system was the vehicle for that.",
          "The longer-term vision — one I had on the roadmap and got into early design on — was a Sales Journey mode built into onboarding. The idea was that a new rep\'s first experience of Volt would put them on a guided path, earning badges for completing the actions that would set them up to succeed: knocking their first door, setting their first appointment, getting their first assist. It would have made the app\'s value immediately tangible and tied first-time behaviors to reward. We didn\'t get there. But it shaped how I thought about the badge system we did build.",
        ],
      },
      {
        id: 'data',
        heading: 'Catching What the Data Revealed',
        tags: [],
        images: [
          { src: '/images/gamification-data-analysis.webp', alt: '' },
          { src: '/images/gamification-badge-analysis.png', alt: '' },
        ],
        left: [
          "Here\'s where the work got interesting. While the rest of the team was programming the badge thresholds — set by marketing — into the backend system, I used our AI data query agent with access to our internal databases and Mixpanel and started asking a simple question: could our actual users earn these badges?",
          "The answer was mostly no. A significant portion of the thresholds were out of reach for the majority of our active users. Some would have taken years to achieve. That was a direct contradiction of everything I believed the system should do. Badges that feel impossible to earn aren\'t motivating — they\'re demoralizing. And a system designed to celebrate daily behaviors was about to reward almost nobody.",
        ],
        right: [
          "I brought that back to the team with the data to back it up, and went through the badge set and corrected the thresholds. But I also noticed a second problem: the system was almost entirely oriented toward closers — reps who made sales. It had nothing meaningful for appointment setters, who were a large and important part of our user base.",
          "These were junior reps whose job was knocking doors, setting appointments, and getting assists — scheduled appointments that converted to sales. I added a set of badges specifically for that workflow — recognition of the behaviors that drive the top of the sales funnel.",
        ],
      },
      {
        id: 'activity-feed',
        heading: 'A New Workflow',
        tags: [],
        left: [
          "The achievement badges were part of a few connected features, each owned by a different developer. An admin tool that let the team upload badge images, names, and descriptions. Native push notifications so reps were alerted the moment they earned a badge. And a Wins tab added to the existing activity feed, where reps could share their achievements socially with their team.",
          "Each piece had its own developer, but they all had to come together on the same timeline — the features were interconnected and had to ship as a cohesive whole. Most of them were already underway before Volt 2.0 had fully shipped, which made them a natural test case: real features, real code, real developers — and a chance to apply the new design system and AI skills to work that was already in motion.",
        ],
        right: [
          "The workflow I landed on was a revelation in efficiency. Instead of writing up feedback and waiting for another test build from a developer, I could pull the branch to my local environment, run my Volt skill against it to catch any design system violations, do a round of UI polish directly, and push it back just how I wanted it.",
          "At one point a developer was stuck on a UX problem in the admin tool. The common pattern for resizing images in a frame seemed to be getting lost in translation. I gave it a shot myself with Claude and we got past the blocker easily — one the developer assumed was a real constraint. Being a Product Designer who can open the code and solve a problem a developer couldn\'t see brings something neither role covers alone."
        ],
      },
      {
        id: 'takeaways',
        heading: 'Takeaways',
        tags: [],
        left: [
          "The gamification work never shipped in its final form. The company filed for bankruptcy while it was just at the finish line.",
          "What I\'d take from it: the most important design decision in the whole project wasn\'t visual. It was the moment I pulled the data and found out we were about to hand users a system that would make most of them feel like failures. Catching that — and having the data to change it — is the kind of work that doesn\'t show up in a screenshot.",
        ],
        right: [
          "My philosophy on gamification hasn\'t changed: the cheapest rewards, done right, are the most effective ones. An animation that plays when you set an appointment costs nothing and means something. That principle scales from a badge system to onboarding journeys to AI coaching tools — anywhere you\'re trying to shape behavior through design, the same logic applies.",
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


