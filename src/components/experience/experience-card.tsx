'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';
// import Image from 'next/image';

export interface ExperienceCardProps {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string;
    technologies: string[];
    logo?: string; // Optional URL or local path
    color?: string; // Brand color for accent
    links?: { label: string; url: string }[];
    index: number;
}

import { useSoundEffects } from '@/hooks/use-sound-effects';

export function ExperienceCard({
    company,
    role,
    period,
    location,
    description,
    technologies,
    color = '#ffffff',
    links,
    index,
}: ExperienceCardProps) {
    const { playSound } = useSoundEffects();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 transition-colors hover:bg-white/10 md:flex-row md:items-start md:gap-8"
            onMouseEnter={() => playSound('hover')}
            onClick={() => playSound('click')}
        >
            {/* Decorative vertical line for timeline effect if used in a list */}
            <div
                className="absolute left-0 top-0 h-full w-1 overflow-hidden rounded-l-2xl transition-all group-hover:w-1.5"
                style={{ backgroundColor: color }}
            />

            <div className="flex-1 space-y-4">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                    <div>
                        <h3 className="font-display text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                            {role}
                        </h3>
                        <div className="text-lg font-medium text-white/80">{company}</div>
                    </div>
                    <div className="flex flex-col items-start gap-1 text-sm text-white/40 md:items-end">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{location}</span>
                        </div>
                    </div>
                </div>

                <p className="text-base leading-relaxed text-white/60">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/70"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {links && links.length > 0 && (
                    <div className="flex flex-wrap gap-4 pt-2">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                                {link.label}
                                <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
