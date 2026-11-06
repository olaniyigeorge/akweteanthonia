import { ArrowUpRightIcon } from "../icons";

export default function AboutSection() {
  return (
    <section className="intro section-shell" id="about" data-reveal>
      <p className="section-kicker">A little about me</p>
      <div className="intro-grid">
        <h2>Customer experience is a team effort.</h2>
        <div className="intro-body">
          <p>Customers do not see the pending tickets, internal delays, or the handoff that got missed. They experience the communication they receive and whether someone takes ownership of what happens next.</p>
          <p>My work sits between customers and the teams serving them. I keep information moving, make expectations clear, and look for practical ways to reduce friction for everyone.</p>
          <a className="underlined-link" href="https://www.linkedin.com/in/akouete-anthonia/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRightIcon /></a>
        </div>
      </div>
      <div className="principles">
        <div><h3>Listen to understand</h3><p>Find the real need, not just the first question.</p></div>
        <div><h3>Make the next step clear</h3><p>Share the right information with the right people.</p></div>
        <div><h3>Follow through</h3><p>Close the loop and learn from recurring issues.</p></div>
      </div>
    </section>
  );
}
