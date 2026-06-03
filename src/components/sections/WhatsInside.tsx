import Reveal from '@/components/Reveal';

const svg = (children: React.ReactNode) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    {children}
  </svg>
);

const features: { icon: React.ReactNode; title: string; body: React.ReactNode }[] = [
  {
    icon: svg(
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    ),
    title: 'Answers every call, day or night',
    body: 'A natural-sounding assistant picks up 24/7 — after hours, weekends, while you’re on a job — so a ringing phone never becomes a lost customer.',
  },
  {
    icon: svg(
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
    title: 'Turns website visitors into booked jobs',
    body: 'A chat assistant that knows your business answers questions and books the visitor on the spot — before they bounce to the next contractor in the search results.',
  },
  {
    icon: svg(
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
    title: 'Books straight into your calendar',
    body: 'Call or chat, every appointment lands in one shared calendar automatically. No phone tag, no double-booking, no manual scheduling.',
  },
  {
    icon: svg(
      <>
        <path d="m12 2 9 17H3z" />
        <path d="M12 9v4M12 17h.01" />
      </>
    ),
    title: 'Knows an emergency from a routine request',
    body: 'Urgent jobs get flagged and sent to you immediately for dispatch. Routine requests get booked directly. Every customer gets the right response — fast when it matters, scheduled when it doesn\'t.',
  },
  {
    icon: svg(
      <>
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </>
    ),
    title: 'Follows up so leads never go cold',
    body: 'Automatic, multi-step follow-up by email and text keeps working a lead after first contact — the part most businesses simply forget to do.',
  },
  {
    icon: svg(
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
    ),
    title: 'Wakes up your dead estimates',
    body: 'Re-engages old quotes and cold leads you already paid to generate — turning estimates that went quiet back into booked work.',
  },
  {
    icon: svg(
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    ),
    title: 'Builds your reputation automatically',
    body: 'After each job it asks happy customers for a review and helps you reply. More fresh 5-star reviews means you rank higher — and the leads you already pay for are more likely to pick you.',
  },
  {
    icon: svg(
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    title: 'Cuts down no-shows',
    body: 'Automatic reminders before every appointment, so fewer customers forget and your schedule doesn\'t get wasted.',
  },
  {
    icon: svg(
      <>
        <rect x="3" y="3" width="7" height="9" />
        <rect x="14" y="3" width="7" height="5" />
        <rect x="14" y="12" width="7" height="9" />
        <rect x="3" y="16" width="7" height="5" />
      </>
    ),
    title: 'Everything in one dashboard',
    body: 'Every call, chat, lead, and booking in one place — so you can see exactly what’s coming in and what it’s worth, at a glance.',
  },
  {
    icon: svg(
      <>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </>
    ),
    title: 'Run and improved every month',
    body: 'I monitor the system, send you a monthly summary of what it captured and booked, and keep tuning it. It gets sharper over time — not stale.',
  },
];

export default function WhatsInside() {
  return (
    <section className="block" id="system">
      <div className="wrap">
        <Reveal>
          <div className="kicker">What&apos;s inside the system</div>
          <h2 className="title">Not a chatbot. A complete revenue machine.</h2>
          <p className="lead">
            Ten parts working as one — capturing every lead, converting it, and
            following up long after a normal business would have given up.
          </p>
        </Reveal>
        <div className="feat-grid">
          {features.map((f) => (
            <Reveal className="feat" key={f.title}>
              <div className="feat-ico">{f.icon}</div>
              <div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
