import { Hero } from "@/components/home/hero";
import { ExperienceCard } from "@/components/experience/experience-card";
import { experiences } from "@/data/experience";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Hero />
      <section id="experience" className="py-24 px-6 md:px-12 max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold font-display mb-12 text-white">Work Experience</h2>
        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              index={index}
              {...exp}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
