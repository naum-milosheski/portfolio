'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
    name: string;
    email: string;
    company: string;
    message: string;
}

export default function ContactSection() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset after showing success
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', company: '', message: '' });
        }, 3000);
    };

    const inputClasses = `
    w-full px-3 py-2 sm:px-4 sm:py-3 
    bg-bg-elevated/50 
    border border-glass-border 
    rounded-lg 
    text-sm sm:text-base
    text-text-primary 
    placeholder:text-text-muted
    focus:outline-none focus:border-glow-purple focus:ring-1 focus:ring-glow-purple/50
    transition-all duration-200
  `;

    return (
        <section id="contact" className="py-16 sm:py-24 md:py-20 lg:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - CTA Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 text-center md:text-left"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                            Let&apos;s Build Something{' '}
                            <span
                                className="bg-gradient-to-r from-glow-cyan via-glow-blue to-glow-purple bg-clip-text text-transparent"
                            >
                                Extraordinary
                            </span>
                        </h2>
                        <p className="mt-2 sm:mt-4 text-text-secondary text-base sm:text-lg max-w-lg">
                            Whether you have a clear vision or just a rough idea, I&apos;ll help you transform it into
                            production-ready AI-powered software that becomes a permanent business asset.
                        </p>

                        <div className="flex flex-col gap-4 pt-4">
                            <div className="flex items-center gap-3 text-text-secondary">
                                <div className="w-8 h-8 rounded-full bg-glow-purple/20 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-glow-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span>Free 30-minute strategy call</span>
                            </div>
                            <div className="flex items-center gap-3 text-text-secondary">
                                <div className="w-8 h-8 rounded-full bg-glow-purple/20 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-glow-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span>No commitment required</span>
                            </div>
                            <div className="flex items-center gap-3 text-text-secondary">
                                <div className="w-8 h-8 rounded-full bg-glow-purple/20 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-glow-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span>Response within 24 hours</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="glass-card p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6"
                        >
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                                    <p className="text-text-secondary">I&apos;ll be in touch within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm text-text-muted mb-2">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className={inputClasses}
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm text-text-muted mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className={inputClasses}
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm text-text-muted mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className={inputClasses}
                                            placeholder="Acme Inc."
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm text-text-muted mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className={inputClasses + ' resize-none'}
                                            placeholder="Briefly describe what you want to build..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary w-full text-base py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
