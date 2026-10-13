import Image from "next/image";
import portrait from "../../public/shine-wai-tun.png";
import { experience, languages, profile, projects, skillGroups } from "../portfolio";

const glassCard =
  "relative overflow-hidden rounded-3xl border border-white/70 bg-white/50 shadow-[0_8px_32px_0_rgba(14,165,233,0.1)] backdrop-blur-xl";
const button =
  "inline-flex items-center justify-center rounded-xl border border-white bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-white hover:shadow-md";

function SlideFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="slide-content flex min-h-full w-full flex-col px-4 pt-6 pb-32 sm:px-8 sm:pt-12 sm:pb-28">
      <div className="mx-auto my-auto w-full max-w-6xl">{children}</div>
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-lg border border-sky-100 bg-white/80 px-2.5 py-1 text-xs font-medium text-slate-600">{item}</span>
      ))}
    </div>
  );
}

export function AboutSlide() {
  return (
    <SlideFrame>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className={`${glassCard} p-6 sm:p-8 lg:col-span-3`}>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/70 via-white/20 to-transparent" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sky-300/30 blur-3xl" />
          <div className="relative flex h-full flex-col justify-between gap-6">
            <div>
              <span className="inline-flex rounded-full border border-sky-200/60 bg-sky-100/80 px-3 py-1 text-xs font-semibold text-sky-700">Full Stack Software Engineer</span>
              <p className="mt-5 text-sm font-semibold text-sky-600">Hello, I&apos;m {profile.name}.</p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-4xl">Thoughtful interfaces.<br />Well-structured systems.</h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">I build across the stack — from responsive React and Vue interfaces to backend APIs and database workflows. My work spans insurance, real estate, recruitment, business management, and e-commerce.</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">Currently a Frontend Developer at MegaCeon, building Vue-based ERP interfaces and product showcase websites.</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">I love creating things: a smooth user interface, a clever piece of code, or a side project just for fun. I believe technology should feel intuitive, design should tell a story, and good coffee makes everything better.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className={`${button} text-sky-700`}>View selected work <span aria-hidden="true" className="ml-2">→</span></a>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={button}>View résumé <span className="sr-only">(PDF, opens in a new tab)</span><span aria-hidden="true" className="ml-2">↗</span></a>
            </div>
          </div>
        </div>
        <div className={`${glassCard} p-3 lg:col-span-2`}>
          <div className="relative aspect-3/4 overflow-hidden rounded-2xl border border-white/80 bg-slate-100 lg:aspect-auto lg:h-full lg:min-h-112">
            <Image src={portrait} alt="Shine Wai Tun" fill sizes="(max-width: 1023px) calc(100vw - 4rem), (max-width: 1216px) 40vw, 440px" preload className="object-cover object-[center_35%]" />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-white/95 via-white/80 to-transparent px-5 pt-16 pb-5">
              <p className="text-xs font-medium text-sky-600">{profile.role}</p>
              <h2 className="mt-1 text-xl font-bold text-slate-800">{profile.name}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[{ title: "Full-stack development", copy: "Responsive interfaces and the APIs behind them." }, { title: "Software engineering", copy: "Reusable components and clean application architecture." }, { title: "Database administration", copy: "Migrations, data modeling, and cloud data workflows." }].map((item) => (
          <div key={item.title} className={`${glassCard} p-5`}>
            <h2 className="text-sm font-bold text-slate-800">{item.title}</h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.copy}</p>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}

export function ExperienceSlide() {
  return (
    <SlideFrame>
      <header className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">Professional experience</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-800">Building software that moves businesses forward.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">From retail automation and e-commerce in Thailand to remote ERP development with an international team.</p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {experience.map((job, index) => (
          <article key={job.company} className={`${glassCard} p-6 sm:p-8 ${experience.length % 2 === 1 && index === experience.length - 1 ? "lg:col-span-2" : ""}`}>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white/70 to-transparent" />
            <div className="relative flex h-full flex-col gap-5">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-slate-800">{job.company}</h3>
                  {job.current && <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">Current role</span>}
                </div>
                <p className="mt-2 text-sm font-semibold text-sky-700">{job.role}</p>
                <p className="mt-2 text-xs text-slate-500">{job.periodLabel ? `${job.periodLabel}: ` : ""}{job.period}</p>
                {job.location && <p className="mt-1 text-xs font-medium text-slate-600">{job.location}</p>}
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{job.summary}</p>
              <div className="rounded-2xl border border-sky-100 bg-linear-to-br from-sky-50 to-white/70 p-4">
                <p className="text-2xl font-extrabold tracking-tight text-sky-600">{job.highlight.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{job.highlight.label}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-800">Responsibilities & impact</h4>
                <ul className="mt-3 list-disc space-y-3 pl-4 text-sm leading-relaxed text-slate-600">
                  {job.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
                </ul>
              </div>
              <div className="mt-auto"><Tags items={job.tools} /></div>
            </div>
          </article>
        ))}
      </div>
    </SlideFrame>
  );
}

function ProjectCard({ project, featured = false }: { project: (typeof projects)[number]; featured?: boolean }) {
  return (
    <article className={`${glassCard} ${featured ? "p-6 sm:p-8" : "p-6"}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white/70 to-transparent" />
      <div className="relative flex h-full flex-col gap-4">
        <div>
          <p className="text-xs font-semibold tracking-wide text-sky-600">{project.company}</p>
          <h3 className={`mt-2 font-bold text-slate-800 ${featured ? "text-2xl" : "text-lg"}`}>{project.title}</h3>
          <p className="mt-2 text-xs text-slate-500">{project.periodLabel ? `${project.periodLabel}: ` : ""}{project.period}</p>
          <p className="mt-1 text-xs font-medium text-slate-600">{project.role}</p>
        </div>
        <p className="text-sm leading-relaxed text-slate-600">{project.summary}</p>
        <div className="rounded-2xl border border-white/80 bg-white/50 p-4">
          <h4 className="text-xs font-semibold text-slate-800">My contribution</h4>
          <ul className="mt-2 list-disc space-y-2 pl-4 text-xs leading-relaxed text-slate-600">
            {project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
          </ul>
        </div>
        <div className="mt-auto"><Tags items={project.stack} /></div>
      </div>
    </article>
  );
}

export function ProjectsSlide() {
  return (
    <SlideFrame>
      <header className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">Selected work & project history</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-800">From interface to infrastructure.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">{projects.length} projects across frontend, backend, and full-stack roles. Here&apos;s what I helped build and the work I contributed.</p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">{projects.slice(0, 2).map((project) => <ProjectCard key={project.title} project={project} featured />)}</div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{projects.slice(2).map((project) => <ProjectCard key={project.title} project={project} />)}</div>
    </SlideFrame>
  );
}

export function SkillsSlide() {
  return (
    <SlideFrame>
      <header className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">Tools & approach</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-800">A stack shaped by real projects.</h2>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className={`${glassCard} p-6 sm:p-8`}>
          <h3 className="text-xl font-bold text-slate-800">Technical skills</h3>
          <div className="mt-5 space-y-6">{skillGroups.map((group) => (
            <div key={group.title}><h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-sky-600">{group.title}</h4><Tags items={group.tools} /></div>
          ))}</div>
        </div>
        <div className="flex flex-col gap-6">
          <div className={`${glassCard} p-6 sm:p-8`}>
            <h3 className="text-xl font-bold text-slate-800">How I work</h3>
            <dl className="mt-4 space-y-4 text-sm">
              <div><dt className="font-semibold text-slate-800">Build with intention</dt><dd className="mt-1 leading-relaxed text-slate-600">Clean Architecture, dependency injection, reusable UI, and clear data flows.</dd></div>
              <div><dt className="font-semibold text-slate-800">Design for everyday use</dt><dd className="mt-1 leading-relaxed text-slate-600">Responsive Figma-to-code interfaces, searchable dashboards, and multilingual experiences.</dd></div>
              <div><dt className="font-semibold text-slate-800">Collaborate and iterate</dt><dd className="mt-1 leading-relaxed text-slate-600">Experience working with designers, API teams, testers, and company stakeholders.</dd></div>
            </dl>
          </div>
          <div className={`${glassCard} p-6 sm:p-8`}>
            <h3 className="text-xl font-bold text-slate-800">Languages</h3>
            <p className="mt-2 text-xs text-slate-500">Self-assessed proficiency.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">{languages.map((language) => (
              <div key={language.name}>
                <div className="flex justify-between gap-3 text-sm"><span className="font-medium text-slate-700">{language.name}</span><span className="text-sky-600">{language.rating}/10</span></div>
                <div aria-hidden="true" className="mt-2 h-1.5 overflow-hidden rounded-full bg-sky-100"><div className="h-full rounded-full bg-linear-to-r from-sky-400 to-blue-500" style={{ width: `${language.rating * 10}%` }} /></div>
              </div>
            ))}</div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

export function ContactSlide() {
  return (
    <SlideFrame>
      <div className={`${glassCard} mx-auto max-w-3xl p-6 text-center sm:p-14`}>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/70 via-white/20 to-transparent" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="relative flex flex-col items-center gap-6">
          <span className="rounded-full border border-sky-200/60 bg-sky-100/80 px-3 py-1 text-xs font-semibold text-sky-700">Let&apos;s connect</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">Let&apos;s build something great together.</h2>
          <p className="max-w-md text-sm leading-relaxed text-slate-600">Have a project in mind, a role to discuss, or a question about my work? Send me a message.</p>
          <a href={`mailto:${profile.email}`} className="rounded-xl bg-linear-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_0_rgba(14,165,233,0.39)] transition hover:shadow-lg">Get in touch <span aria-hidden="true">↗</span></a>
          <a href={`mailto:${profile.email}`} className="break-all text-sm font-medium text-sky-700 underline decoration-sky-200 underline-offset-4">{profile.email}</a>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={button}>GitHub <span className="sr-only">(opens in a new tab)</span><span aria-hidden="true" className="ml-2">↗</span></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={button}>LinkedIn <span className="sr-only">(opens in a new tab)</span><span aria-hidden="true" className="ml-2">↗</span></a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={button}>Résumé <span className="sr-only">(PDF, opens in a new tab)</span><span aria-hidden="true" className="ml-2">↗</span></a>
          </div>
          <p className="border-t border-sky-100 pt-5 text-xs text-slate-500">{profile.name} · {profile.role}</p>
        </div>
      </div>
    </SlideFrame>
  );
}
