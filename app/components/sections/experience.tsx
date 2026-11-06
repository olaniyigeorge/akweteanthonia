import { CheckIcon } from "../icons";

type ExperienceRole = {
  dates: string;
  duration: string;
  title: string;
  organization: string;
  location: string;
  responsibilities?: string[];
  skills: string[];
};

const roles: ExperienceRole[] = [
  {
    dates: "Jul 2024 - Present",
    duration: "2 yrs 5 mos",
    title: "Operations & Customer Support Assistant",
    organization: "Afrieta Pty Ltd · Full-time",
    location: "Lagos, Lagos State, Nigeria · Remote",
    responsibilities: [
      "Onboarded customers into UISP and Ruijie, ensuring accurate setup and service activation",
      "Prepared and sent quotes to prospective customers, supporting sales processes and lead conversion",
      "Scheduled installations and coordinated with technicians to ensure timely service delivery",
      "Provided real-time customer support via WhatsApp, email, and other channels",
      "Managed Facebook and Instagram accounts, including content planning, posting, and engagement",
      "Designed marketing materials and promotional content using Canva",
      "Managed customer accounts, handled billing inquiries, and followed up on outstanding payments",
      "Maintained internal organization and workflow tracking using Notion and Excel",
    ],
    skills: ["Organization", "Teamwork", "Customer Support", "Social Media", "Canva", "Notion", "Excel"],
  },
  {
    dates: "Feb 2019 - Jun 2024",
    duration: "5 yrs 5 mos",
    title: "Freelance Translator",
    organization: "Traduction Spécialisée",
    location: "Abuja, Federal Capital Territory, Nigeria",
    skills: ["Language Teaching", "Teamwork"],
  },
  {
    dates: "Mar 2021 - Feb 2022",
    duration: "1 yr",
    title: "French Tutor",
    organization: "Yahaya Ahmed Model School · Full-time",
    location: "Gombe State, Nigeria",
    skills: ["Language Teaching", "Teamwork"],
  },
  {
    dates: "Feb 2020 - Dec 2020",
    duration: "11 mos",
    title: "Bilingual Administrative Assistant",
    organization: "Agence Régionale pour l'Agriculture et l'Alimentation de la CEDEAO · Internship",
    location: "Lomé, Maritime Region, Togo",
    skills: ["Organization", "Teamwork"],
  },
];

export default function Experience() {
  return (
    <section className="experience section-shell" id="experience" data-reveal>
      <p className="section-kicker">Experience</p>
      <div className="timeline">
        {roles.map((role, index) => (
          <article className={`timeline-item ${index === 0 ? "timeline-current" : ""}`} key={role.title}>
            <div className="timeline-date">{role.dates}<span>{role.duration}</span></div>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h3>{role.title}</h3>
              <p className="timeline-place">{role.organization}</p>
              <p className="timeline-details">{role.location}</p>
              {role.responsibilities ? (
                <details className="timeline-disclosure">
                  <summary><span>What I worked on</span><span className="disclosure-mark" aria-hidden="true" /></summary>
                  <ul>{role.responsibilities.map((responsibility) => <li key={responsibility}><CheckIcon />{responsibility}</li>)}</ul>
                  <div className="timeline-skills">{role.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </details>
              ) : (
                <div className="timeline-skills">{role.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
