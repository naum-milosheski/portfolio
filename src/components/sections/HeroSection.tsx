'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroSection() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative min-h-[100svh] flex items-center pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-6 md:gap-12 lg:gap-8 items-center">
                    {/* Left Column - Text Content (Wider for typography) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8 text-center lg:text-left lg:col-span-7 order-2 lg:order-1"
                    >
                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]">
                                <span className="block sm:whitespace-nowrap"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">AI-Powered</span> Software.</span>
                                <span className="block mt-1 sm:mt-2 sm:whitespace-nowrap">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Built in Days,</span> Not Months.
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
                                I bridge the gap between 'No-Code' limitations and 'Agency' prices. <br className="hidden lg:block" />
                                Strategic full-stack engineering for founders who need to ship fast.
                            </p>
                        </div>

                        {/* Single CTA Button - Technical Rectangle */}
                        <div className="flex justify-center lg:justify-start">
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center text-sm sm:text-lg font-medium px-6 py-3 sm:px-8 sm:py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-white/10 tracking-tight"
                            >
                                Book Strategy Call
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column - Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end lg:col-span-5 order-1 lg:order-2"
                    >
                        {/* Hero Image with Layered Masking & Back-Glow */}
                        <div className="relative z-10 w-[240px] sm:w-[340px] md:w-[320px] lg:w-[540px]">
                            <Image
                                src="/images/hero-cutout.png"
                                alt="Naum Milosheski - Senior AI Architect"
                                width={540}
                                height={660}
                                priority
                                className="w-full h-auto relative z-10"
                                style={{
                                    filter: `
                                        drop-shadow(0 0 15px rgba(168, 85, 247, 0.3))
                                        drop-shadow(0 0 30px rgba(99, 102, 241, 0.2))
                                        drop-shadow(0 0 50px rgba(168, 85, 247, 0.1))
                                    `,
                                    maskImage: `
                                        linear-gradient(to bottom, transparent 0%, black 15%, black 65%, transparent 100%),
                                        radial-gradient(
                                            ellipse 50% 85% at 50% 45%,
                                            black 45%,
                                            transparent 100%
                                        )
                                    `,
                                    WebkitMaskImage: `
                                        linear-gradient(to bottom, transparent 0%, black 15%, black 65%, transparent 100%),
                                        radial-gradient(
                                            ellipse 50% 85% at 50% 45%,
                                            black 45%,
                                            transparent 100%
                                        )
                                    `,
                                    WebkitMaskComposite: 'source-in',
                                    maskComposite: 'intersect',
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <AnimatePresence>
                {!scrolled && (
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-6 h-10 rounded-full border-2 border-text-muted flex justify-center pt-2"
                        >
                            <motion.div className="w-1.5 h-1.5 bg-text-muted rounded-full" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
