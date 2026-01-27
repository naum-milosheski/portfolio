'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
    { href: '#work', label: 'Work' },
    { href: '#process', label: 'Process' },
    { href: '#about', label: 'About' },
];

export default function GlassHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-7xl transition-all duration-300 ${isScrolled ? 'top-4' : 'top-6'
                }`}
        >
            <nav
                className={`rounded-xl px-4 py-3 md:px-6 md:py-4 flex items-center justify-between transition-all duration-300 backdrop-blur-xl bg-[#0A0A0F]/60 border border-white/10 ${isScrolled ? 'shadow-2xl shadow-purple-900/10' : ''
                    }`}
            >
                {/* Logo / Name */}
                <Link
                    href="/"
                    className="text-2xl md:text-3xl font-bold font-space-grotesk tracking-tight text-text-primary hover:opacity-90 transition-opacity"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                    Naum Milosheski
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="#contact"
                        className="btn-primary text-base rounded-lg"
                    >
                        Book Strategy Call
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden rounded-2xl mt-2 p-4 backdrop-blur-xl bg-[#0A0A0F]/95 border border-white/10"
                    >
                        <ul className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-lg text-text-secondary hover:text-text-primary transition-colors py-2"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-2 border-t border-glass-border">
                                <Link
                                    href="#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="btn-primary text-base block text-center rounded-lg"
                                >
                                    Book Strategy Call
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
