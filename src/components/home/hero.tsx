'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative flex min-h-[80vh] flex-col justify-center px-6 md:px-12">
            <div className="mx-auto w-full max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                >
                    Available for new projects
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-display text-5xl font-bold leading-tight tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl"
                >
                    Visionary <br />
                    <span className="text-white/40">Developer.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8 max-w-xl text-lg text-white/60 md:text-xl"
                >
                    I craft digital experiences that merge aesthetics with functionality.
                    Focusing on minimalism, performance, and user-centric design.
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
                    >
                        View Work
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Background gradients/glows */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
            <div className="absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-teal-500/5 blur-[100px]" />
        </section>
    );
}
