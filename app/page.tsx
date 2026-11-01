"use client";

import { useState } from "react";

const bannerImage =
  "https://media.licdn.com/dms/image/v2/D4E16AQGPyxo8EL10Ug/profile-displaybackgroundimage-shrink_350_1400/B4EZ_Iwpk9IgAU-/0/1785779624560?e=1795046400&v=beta&t=CC8ywU0cZ6KBn5ZzuWdzu4t2N1UityLaYjsfKrk9LDs";

function ArrowUpRight() { return <span aria-hidden="true">↗</span>; }
function CheckIcon() { return <span className="check-icon" aria-hidden="true">✓</span>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark">AA</span><span>Anthonia Akouete</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}><span>{menuOpen ? "Close" : "Menu"}</span><span className="menu-lines" aria-hidden="true">☰</span></button>
        <div id="nav-links" className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a><a href="#services" onClick={closeMenu}>Expertise</a><a href="#journey" onClick={closeMenu}>Experience</a><a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s connect <ArrowUpRight /></a>
        </div>
      </nav>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Available for remote opportunities</p>
          <h1>Great customer experiences start <em>behind the scenes.</em></h1>
          <p className="hero-lede">I&apos;m Anthonia — a bilingual operations and customer support assistant who brings clarity, care, and momentum to the everyday work that keeps a business moving.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Work with me <ArrowUpRight /></a><a className="text-link" href="#services">Explore my expertise <span>↓</span></a></div>
          <div className="hero-proof"><div className="proof-avatars"><span>EN</span><span>FR</span></div><p><strong>English + French</strong><br />Supporting people across borders</p></div>
        </div>
        <div className="hero-visual" aria-label="A visual introduction to Anthonia&apos;s work">
          <div className="visual-backdrop" style={{ backgroundImage: `url(${bannerImage})` }} />
          <div className="portrait-card"><div className="portrait-initials">AA</div><div className="portrait-name">Anthonia<br /><span>Akouete</span></div><span className="portrait-role">Operations / Support</span></div>
          <div className="floating-note note-one"><span className="note-icon">✦</span><span><strong>Clear communication</strong><br />every touchpoint</span></div>
          <div className="floating-note note-two"><span className="note-icon note-icon-coral">↗</span><span><strong>Process-minded</strong><br />people-first always</span></div>
          <span className="visual-stamp">Lagos<br /><span>NG</span></span>
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><div>OPERATIONS <span>✦</span> CUSTOMER SUPPORT <span>✦</span> CLIENT EXPERIENCE <span>✦</span> BILINGUAL SERVICE <span>✦</span> OPERATIONS <span>✦</span> CUSTOMER SUPPORT <span>✦</span></div></div>

      <section className="intro section-shell" id="about">
        <div className="section-kicker">01 / A little about me</div>
        <div className="intro-grid"><h2>The calm, capable person your customers and team can count on.</h2><div className="intro-body"><p>I support growing businesses by managing customer operations, communication, and day-to-day processes that keep things running smoothly.</p><p>From onboarding a new customer to following up on a payment, I bring the same approach to every task: be clear, be organized, and make it easier for the next person.</p><a className="underlined-link" href="https://www.linkedin.com/in/akouete-anthonia/" target="_blank" rel="noreferrer">View my LinkedIn <ArrowUpRight /></a></div></div>
        <div className="principles"><div><span>01</span><h3>People first</h3><p>Every interaction is a chance to build trust.</p></div><div><span>02</span><h3>Details matter</h3><p>Small improvements make work feel lighter.</p></div><div><span>03</span><h3>Keep it moving</h3><p>Follow-through turns good intentions into results.</p></div></div>
      </section>

      <section className="services section-shell" id="services">
        <div className="section-kicker">02 / What I bring</div><div className="section-heading-row"><h2>Support that makes the whole business <em>feel smoother.</em></h2><p>One thoughtful, organized partner for the details that matter.</p></div>
        <div className="service-grid">
          <article className="service-card service-card-featured"><span className="service-number">01</span><span className="service-icon">↗</span><h3>Customer support &amp; care</h3><p>Responsive, empathetic support across WhatsApp, email, and the channels your customers already use.</p><div className="service-tags"><span>Inbox management</span><span>Issue resolution</span><span>Follow-through</span></div></article>
          <article className="service-card"><span className="service-number">02</span><span className="service-icon">⌁</span><h3>Operations coordination</h3><p>From onboarding and scheduling to account updates, I keep the moving parts aligned.</p><div className="service-tags"><span>Onboarding</span><span>Scheduling</span><span>Account care</span></div></article>
          <article className="service-card"><span className="service-number">03</span><span className="service-icon">✦</span><h3>Sales &amp; client admin</h3><p>Quotes, lead follow-up, billing queries, and the thoughtful details that support conversion.</p><div className="service-tags"><span>Quotes</span><span>Lead follow-up</span><span>Billing</span></div></article>
          <article className="service-card"><span className="service-number">04</span><span className="service-icon">◌</span><h3>Content &amp; communication</h3><p>Clear, useful communication and on-brand content that helps a business show up well.</p><div className="service-tags"><span>Social media</span><span>Canva</span><span>Translation</span></div></article>
        </div>
      </section>

      <section className="story section-shell" id="journey"><div className="section-kicker">03 / How I work</div><div className="story-grid"><div><h2>Solving today&apos;s problem while making tomorrow <em>easier.</em></h2><p className="story-intro">The best operations work is rarely loud. It&apos;s the right information in the right place, a customer who doesn&apos;t have to repeat themselves, and a team that knows what happens next.</p><div className="quote-block"><span className="quote-mark">“</span><p>Being busy is not the same as being productive. I look for the small process improvements that create a better experience for everyone.</p></div></div><div className="workflow"><div className="workflow-line" /><div className="workflow-step"><span className="step-icon">01</span><div><h3>Listen &amp; understand</h3><p>Get to the real need, not just the first message.</p></div></div><div className="workflow-step"><span className="step-icon">02</span><div><h3>Organize the moving parts</h3><p>Make ownership, timing, and next steps visible.</p></div></div><div className="workflow-step"><span className="step-icon">03</span><div><h3>Follow through</h3><p>Close the loop and leave the process better than I found it.</p></div></div></div></div></section>

      <section className="experience section-shell"><div className="section-kicker">04 / The journey so far</div><div className="timeline"><div className="timeline-item timeline-current"><div className="timeline-date">Jul 2024 — Present</div><div className="timeline-marker" /><div><h3>Operations &amp; Customer Support Assistant</h3><p className="timeline-place">Afrieta Pty Ltd · Remote</p><ul><li><CheckIcon /> Customer onboarding in UISP and Ruijie</li><li><CheckIcon /> Quotes, scheduling, and technician coordination</li><li><CheckIcon /> Customer accounts, billing, and payment follow-up</li></ul></div></div><div className="timeline-item"><div className="timeline-date">2019 — 2024</div><div className="timeline-marker" /><div><h3>Freelance Translator</h3><p className="timeline-place">Traduction Spécialisée</p><p className="timeline-description">Bridging language and meaning with precision, context, and care.</p></div></div><div className="timeline-item"><div className="timeline-date">2020 — 2022</div><div className="timeline-marker" /><div><h3>Bilingual Admin Assistant &amp; French Tutor</h3><p className="timeline-place">ECOWAS Regional Agency · Yahaya Ahmed Model School</p><p className="timeline-description">Building a foundation in administration, education, teamwork, and communication.</p></div></div></div></section>

      <section className="contact section-shell" id="contact"><div className="contact-card"><div className="contact-orb orb-one" /><div className="contact-orb orb-two" /><div className="section-kicker">05 / Let&apos;s talk</div><h2>Ready to make work feel <em>lighter?</em></h2><p>If you&apos;re looking for a thoughtful, bilingual partner to help your customers feel cared for and your operations stay on track, I&apos;d love to hear from you.</p><a className="button button-light" href="https://www.linkedin.com/in/akouete-anthonia/" target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight /></a><div className="contact-meta"><span>Lagos, Nigeria</span><span>·</span><span>Open to remote opportunities</span></div></div></section>
      <footer className="footer section-shell"><a className="brand" href="#top"><span className="brand-mark">AA</span><span>Anthonia Akouete</span></a><p>Operations with intention. Support with heart.</p><div className="footer-links"><a href="https://www.linkedin.com/in/akouete-anthonia/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a></div></footer>
    </main>
  );
}
