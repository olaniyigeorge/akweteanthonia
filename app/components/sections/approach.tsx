const steps = [
  { title: "Understand the whole experience", text: "Look beyond the individual ticket to see where communication or process is making things harder." },
  { title: "Coordinate the handoffs", text: "Keep ownership, timing, and updates clear across customers, support, and technical teams." },
  { title: "Improve what keeps repeating", text: "Solve the immediate issue, then notice patterns that could make the next experience smoother." },
];

export default function Approach() {
  return (
    <section className="story section-shell" data-reveal>
      <p className="section-kicker">How I work</p>
      <div className="story-grid">
        <div>
          <h2>Good support solves today&apos;s problem and makes tomorrow easier.</h2>
          <p className="story-intro">A full inbox is not always progress. I look for the reason the same issue keeps returning, then help make the process clearer for the customer and the team.</p>
          <div className="quote-block"><span className="quote-mark">“</span><p>Clear communication does not just solve problems. It can prevent them.</p></div>
        </div>
        <div className="workflow">
          <div className="workflow-line" />
          {steps.map((step) => <div className="workflow-step" key={step.title}><span className="step-icon" aria-hidden="true">✦</span><div><h3>{step.title}</h3><p>{step.text}</p></div></div>)}
        </div>
      </div>
    </section>
  );
}
