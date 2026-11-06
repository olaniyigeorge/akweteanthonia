import { ArrowUpRightIcon } from "../icons";

const workItems = [
  {
    title: "A smoother start for every customer",
    text: "I onboard customers in UISP and Ruijie, checking that each account is set up accurately and service is ready to go.",
    detail: "Customer onboarding · UISP · Ruijie",
  },
  {
    title: "Clear handoffs from enquiry to installation",
    text: "I prepare quotes, coordinate schedules with technicians, and keep customers informed about what happens next.",
    detail: "Quotes · Scheduling · Technician coordination",
  },
  {
    title: "Support that closes the loop",
    text: "I respond through WhatsApp, email, and other channels, then follow through on account, billing, and payment questions.",
    detail: "Customer care · Account management · Follow-up",
  },
];

export default function SelectedWork() {
  return (
    <section className="selected-section section-shell" id="work" aria-labelledby="selected-heading" data-reveal>
      <p className="section-kicker">Experience in practice</p>
      <div className="section-heading">
        <div>
          <h2 id="selected-heading">A smoother experience, one clear handoff at a time.</h2>
          <p className="section-deck">From the first enquiry to the final follow-up, I help customers know what is happening and help teams keep the work moving.</p>
        </div>
        <a className="text-link case-prompt" href="#experience">Explore my experience <ArrowUpRightIcon /></a>
      </div>
      <ul className="home-case-list">
        {workItems.map((item) => (
          <li className="case-row" key={item.title}>
            <div className="case-copy"><h3>{item.title}</h3><p>{item.text}</p></div>
            <span className="case-read">{item.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
