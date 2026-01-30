'use client';

import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
    project: Project;
    index: number;
    onClick?: (project: Project) => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
    const isLarge = project.size === 'large';

    return (
        <motion.article
            layoutId={`project-${project.id}`}
            onClick={() => onClick?.(project)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1
            }}
            className={`group cursor-pointer overflow-hidden transition-[transform,shadow,opacity] duration-500 hover:shadow-glow-sm rounded-2xl h-full ${isLarge ? 'row-span-2' : ''} will-change-transform`}
            style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
        >
            <div className={`relative h-full p-6 md:p-8 flex flex-col min-h-[400px] ${isLarge ? 'justify-between md:min-h-[500px]' : 'justify-between md:min-h-[240px]'
                }`}>
                {/* Stylized Image Reveal */}
                {project.image && (
                    <div className="absolute -top-4 -right-8 w-[75%] h-[75%] pointer-events-none overflow-hidden z-0">
                        <motion.div
                            className="w-full h-full grayscale-[0.8] group-hover:grayscale-0 opacity-40 group-hover:opacity-80 transition-all duration-700 ease-out md:group-hover:scale-110"
                            style={{
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: '140%',
                                backgroundPosition: project.slug === 'probuild-supply' ? 'top center' : 'top right',
                                maskImage: 'radial-gradient(circle at 70% 30%, black 30%, transparent 75%)',
                                WebkitMaskImage: 'radial-gradient(circle at 70% 30%, black 30%, transparent 75%)',
                                transform: 'perspective(1000px) rotateX(15deg) rotateY(-20deg) rotateZ(5deg)'
                            }}
                        />
                    </div>
                )}

                {/* Tag Badge */}
                <div className="relative z-10">
                    <span
                        className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.1em] rounded-full mb-4 uppercase backdrop-blur-md shadow-lg"
                        style={{
                            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.5), rgba(99, 102, 241, 0.4))',
                            border: '1px solid rgba(168, 85, 247, 0.4)',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        {project.tagline || project.tag}
                    </span>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-3 mt-auto">
                    <h3 className={`font-semibold tracking-tight transition-colors group-hover:text-glow-purple ${isLarge ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
                        }`}>
                        {project.title}
                    </h3>

                    {isLarge ? (
                        <p className="text-text-secondary text-sm md:text-base max-w-md">
                            {project.description}
                        </p>
                    ) : (
                        <p className="text-text-secondary text-sm md:text-base max-w-md md:hidden">
                            {project.description}
                        </p>
                    )}

                    {/* Hover Arrow */}
                    <div className="flex items-center gap-2 text-text-muted group-hover:text-text-primary transition-colors">
                        <span className="text-sm">View Case Study</span>
                        <motion.svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </motion.svg>
                    </div>
                </div>

                {/* Decorative Glow on Hover */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                    style={{
                        background: 'radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.15), transparent 60%)',
                    }}
                    aria-hidden="true"
                />
            </div>
        </motion.article>
    );
}
