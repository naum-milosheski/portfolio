import Reveal from '@/components/Reveal';

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

export default function DemoSection() {
  return (
    <section className="block" id="demo">
      <div className="wrap">
        <Reveal>
          <div className="kicker">See it in action</div>
          <h2 className="title">
            Don&apos;t take my word for it. <span className="amber">Talk to one.</span>
          </h2>
          <p className="lead">
            Here&apos;s a complete system I built for a roofing company. It
            answers, qualifies the lead, and books the appointment — live, in
            under a minute. Yours would be built the same way, customized to
            your business.
          </p>
        </Reveal>

        <div className="demo-grid">
          <Reveal className="browser">
            <div className="browser-bar">
              <div className="dotrow">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <div className="url">
                🔒 <b>lonestar.milosheski.com</b>
              </div>
            </div>
            <div className="browser-body">
              <div className="demo-msg ai">
                Hi! Lone Star Roofing here — what&apos;s going on with your roof?
              </div>
              <div className="demo-msg user">
                Storm last night, there&apos;s water coming into the upstairs
                ceiling.
              </div>
              <div className="demo-msg ai">
                That&apos;s urgent — I&apos;m flagging this for immediate
                dispatch. What&apos;s the address and best number to reach you?
              </div>
              <div className="booked">
                ⚡ Emergency lead captured — dispatched to owner
              </div>
            </div>
          </Reveal>

          <Reveal>
            <ul className="demo-points">
              <li>
                {check}
                <span>
                  <b>Answers instantly, 24/7.</b> Nights, weekends, while
                  you&apos;re on a job — no missed calls, no voicemail.
                </span>
              </li>
              <li>
                {check}
                <span>
                  <b>Qualifies and books.</b> Routine jobs get booked straight
                  into your calendar. No back-and-forth.
                </span>
              </li>
              <li>
                {check}
                <span>
                  <b>Knows what&apos;s urgent.</b> Emergencies skip the calendar
                  and go straight to you for dispatch.
                </span>
              </li>
              <li>
                {check}
                <span>
                  <b>Follows up automatically.</b> Old estimates, no-shows,
                  reviews — handled without you lifting a finger.
                </span>
              </li>
            </ul>
            <a
              href="https://lonestar.milosheski.com"
              className="btn btn-primary btn-lg"
              style={{ marginTop: '8px' }}
            >
              Try the live demo →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
