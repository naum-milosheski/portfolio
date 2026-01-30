'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/projects';
import { useRef, useState, useEffect } from 'react';

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showScrollHint, setShowScrollHint] = useState(false);
    const [canScroll, setCanScroll] = useState(false);
    const [isMobile, setIsMobile] = useState(true); // Default to true to prevent hydration mismatch heavy animations

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Initial scroll check
    useEffect(() => {
        const checkScroll = () => {
            if (scrollRef.current) {
                const isScrollable = scrollRef.current.scrollHeight > scrollRef.current.clientHeight;
                setCanScroll(isScrollable);
                setShowScrollHint(isScrollable && scrollRef.current.scrollTop < 20);
            }
        };

        if (isOpen && project) {
            // Wait for render to calculate heights
            const timer = setTimeout(checkScroll, 100);
            window.addEventListener('resize', checkScroll);
            return () => {
                clearTimeout(timer);
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, [isOpen, project]);

    // Track scroll to hide hint
    const handleScroll = () => {
        if (scrollRef.current && canScroll) {
            setShowScrollHint(scrollRef.current.scrollTop < 20);
        }
    };

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md md:backdrop-blur-xl cursor-pointer"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            transition={{ type: "spring", stiffness: 260, damping: 30 }}
                            className="bg-[#0A0A0F] border border-white/10 w-full max-w-[1200px] h-[85vh] md:h-[80vh] overflow-hidden rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] pointer-events-auto flex flex-col md:flex-row relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2.5 rounded-full bg-black/60 md:bg-white/5 hover:bg-white/10 text-white/80 md:text-white/50 hover:text-white transition-all cursor-pointer backdrop-blur-md border border-white/20 md:border-white/10 active:scale-95"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Left Side: Cinematic Media Stage */}
                            <div className="w-full md:w-[55%] h-[45%] md:h-full relative overflow-hidden bg-[#0A0A0F] border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center">
                                {project.image ? (
                                    <>
                                        {/* Dynamic Ambient Bokeh (fills the vertical void) */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.25 }}
                                            className="absolute inset-0 scale-150 blur-[100px] pointer-events-none"
                                            style={{
                                                backgroundImage: `url(${project.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }}
                                        />

                                        {/* Dark Overlay for Light Images (ensures consistency) */}
                                        <div className="absolute inset-0 bg-[#0A0A0F] pointer-events-none" />

                                        {/* Visual Depth Gradients */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0F] via-transparent to-transparent z-10" />

                                        {/* 3D Perspective Stage */}
                                        <div className="relative z-20 w-full h-full flex items-center justify-center p-6 md:p-10 [perspective:2000px]">
                                            <motion.div
                                                initial={{ rotateY: -30, rotateX: 15, opacity: 0, scale: 0.8, x: -30 }}
                                                animate={{
                                                    rotateY: -20,
                                                    rotateX: 8,
                                                    opacity: 1,
                                                    scale: 1,
                                                    x: 0,
                                                    y: [0, -10, 0]
                                                }}
                                                transition={{
                                                    opacity: { duration: 1 },
                                                    rotateY: { duration: 1.2, ease: "easeOut" },
                                                    rotateX: { duration: 1.2, ease: "easeOut" },
                                                    y: {
                                                        duration: 8,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    },
                                                    x: { duration: 1, ease: "easeOut" }
                                                }}
                                                className="relative w-full max-w-[500px] md:max-w-none md:w-[105%] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] rounded-xl border border-white/20 overflow-hidden ring-1 ring-white/10"
                                                style={{ transformStyle: 'preserve-3d' }}
                                            >
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-auto object-contain block"
                                                />

                                                {/* Professional Screen Gloss Reflection - Desktop Only */}
                                                {!isMobile && (
                                                    <motion.div
                                                        animate={{ x: ['100%', '-100%'] }}
                                                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] pointer-events-none"
                                                    />
                                                )}

                                                {/* Bottom Shadow Lift */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                                            </motion.div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-white/20 font-medium tracking-[0.2em] uppercase text-[10px]">Media Coming Soon</div>
                                )}
                            </div>

                            {/* Right Side: Technical Specs & Narrative */}
                            <div className="w-full md:w-[45%] h-[55%] md:h-full bg-[#0D0D14] flex flex-col relative">
                                <div
                                    ref={scrollRef}
                                    onScroll={handleScroll}
                                    className="flex-grow overflow-y-auto p-8 md:p-14 lg:p-16 scroll-smooth minimal-scrollbar"
                                >
                                    <div className="space-y-12">
                                        {/* Header Narrative */}
                                        <div className="space-y-6 relative">
                                            <div className="space-y-2">
                                                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[0.9]">{project.title}</h2>
                                                {project.tagline && (
                                                    <p className="text-glow-purple text-[10px] md:text-xs font-black tracking-[0.3em] uppercase opacity-80">{project.tagline}</p>
                                                )}
                                            </div>
                                            <p className="text-sm md:text-base text-white/50 leading-relaxed font-medium">
                                                {project.longDescription || project.description}
                                            </p>
                                        </div>

                                        {/* Technical Breakdown */}
                                        <div className="grid grid-cols-1 gap-12 pt-10 border-t border-white/5">
                                            {/* Core Stack */}
                                            <div className="space-y-5">
                                                <h4 className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em] flex items-center gap-3">
                                                    Core Stack
                                                </h4>
                                                <div className="flex flex-wrap gap-2.5">
                                                    {project.techStack?.map((tech) => (
                                                        <span key={tech} className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] font-bold text-white/70 hover:bg-white/[0.06] hover:border-white/20 transition-colors">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Core Innovations */}
                                            <div className="space-y-5">
                                                <h4 className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em] flex items-center gap-3">
                                                    Key Features
                                                </h4>
                                                <ul className="space-y-6">
                                                    {project.features?.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start text-sm text-white/70 group">
                                                            <div className="mt-1.5 mr-5 w-1.5 h-1.5 rounded-full bg-glow-purple group-hover:shadow-[0_0_12px_rgba(168,85,247,0.8)] transition-all flex-shrink-0" />
                                                            <span className="leading-relaxed leading-snug">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Professional Scroll Indicators */}
                                <AnimatePresence>
                                    {canScroll && showScrollHint && (
                                        <>
                                            {/* Bottom Fade Mask (only visible when scrollable and not at bottom) */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 0.6 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute bottom-[96px] md:bottom-[112px] left-0 w-full h-24 bg-gradient-to-t from-[#0D0D14] via-[#0D0D14]/80 to-transparent pointer-events-none z-10"
                                            />

                                            {/* Scroll Hint Indicator - Hidden on mobile */}
                                            <motion.div
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 5 }}
                                                className="absolute bottom-[128px] left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1 pointer-events-none"
                                            >
                                                <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Scroll</span>
                                                <motion.div
                                                    animate={{ y: [0, 4, 0] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                >
                                                    <svg className="w-4 h-4 text-glow-purple/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </motion.div>
                                            </motion.div>
                                        </>
                                    )}
                                </AnimatePresence>

                                {/* Floating Footer Button Area */}
                                <div className="p-8 md:p-10 border-t border-white/5 bg-[#0D0D14]/80 backdrop-blur-md">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative flex items-center justify-center w-full py-4 bg-white text-black font-bold rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-white/10 hover:translate-y-[-2px] active:translate-y-[0px]"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            Launch Live Demo 🚀
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-glow-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
