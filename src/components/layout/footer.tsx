import Link from 'next/link';
import { Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer id="contact" className="border-t border-white/10 bg-black pt-24 pb-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col gap-12 md:flex-row md:justify-between">
                    <div className="max-w-xl">
                        <h3 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                            Let&apos;s build something <span className="text-indigo-500">extraordinary</span>.
                        </h3>
                        <p className="mt-6 text-lg text-white/60">
                            Open for opportunities. If you have a project in mind, reach out.
                        </p>
                        <a
                            href="mailto:hello@akbarcp.com"
                            className="mt-8 inline-flex items-center gap-2 text-xl font-medium text-white decoration-indigo-500 underline-offset-4 hover:underline"
                        >
                            <Mail className="h-6 w-6" />
                            hello@akbarcp.com
                        </a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
                            Socials
                        </h4>
                        <div className="flex flex-col gap-2">
                            <Link href="#" className="text-white/60 hover:text-white transition-colors">Twitter / X</Link>
                            <Link href="#" className="text-white/60 hover:text-white transition-colors">GitHub</Link>
                            <Link href="#" className="text-white/60 hover:text-white transition-colors">LinkedIn</Link>
                        </div>
                    </div>
                </div>

                <div className="mt-24 flex flex-col justify-between gap-6 border-t border-white/5 pt-8 text-sm text-white/40 md:flex-row">
                    <p>&copy; {new Date().getFullYear()} Akbar CP. All rights reserved.</p>
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            <span>System Status: Online</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
