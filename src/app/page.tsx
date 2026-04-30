const profile = {
  name: "Paval EP",
  title: "React Native Developer",
  location: "Bengaluru, Karnataka",
  email: "pavalep@gmail.com",
  phone: "+91 99613 09635",
  linkedin: "https://www.linkedin.com/in/pavalep/",
};

const stats = [
  ["7+", "years building apps"],
  ["3", "product domains"],
  ["0-1", "delivery experience"],
  ["RN", "core specialty"],
];

const caseStudies = [
  {
    name: "Commerce marketplace",
    label: "React Native / Payments / Maps",
    problem:
      "A mobile marketplace needed a complete cross-platform buying flow with location context and secure checkout.",
    contribution:
      "Built React Native screens and integrations across navigation, maps, Stripe, Mangopay, OAuth, WhatsApp Business API, and Sentry monitoring.",
    result:
      "A production-ready commerce experience with stronger checkout, crash visibility, and account onboarding.",
  },
  {
    name: "Fintech and banking apps",
    label: "Android / React Native / Play Store",
    problem:
      "Banking clients needed reliable Android mobile interfaces for financial workflows and release distribution.",
    contribution:
      "Developed frontend application flows, worked with React Native animations, learned payment gateway and maps integrations, and prepared APK/AAB releases.",
    result:
      "Delivered mobile banking applications for service co-operative banks and supported Play Store release workflows.",
  },
  {
    name: "Digital patient diary",
    label: "Healthcare / Mobile product / Team lead",
    problem:
      "Healthcare teams needed a mobile patient diary and visit-preparation workflow for hospital professionals.",
    contribution:
      "Worked from early development through deployment and led the visit preparation feature in the HCP mobile app.",
    result:
      "Contributed to a healthcare mobile product used by professionals, with focus on feature ownership and team collaboration.",
  },
];

const capabilityGroups = [
  {
    title: "Mobile Engineering",
    items: [
      "React Native",
      "Redux",
      "Android",
      "Native modules",
      "React Navigation",
      "React Native Maps",
      "Release builds",
    ],
  },
  {
    title: "Product Integrations",
    items: [
      "Stripe",
      "Mangopay",
      "OAuth",
      "Google login",
      "Facebook login",
      "WhatsApp Business API",
      "Sentry",
    ],
  },
  {
    title: "AI + Backend Direction",
    items: [
      "Next.js",
      "Docker",
      "Node.js APIs",
      "Local LLMs",
      "Ollama",
      "AI-assisted workflows",
      "Backend services",
    ],
  },
  {
    title: "Foundations",
    items: ["JavaScript", "TypeScript", "Java", "J2EE", "MySQL", "HTML", "CSS"],
  },
];

const timeline = [
  ["2022 - Now", "React Native Developer", "Hexims IT LLC, Bengaluru"],
  ["2020 - 2021", "React Native Mobile Developer", "Aceware Technologies, Kochi"],
  ["2018 - 2019", "Junior Mobile Developer", "Cankado India, Thiruvananthapuram"],
  ["2018", "Software Developer Intern", "Iband Technologies, Ernakulam"],
];

const labItems = [
  "Local AI model experiments with Ollama-style workflows",
  "Container-first deployment using Docker and GitHub as the source of truth",
  "Next.js portfolio and backend learning path for AI product interfaces",
  "Practical focus on tools that can become mobile app features, admin panels, or APIs",
];

function DevMark() {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#171717]/15 bg-[#171717] text-sm font-black text-[#f4c35c] shadow-[0_12px_35px_rgba(23,23,23,0.2)]">
      {"</>"}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f2e8] text-[#171717]">
      <header className="sticky top-0 z-20 border-b border-[#171717]/10 bg-[#f6f2e8]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <DevMark />
            <span className="leading-none">
              <span className="block text-sm font-black uppercase tracking-[0.18em]">
                {profile.name}
              </span>
              <span className="mt-1 block text-xs font-bold text-[#58625e]">
                Mobile + AI systems
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-xs font-black uppercase tracking-[0.16em] text-[#404a46] sm:flex">
            <a href="#work" className="hover:text-[#b5402b]">
              Work
            </a>
            <a href="#stack" className="hover:text-[#b5402b]">
              Stack
            </a>
            <a href="#lab" className="hover:text-[#b5402b]">
              AI Lab
            </a>
            <a href="#contact" className="hover:text-[#b5402b]">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b border-[#171717]/10">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-20">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b5402b]">
                {profile.title} / AI enthusiast / backend builder
              </p>
              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] sm:text-7xl lg:text-8xl">
                I build mobile products that connect clean UX with real
                integrations.
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-[#404a46]">
                I am a React Native developer with experience across healthcare,
                fintech, and commerce applications. My current direction expands
                that mobile foundation into Dockerized Next.js, backend APIs,
                and AI features powered by local model workflows.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="inline-flex min-h-12 items-center rounded-md bg-[#171717] px-5 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#31584f]"
                >
                  See Case Studies
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex min-h-12 items-center rounded-md border border-[#171717]/20 px-5 text-sm font-black uppercase tracking-[0.12em] text-[#171717] transition hover:border-[#b5402b] hover:text-[#b5402b]"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-lg border border-[#171717]/10 bg-white/70 p-4"
                >
                  <p className="text-3xl font-black">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#58625e]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="grid content-end">
            <div className="overflow-hidden rounded-lg border border-[#171717]/15 bg-[#171717] text-white shadow-[0_30px_100px_rgba(23,23,23,0.22)]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff6b57]" />
                  <span className="h-3 w-3 rounded-full bg-[#f4c35c]" />
                  <span className="h-3 w-3 rounded-full bg-[#57c59b]" />
                </div>
                <span className="text-xs font-bold text-white/50">
                  paval.dev/ship-log
                </span>
              </div>
              <div className="space-y-6 p-5 sm:p-7">
                <div>
                  <p className="font-mono text-sm text-[#57c59b]">
                    const currentFocus =
                  </p>
                  <p className="mt-2 font-mono text-2xl font-black leading-snug text-[#f4c35c]">
                    [&quot;React Native&quot;, &quot;Next.js&quot;,
                    &quot;Docker&quot;, &quot;Ollama&quot;]
                  </p>
                </div>
                <div className="grid gap-3">
                  {[
                    "Mobile UI and state flows",
                    "Payments, auth, maps, monitoring",
                    "Backend APIs for app features",
                    "AI prototypes with local models",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.06] px-4 py-3"
                    >
                      <span className="text-sm font-bold">{item}</span>
                      <span className="font-mono text-xs text-[#57c59b]">
                        ready
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="work" className="bg-[#171717] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c35c]">
                Selected Work
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
                Case studies with problem, role, and outcome.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-white/68">
              The focus is not a long list of technologies. It is the kind of
              product work I can own: mobile flows, integrations, release paths,
              and practical debugging.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.name}
                className="rounded-lg border border-white/10 bg-[#20201f] p-6"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#57c59b]">
                  {study.label}
                </p>
                <h3 className="mt-4 text-3xl font-black">{study.name}</h3>
                <div className="mt-6 space-y-5 text-base leading-7 text-white/72">
                  <p>
                    <strong className="text-white">Problem:</strong>{" "}
                    {study.problem}
                  </p>
                  <p>
                    <strong className="text-white">My role:</strong>{" "}
                    {study.contribution}
                  </p>
                  <p>
                    <strong className="text-white">Outcome:</strong>{" "}
                    {study.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b5402b]">
              Engineering Stack
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
              Mobile first, now expanding into AI-backed systems.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#404a46]">
              This positions the site honestly: React Native remains the core,
              while Docker, Next.js, backend APIs, and local AI models are the
              direction for broader product engineering work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilityGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-lg border border-[#171717]/10 bg-white p-5 shadow-sm"
              >
                <h3 className="text-xl font-black">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-[#f1eee6] px-3 py-2 text-sm font-bold text-[#35413d]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="lab" className="border-y border-[#171717]/10 bg-[#dbe9e3] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#31584f]">
              AI Systems Lab
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
              A practical path from mobile developer to AI product engineer.
            </h2>
          </div>
          <div className="grid gap-3">
            {labItems.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[#31584f]/15 bg-[#f8fbf7] p-5 text-lg font-bold leading-7 text-[#23332e]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b5402b]">
              Experience
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Built in teams, shipped through real constraints.
            </h2>
          </div>
          <div className="divide-y divide-[#171717]/10 border-y border-[#171717]/10">
            {timeline.map(([period, role, company]) => (
              <article
                key={`${period}-${role}`}
                className="grid gap-3 py-6 sm:grid-cols-[160px_1fr]"
              >
                <p className="text-sm font-black uppercase tracking-[0.14em] text-[#58625e]">
                  {period}
                </p>
                <div>
                  <h3 className="text-2xl font-black">{role}</h3>
                  <p className="mt-1 text-lg text-[#404a46]">{company}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#171717] px-5 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c35c]">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
              Building mobile products, AI tools, or backend services?
            </h2>
            <p className="mt-5 text-lg text-white/70">{profile.location}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#171717] transition hover:bg-[#f4c35c]"
            >
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/25 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:border-[#57c59b] hover:text-[#57c59b]"
            >
              LinkedIn
            </a>
            <a
              href={`tel:${profile.phone.replaceAll(" ", "")}`}
              className="rounded-md border border-white/25 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:border-[#57c59b] hover:text-[#57c59b]"
            >
              Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
