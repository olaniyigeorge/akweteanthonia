const proofPoints = [
  { value: "English + French", detail: "Bilingual customer communication" },
  { value: "Customer to team", detail: "Support, coordination, and follow-through" },
  { value: "Lagos, Nigeria", detail: "Available for remote opportunities" },
];

export default function ProofStrip() {
  return (
    <section className="proof-section" aria-label="At a glance">
      <div className="section-shell proof-inner">
        {proofPoints.map((point) => <div key={point.value}><strong>{point.value}</strong><span>{point.detail}</span></div>)}
      </div>
    </section>
  );
}
