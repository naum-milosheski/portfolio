import Reveal from '@/components/Reveal';

export default function HowItWorks() {
  return (
    <section className="block" id="how" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="kicker">How it works</div>
          <h2 className="title">Live in days. Working while you sleep.</h2>
        </Reveal>
        <div className="steps">
          <Reveal className="step">
            <div className="step-num">01</div>
            <h3>I build it for you</h3>
            <p>
              Trained on your services, your service area, and your pricing.
              Connected to your phone number and calendar. Live in days, not
              months.
            </p>
          </Reveal>
          <Reveal className="step">
            <div className="step-num">02</div>
            <h3>It works around the clock</h3>
            <p>
              Every call, chat, and form gets answered, qualified, and booked —
              or routed to you instantly when it&apos;s an emergency. Nothing
              slips through.
            </p>
          </Reveal>
          <Reveal className="step">
            <div className="step-num">03</div>
            <h3>You stop losing jobs</h3>
            <p>
              Every lead and conversation in one dashboard, with follow-up
              running on autopilot. I monitor and optimize it every month.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
