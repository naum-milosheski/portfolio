'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, Project } from '@/data/projects';
import ProjectCard from '@/components/cards/ProjectCard';
import ProjectModal from '@/components/modals/ProjectModal';

export default function SelectedWork() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="work" className="py-16 sm:py-24 md:py-20 lg:py-32 relative">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16 text-center md:text-left"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Selected Work
                    </h2>
                    <p className="mt-2 sm:mt-4 text-text-secondary text-base sm:text-lg">
                        AI-powered solutions that deliver real business impact.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Large Card - ShiftSync */}
                    <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 h-full">
                        <ProjectCard
                            project={projects.find(p => p.slug === 'shiftsync')!}
                            index={0}
                            onClick={setSelectedProject}
                        />
                    </div>

                    {/* Small Card - LuxeHome */}
                    <div className="h-full">
                        <ProjectCard
                            project={projects.find(p => p.slug === 'luxehome')!}
                            index={1}
                            onClick={setSelectedProject}
                        />
                    </div>

                    {/* Small Card - ProBuild Supply */}
                    <div className="h-full">
                        <ProjectCard
                            project={projects.find(p => p.slug === 'probuild-supply')!}
                            index={2}
                            onClick={setSelectedProject}
                        />
                    </div>
                </div>
            </div>

            {/* Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}
