'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';
import Select from '@/components/ui/Select';

const businessTypes = [
  'Roofing',
  'HVAC',
  'Plumbing',
  'Other home services',
  'Other',
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  businessType: string;
  message: string;
}

const check = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    businessType: 'Roofing',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/xkobneve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          businessType: 'Roofing',
          message: '',
        });
      }, 3000);
    } catch {
      setError(
        'Something went wrong. Please try again or email me directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="block cta" id="contact">
      <div className="wrap">
        <div className="cta-grid">
          <Reveal>
            <div className="kicker">Ready when you are</div>
            <h2 className="title">
              Stop paying for leads that never turn into jobs.
            </h2>
            <p className="lead">
              Book a free 15-minute call. I&apos;ll show you the live system on a
              real call and we&apos;ll see if it&apos;s a fit. No commitment, no
              pressure.
            </p>
            <div className="check">{check} Free 15-minute demo call</div>
            <div className="check">{check} See it work on a live call</div>
            <div className="check">{check} Reply within 24 hours</div>
          </Reveal>

          <form onSubmit={handleSubmit}>
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    margin: '0 auto 16px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(245,165,36,.12)',
                    border: '1px solid rgba(245,165,36,.3)',
                    color: 'var(--amber)',
                  }}
                >
                  {check}
                </div>
                <h3 style={{ marginBottom: 8 }}>You&apos;re booked in.</h3>
                <p style={{ color: 'var(--ink-dim)' }}>
                  I&apos;ll reply within 24 hours to set up your demo call.
                </p>
              </div>
            ) : (
              <>
                {/* Honeypot field — hidden from humans, catches spam bots */}
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="two">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">
                      Phone{' '}
                      <span style={{ color: 'var(--ink-faint)' }}>
                        (optional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Best number to reach you"
                    />
                  </div>
                </div>
                <div className="two">
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@business.com"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="businessType">Business type</label>
                    <Select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      options={businessTypes}
                      onChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          businessType: value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="message">
                    What&apos;s the biggest leak in your lead flow right now?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Missed calls after hours, slow follow-up, old estimates going cold…"
                  />
                </div>

                {error && (
                  <div
                    style={{
                      marginBottom: 16,
                      padding: 12,
                      borderRadius: 9,
                      background: 'rgba(138,74,58,.15)',
                      border: '1px solid rgba(138,74,58,.4)',
                      color: '#e0a596',
                      fontSize: '.9rem',
                    }}
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {isSubmitting ? 'Sending…' : 'Book my demo call →'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
