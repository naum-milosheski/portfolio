'use client';

import { motion } from 'framer-motion';
import { comparisons } from '@/data/projects';

export default function HybridBio() {
    return (
        <section id="about" className="py-16 sm:py-24 md:py-20 lg:py-32 relative">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        One Mind. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Entire Stack.</span>
                    </h2>
                    <p className="mt-2 sm:mt-4 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
                        When one person owns the full stack, <br className="hidden md:block" />
                        there’s no translation, no delays, and no loss of intent.
                    </p>
                </motion.div>

                {/* Comparison Grid - MONOCHROMATIC BENTO STYLE */}
                <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Traditional Devs Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-6 md:p-8 rounded-2xl"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                        }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            {/* Gray/Dark icon for Traditional */}
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-text-muted">
                                The Traditional Agency Model
                            </h3>
                        </div>

                        <ul className="space-y-6">
                            {comparisons.map((item) => (
                                <li key={item.id} className="flex items-start gap-3">
                                    <span className="text-text-muted mt-0.5 opacity-50">—</span>
                                    <div>
                                        <p className="text-sm sm:text-base text-text-muted font-medium leading-tight">{item.traditionalTitle}</p>
                                        <p className="text-text-muted/60 text-xs sm:text-sm mt-1">{item.traditionalBody}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* My Approach Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="p-6 md:p-8 rounded-2xl relative overflow-hidden"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                        }}
                    >
                        {/* Subtle Glow Accent */}
                        <div
                            className="absolute top-0 right-0 w-40 h-40 opacity-20"
                            style={{
                                background: 'radial-gradient(circle, var(--glow-purple), transparent 70%)',
                                filter: 'blur(50px)',
                            }}
                            aria-hidden="true"
                        />

                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            {/* Bright White icon for My Approach */}
                            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                                My Model
                            </h3>
                        </div>

                        <ul className="space-y-6 relative z-10">
                            {comparisons.map((item) => (
                                <li key={item.id} className="flex items-start gap-3">
                                    <span className="text-white mt-0.5">→</span>
                                    <div>
                                        <p className="text-sm sm:text-base text-text-primary font-medium leading-tight">{item.myApproachTitle}</p>
                                        <p className="text-text-secondary text-xs sm:text-sm mt-1">{item.myApproachBody}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center text-text-secondary mt-8 sm:mt-16 text-base sm:text-xl max-w-3xl mx-auto"
                >
                    <p className="font-semibold text-text-primary mb-2">The result:</p>
                    <p>
                        Faster iteration. Cleaner architecture. <br />
                        And software that actually ships.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
