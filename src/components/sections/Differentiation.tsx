import Reveal from '@/components/Reveal';

export default function Differentiation() {
  return (
    <section className="block cmp">
      <div className="wrap">
        <Reveal>
          <div className="kicker">What makes this different</div>
          <h2 className="title">
            Most tools hand you software. I hand you a working system.
          </h2>
          <p className="lead">
            There&apos;s no shortage of apps that promise to answer your phone.
            The difference is what happens after you sign up — and who&apos;s
            responsible for making it actually work.
          </p>
        </Reveal>
        <div className="diff-grid">
          <Reveal className="diff">
            <div className="diff-ico">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h3>Built and run for you</h3>
            <p>
              You don&apos;t configure anything, learn any software, or babysit
              a dashboard. I set it all up — trained on your business —{' '}
              <b>and I run it for you every month.</b> Most tools are self-serve;
              this is done-for-you.
            </p>
          </Reveal>
          <Reveal className="diff">
            <div className="diff-ico">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 3v18h18" />
                <path d="m7 14 4-4 3 3 5-6" />
              </svg>
            </div>
            <h3>A revenue system, not a phone-answerer</h3>
            <p>
              Answering the call is the easy part. This also{' '}
              <b>
                follows up, revives the old estimates you already paid to
                generate, and asks for reviews
              </b>{' '}
              — so you get more jobs out of leads you already have, not just the
              new ones.
            </p>
          </Reveal>
          <Reveal className="diff">
            <div className="diff-ico">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </div>
            <h3>One person who owns the result</h3>
            <p>
              Not a support ticket and a help center.{' '}
              <b>One engineer who builds it, watches it, and fixes it</b> —
              customized to how your business actually works, and accountable
              for whether it brings you jobs.
            </p>
          </Reveal>
        </div>
        <p className="cmp-note">
          Every visitor, every call, every old estimate — captured and
          converted. One system, built and run for your business.
        </p>
      </div>
    </section>
  );
}
