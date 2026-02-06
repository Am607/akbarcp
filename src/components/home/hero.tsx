'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { ProcessLadder } from './process-ladder';

import { useSoundEffects } from '@/hooks/use-sound-effects';

export function Hero() {
    const { playSound } = useSoundEffects();

    return (
        <section className="relative flex min-h-[90vh] flex-col justify-center px-6 md:px-12 py-20">
            <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left Column: Text Content */}
                <div className="flex flex-col items-start text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-display text-5xl font-bold leading-tight tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl"
                    >
                        Visionary <br />
                        <span className="text-white/40">Builder.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-8 max-w-xl text-lg text-white/60 md:text-xl"
                    >
                        I design and build digital products that solve real-world problems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <a
                            href="#work"
                            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
                            onMouseEnter={() => playSound('hover')}
                            onClick={() => playSound('click')}
                        >
                            View Work
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                            onMouseEnter={() => playSound('hover')}
                            onClick={() => playSound('click')}
                        >
                            Build with me
                        </a>
                    </motion.div>
                </div>

                {/* Right Column: Process Ladder */}
                <div className="relative mt-12 lg:mt-0">
                    <ProcessLadder />
                </div>
            </div>

            {/* Background gradients/glows */}
            <div className="absolute top-1/2 left-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
            <div className="absolute top-1/2 right-0 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-teal-500/5 blur-[120px]" />
        </section>
    );
}
