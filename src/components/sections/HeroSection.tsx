export default function HeroSection() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="stagger">
            <div className="eyebrow">
              <span className="dot"></span> AI Lead Conversion Systems
            </div>
            <h1 className="head">
              You&apos;re already paying for these leads. Most never become{' '}
              <em>jobs.</em>
            </h1>
            <p className="sub">
              Calls go to voicemail, web visitors leave, estimates go cold. I
              build the system that{' '}
              <b>
                catches every lead, books the job, and goes back for the ones
                you already lost
              </b>{' '}
              — 24/7, across phone, website, text, and email.
            </p>
            <div className="cta-row">
              <a
                href="https://lonestar.milosheski.com"
                className="btn btn-primary btn-lg"
              >
                See it live →
              </a>
              <a href="#contact" className="btn btn-ghost btn-lg">
                Book a call
              </a>
            </div>
            <div className="trust-line">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Built and run for you by one engineer — not a faceless agency.
            </div>
          </div>

          <div className="portrait-card">
            <div className="portrait">
              <img src="/images/naum.png" alt="Naum Milosheski" />
              <div className="portrait-tag">
                <div className="name">Naum Milosheski</div>
                <div className="role">
                  The engineer who builds &amp; runs your system
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
