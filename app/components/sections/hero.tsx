import { ArrowDownIcon, ArrowUpRightIcon } from "../icons";

export default function HeroSection() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> BILINGUAL OPERATIONS &amp; CUSTOMER SUPPORT</p>
        <h1>Anthonia<br />Akouete</h1>
        <p className="hero-tagline">Clear communication. Thoughtful support. <em>Work that keeps moving.</em></p>
        <p className="eyebrow hero-about-eyebrow">HOW I HELP</p>
        <p className="hero-lede">I help businesses manage customers and scale efficiently through bilingual support, CRM, sales assistance, and thoughtful client management. The goal is simple: make each interaction clear, and make the next step easier.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">See how I work <ArrowUpRightIcon /></a>
          <a className="text-link" href="#about">A little about me <ArrowDownIcon /></a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo-frame">
          <img src="/hero-anthonia.png" alt="Portrait of Anthonia Akouete" width={800} height={1050} fetchPriority="high" />
        </div>
        <div className="hero-photo-note"><span className="note-icon">✦</span><span><strong>People first</strong><br />in every interaction</span></div>
      </div>
    </section>
  );
}
