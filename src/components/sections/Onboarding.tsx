import Reveal from '@/components/Reveal';

export default function Onboarding() {
  return (
    <section className="block" id="onboarding" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="kicker">Getting started</div>
          <h2 className="title">From call to live in days.</h2>
          <p className="lead">
            No long build, no project management on your end. Here&apos;s exactly
            how it goes.
          </p>
        </Reveal>
        <div className="timeline">
          <Reveal className="tl">
            <div className="when">Step 1</div>
            <h3>We talk</h3>
            <p>
              A free 15-minute call. I learn your business and show you the
              system working live. If it&apos;s not a fit, I&apos;ll tell you.
            </p>
          </Reveal>
          <Reveal className="tl">
            <div className="when">Step 2</div>
            <h3>I build it</h3>
            <p>
              Set up for you end to end — trained on your services, area, and
              pricing, connected to your number and calendar.
            </p>
          </Reveal>
          <Reveal className="tl">
            <div className="when">In days</div>
            <h3>It goes live in stages</h3>
            <p>
              Calls, web chat, booking, follow-up email, and your dashboard go
              live first. Text messaging follows within about two weeks, once
              carrier verification clears — done by the book so your number
              never gets flagged.
            </p>
          </Reveal>
          <Reveal className="tl">
            <div className="when">Ongoing</div>
            <h3>I run it for you</h3>
            <p>
              You manage nothing. I monitor, report, and optimize every month
              while you focus on the work.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
