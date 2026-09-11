import type { ReactNode } from "react";

type OverviewSectionProps = {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
};

export function OverviewSection({
  id,
  kicker,
  title,
  children,
}: OverviewSectionProps) {
  return (
    <section
      className="home-story overview-section"
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="home-story__heading">
        <p className="section-kicker">{kicker}</p>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      <div className="home-story__body overview-section__body">{children}</div>
    </section>
  );
}
