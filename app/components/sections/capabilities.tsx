const capabilities = [
  {
    title: "Customer support & care",
    text: "I listen for what the customer needs, respond with clarity, and stay accountable until the loop is closed.",
    proof: "WhatsApp · Email · Issue resolution",
  },
  {
    title: "Operations coordination",
    text: "I bring people, schedules, and next steps together so customers do not have to manage the handoffs themselves.",
    proof: "Onboarding · Scheduling · Notion · Excel",
  },
  {
    title: "Sales & client management",
    text: "I support the customer journey with accurate quotes, organized account details, and thoughtful follow-up.",
    proof: "Quotes · CRM · Billing · Payments",
  },
  {
    title: "Content & communication",
    text: "I plan and manage social content, create promotional materials, and communicate professionally in English and French.",
    proof: "Facebook · Instagram · Canva · Translation",
  },
];

export default function Capabilities() {
  return (
    <section className="capabilities-section" id="capabilities" aria-labelledby="capabilities-heading" data-reveal>
      <div className="section-shell">
        <p className="section-kicker">What I bring to a team</p>
        <div className="section-heading-row"><h2 id="capabilities-heading">Reliable support, from the first question to the last detail.</h2><p>One organized, bilingual partner for people-facing work and the processes behind it.</p></div>
        <div className="home-capability-columns">
          {capabilities.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p><span className="capability-proof">{item.proof}</span></article>)}
        </div>
      </div>
    </section>
  );
}
