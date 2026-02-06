'use client';

import Link from 'next/link';
import { useSoundEffects } from '@/hooks/use-sound-effects';

export function Header() {
    const { playSound } = useSoundEffects();

    const navItems = [
        { name: 'Work', href: '/#work' },
        { name: 'Experience', href: '/experience' },
        { name: 'About', href: '/#about' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
            <div className="container mx-auto flex h-16 items-center justify-between px-6 md:px-12">
                <Link
                    href="/"
                    className="font-display text-xl font-bold tracking-tighter text-white transition-opacity hover:opacity-80"
                    onMouseEnter={() => playSound('hover')}
                    onClick={() => playSound('click')}
                >
                    Akbar CP
                </Link>
                <nav className="flex gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            onMouseEnter={() => playSound('hover')}
                            onClick={() => playSound('click')}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
