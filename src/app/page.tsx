import { Hero } from "@/components/home/hero";
import { BentoGrid, BentoGridItem } from "@/components/home/bento-grid";
import { Folder, Github, Globe, Twitter } from "lucide-react";
import { ExperienceCard } from "@/components/experience/experience-card";
import { experiences } from "@/data/experience";

export default function Home() {
  const items = [
    {
      title: "Project Alpha",
      description: "A revolutionary AI platform for creative professionals.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <Folder className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
      link: "#",
    },
    {
      title: "Minimal UI Kit",
      description: "Open source design system for fast prototyping.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <Globe className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
      link: "#",
    },
    {
      title: "Tech Blog",
      description: "Insights on React, Next.js, and modern web development.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <Github className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
      link: "#",
    },
    {
      title: "Community",
      description: "Building a community of developers.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <Twitter className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
      link: "#",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Hero />
      <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold font-display mb-12 text-white">What I’ve Built</h2>
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
              link={item.link}
            />
          ))}
        </BentoGrid>
      </section>

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
