'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { processSteps } from '@/data/projects';

export default function ProcessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end']
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="process" className="py-16 sm:py-24 md:py-20 lg:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl" ref={containerRef}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 md:mb-32"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        The Process
                    </h2>
                    <p className="mt-2 sm:mt-4 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
                        From chaos to clarity in three steps.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* === THE TRACING BEAM (SPINE) === */}
                    {/* Desktop: Center Line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/5">
                        <motion.div
                            style={{ scaleY, transformOrigin: 'top' }}
                            className="w-full h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 box-shadow-glow"
                        />
                    </div>

                    {/* Mobile: Left Line */}
                    <div className="lg:hidden absolute left-8 top-0 bottom-0 w-[2px] bg-white/5">
                        <motion.div
                            style={{ scaleY, transformOrigin: 'top' }}
                            className="w-full h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600"
                        />
                    </div>

                    {/* === STEPS === */}
                    <div className="relative flex flex-col gap-12 lg:gap-24">
                        {processSteps.map((step, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative flex items-center lg:justify-between ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        }`}
                                >
                                    {/* NODE (Desktop Center / Mobile Left) */}
                                    <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-cyan-500 bg-[#0A0A0F] z-10 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                                        <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full" />
                                    </div>

                                    {/* EMPTY SPACER (For Desktop Zig-Zag) */}
                                    <div className="hidden lg:block w-5/12" />

                                    {/* CONTENT CARD */}
                                    <div className="w-full pl-20 lg:pl-0 lg:w-5/12">
                                        <div className="glass p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors group">
                                            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 block">
                                                {step.stepNumber} — {step.category}
                                            </span>
                                            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 text-white group-hover:text-cyan-100 transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
