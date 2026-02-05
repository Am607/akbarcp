import { ExperienceCard } from '@/components/experience/experience-card';

import { experiences } from '@/data/experience';

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-16 px-6 md:px-12">
            <div className="mx-auto max-w-4xl space-y-12">
                <div className="space-y-4">
                    <h1 className="font-display text-4xl font-bold tracking-tighter text-white sm:text-5xl">
                        Work Experience
                    </h1>
                    <p className="max-w-2xl text-lg text-white/60">
                        A timeline of my professional journey, building impactful products and engineering solutions.
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    {experiences.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            index={index}
                            {...exp}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
