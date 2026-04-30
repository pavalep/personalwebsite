import Image from "next/image";

const profile = {
  name: "Paval EP",
  role: "React Native Developer",
  location: "Bengaluru, Karnataka",
  email: "pavalep@gmail.com",
  phone: "+91 99613 09635",
  linkedin: "https://www.linkedin.com/in/pavalep/",
};

const focusAreas = [
  "React Native mobile apps",
  "Payment and OAuth integrations",
  "Healthcare, fintech, and commerce products",
  "CI/CD, release builds, and Play Store delivery",
];

const projects = [
  {
    title: "Vinyl sales marketplace",
    context: "Hexims IT LLC",
    detail:
      "Built a React Native commerce app with navigation, maps, Stripe, Mangopay, social login, WhatsApp Business API, and Sentry monitoring.",
  },
  {
    title: "Acemoney fintech app",
    context: "Aceware Technologies",
    detail:
      "Developed the Android frontend for a fintech mobile application and banking apps for service co-operative banks in Kerala.",
  },
  {
    title: "CANKADO digital patient diary",
    context: "Cankado India",
    detail:
      "Worked from early development through deployment, including a team lead role for the visit preparation feature used by healthcare professionals.",
  },
];

const experience = [
  {
    role: "React Native Developer",
    company: "Hexims IT LLC",
    period: "Feb 2022 - Current",
    place: "Bengaluru",
  },
  {
    role: "React Native Mobile Developer",
    company: "Aceware Technologies Pvt Ltd",
    period: "Jan 2020 - May 2021",
    place: "Kochi",
  },
  {
    role: "Junior Mobile Developer",
    company: "Cankado India Private Limited",
    period: "Dec 2018 - Sep 2019",
    place: "Thiruvananthapuram",
  },
  {
    role: "Software Developer Internship Trainee",
    company: "Iband Technologies",
    period: "Jun 2018 - Nov 2018",
    place: "Ernakulam",
  },
];

const skills = [
  "React Native",
  "JavaScript",
  "Redux",
  "Android",
  "Java",
  "J2EE",
  "Native modules",
  "React Navigation",
  "React Native Maps",
  "Stripe",
  "Mangopay",
  "Sentry",
  "OAuth",
  "MySQL",
  "HTML",
  "CSS",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#141414]">
      <section className="relative overflow-hidden border-b border-black/10 bg-[linear-gradient(135deg,#f4f1ea_0%,#f9f6ef_44%,#cfe4dc_100%)]">
        <div className="mx-auto grid min-h-[92vh] w-full max-w-7xl grid-cols-1 gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1fr_420px] lg:px-10">
          <div className="flex flex-col justify-between gap-16">
            <nav className="flex flex-wrap items-center justify-between gap-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#31524a]">
              <span>{profile.name}</span>
              <div className="flex items-center gap-5 text-xs">
                <a href="#work" className="transition hover:text-[#8d2f21]">
                  Work
                </a>
                <a href="#experience" className="transition hover:text-[#8d2f21]">
                  Experience
                </a>
                <a href="#contact" className="transition hover:text-[#8d2f21]">
                  Contact
                </a>
              </div>
            </nav>

            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#8d2f21]">
                Mobile application developer
              </p>
              <h1 className="text-5xl font-black leading-[0.95] text-[#111] sm:text-6xl lg:text-8xl">
                {profile.name}
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-[#2f3935] sm:text-2xl">
                React Native developer building production mobile applications
                for healthcare, fintech, and commerce teams from early product
                work through release.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#141414] px-5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#31524a]"
                >
                  View Work
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#141414]/30 px-5 text-sm font-bold uppercase tracking-[0.12em] text-[#141414] transition hover:border-[#8d2f21] hover:text-[#8d2f21]"
                >
                  Open LinkedIn
                </a>
              </div>
            </div>

            <div className="grid gap-3 border-t border-black/10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {focusAreas.map((item) => (
                <div key={item} className="text-sm font-semibold text-[#273632]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="flex items-end">
            <div className="w-full rounded-lg border border-black/15 bg-white/65 p-3 shadow-[0_24px_80px_rgba(20,20,20,0.16)] backdrop-blur">
              <Image
                src="/resume-preview.png"
                alt="Preview of Paval EP resume"
                width={900}
                height={1273}
                priority
                className="h-auto w-full rounded-md border border-black/10"
              />
            </div>
          </aside>
        </div>
      </section>

      <section id="work" className="bg-[#141414] px-6 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f0b35b]">
              Selected product work
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Mobile products with real release paths.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-lg border border-white/12 bg-white/[0.06] p-6"
              >
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#9fd4c4]">
                  {project.context}
                </p>
                <h3 className="mt-4 text-2xl font-black">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/72">
                  {project.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-b border-black/10 bg-[#f8f7f2] px-6 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8d2f21]">
              Experience
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              React Native delivery across domains.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4b5752]">
              I work across implementation, integration, debugging, release
              preparation, documentation, and collaboration with designers,
              developers, clients, and stakeholders.
            </p>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.period}`}
                className="grid gap-3 py-6 sm:grid-cols-[1fr_190px]"
              >
                <div>
                  <h3 className="text-2xl font-black">{item.role}</h3>
                  <p className="mt-1 text-lg text-[#31524a]">{item.company}</p>
                </div>
                <div className="text-sm font-semibold uppercase tracking-[0.12em] text-[#5e6864] sm:text-right">
                  <p>{item.period}</p>
                  <p className="mt-1">{item.place}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1ea] px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8d2f21]">
              Skills
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Practical stack for mobile teams.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-black/10 bg-white px-4 py-3 text-sm font-bold text-[#273632] shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#31524a] px-6 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f0b35b]">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Available for React Native product work.
            </h2>
            <p className="mt-4 text-lg text-white/76">
              {profile.location}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#31524a] transition hover:bg-[#f0b35b]"
            >
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/35 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#f0b35b] hover:text-[#f0b35b]"
            >
              LinkedIn
            </a>
            <a
              href={`tel:${profile.phone.replaceAll(" ", "")}`}
              className="rounded-md border border-white/35 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#f0b35b] hover:text-[#f0b35b]"
            >
              Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
