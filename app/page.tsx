import Slider from "./components/slider";
import {
  AboutSlide,
  ContactSlide,
  ExperienceSlide,
  ProjectsSlide,
  SkillsSlide,
} from "./components/sections";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience", mobileLabel: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <main className="viewport relative overflow-hidden bg-linear-to-br from-sky-50 via-blue-100/50 to-white font-sans text-slate-700">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-[30rem] w-[30rem] rounded-full bg-cyan-200/40 blur-3xl"></div>

      <Slider items={sections}>
        <AboutSlide />
        <ExperienceSlide />
        <ProjectsSlide />
        <SkillsSlide />
        <ContactSlide />
      </Slider>
    </main>
  );
}
