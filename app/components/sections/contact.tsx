import { ArrowUpRightIcon } from "../icons";

export default function ContactSection() {
  return (
    <section className="contact section-shell" id="contact" data-reveal>
      <div className="contact-card">
        <div className="contact-orb orb-one" /><div className="contact-orb orb-two" />
        <p className="section-kicker">Let&apos;s talk</p>
        <h2>Let&apos;s make the customer experience <em>easier.</em></h2>
        <p>If your team needs thoughtful customer support, clear communication, or help keeping daily operations organized, I&apos;d be glad to talk.</p>
        <a className="button button-light" href="mailto:akwetekayi@gmail.com">Email Anthonia <ArrowUpRightIcon /></a>
        <a className="contact-email" href="mailto:akwetekayi@gmail.com">akwetekayi@gmail.com</a>
        <div className="contact-meta"><span>Lagos, Nigeria</span><span>·</span><span>Open to remote opportunities</span></div>
      </div>
    </section>
  );
}
