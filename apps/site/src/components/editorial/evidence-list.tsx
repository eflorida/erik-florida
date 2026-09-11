import type { EvidenceRef } from "@/content/article-schema";

type EvidenceListProps = {
  items: EvidenceRef[];
};

const evidenceTypeLabels = {
  methodology: "Methodology",
  repository: "Implementation",
  diagram: "Model",
  "public-link": "Public source",
} satisfies Record<EvidenceRef["type"], string>;

export function EvidenceList({ items }: EvidenceListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <aside className="evidence" aria-labelledby="evidence-title">
      <div className="evidence__heading">
        <p className="section-kicker">Evidence trail</p>
        <h2 id="evidence-title">What grounds this note</h2>
      </div>

      <ul className="evidence__list">
        {items.map((item) => (
          <li key={`${item.type}-${item.label}`}>
            <p className="evidence__type">{evidenceTypeLabels[item.type]}</p>
            {item.href ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <p className="evidence__label">{item.label}</p>
            )}
            <p className="evidence__description">{item.description}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
