const focusAreas = [
  "CUSTOMER SUPPORT",
  "OPERATIONS",
  "CLIENT MANAGEMENT",
  "SALES SUPPORT",
  "ENGLISH & FRENCH",
  "CUSTOMER SUPPORT",
  "OPERATIONS",
  "CLIENT MANAGEMENT",
];

export default function FocusStrip() {
  return (
    <section className="clients-marquee" aria-label="Areas of work">
      <h2 className="marquee-eyebrow">The work behind a better customer experience</h2>
      <div className="brand-marquee"><div className="brand-directory brand-track" aria-hidden="true">
        {focusAreas.map((area, index) => <span className="brand-directory-item" key={`${area}-${index}`}>{area}</span>)}
      </div></div>
    </section>
  );
}
