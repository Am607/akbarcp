'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Hammer, Rocket, TrendingUp } from 'lucide-react';

const steps = [
    {
        icon: Lightbulb,
        title: 'Think',
        description: 'Ideation & Strategy',
        color: 'text-yellow-400',
        glow: 'shadow-yellow-500/20',
        border: 'border-yellow-500/20',
        bg: 'bg-yellow-500/5'
    },
    {
        icon: Hammer,
        title: 'Build',
        description: 'Engineering & Craft',
        color: 'text-indigo-400',
        glow: 'shadow-indigo-500/20',
        border: 'border-indigo-500/20',
        bg: 'bg-indigo-500/5'
    },
    {
        icon: Rocket,
        title: 'Launch',
        description: 'Deployment & Marketing',
        color: 'text-teal-400',
        glow: 'shadow-teal-500/20',
        border: 'border-teal-500/20',
        bg: 'bg-teal-500/5'
    },
    {
        icon: TrendingUp,
        title: 'Scale',
        description: 'Growth & Optimization',
        color: 'text-rose-400',
        glow: 'shadow-rose-500/20',
        border: 'border-rose-500/20',
        bg: 'bg-rose-500/5'
    }
];

import { useSoundEffects } from '@/hooks/use-sound-effects';

export function ProcessLadder() {
    const { playSound } = useSoundEffects();

    return (
        <div className="relative flex flex-col gap-8 max-w-sm mx-auto md:mr-0 pl-8">
            {/* Continuous vertical line background */}
            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="relative z-10 flex items-center gap-6 group cursor-pointer"
                        onMouseEnter={() => playSound('hover')}
                        onClick={() => playSound('click')}
                    >
                        {/* Step Marker */}
                        <div className={`
                            relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl 
                            border ${step.border} ${step.bg} backdrop-blur-sm
                            transition-all duration-300 group-hover:scale-110 group-hover:border-opacity-50
                            ${step.glow} shadow-[0_0_30px_-10px_var(--tw-shadow-color)]
                        `}>
                            <Icon className={`h-6 w-6 ${step.color} transition-transform duration-300 group-hover:rotate-12`} />

                            {/* Connector Line to Main Vertical Line */}
                            {/* <div className={`absolute right-full top-1/2 h-0.5 w-6 -translate-y-1/2 bg-gradient-to-l from-${step.border.split('-')[1]}-500/20 to-transparent`} /> */}
                        </div>

                        {/* Content Card */}
                        <div className={`
                            flex-1 rounded-xl border border-white/5 bg-white/5 p-4 
                            backdrop-blur-sm transition-all duration-300 
                            hover:bg-white/10 hover:border-white/10
                            border-l-2 border-l-${step.border.split('-')[1]}-500/50
                        `}>
                            <h3 className="font-display text-lg font-bold text-white mb-0.5">
                                {step.title}
                            </h3>
                            <p className="text-sm text-white/50 font-medium">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
