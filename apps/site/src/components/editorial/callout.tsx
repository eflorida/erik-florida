import type { ReactNode } from "react";

type CalloutProps = {
  children: ReactNode;
  eyebrow?: string;
  title: string;
};

export function Callout({
  children,
  eyebrow = "Working principle",
  title,
}: CalloutProps) {
  return (
    <aside className="callout" aria-label={title}>
      <p className="callout__eyebrow">{eyebrow}</p>
      <p className="callout__title">{title}</p>
      <div className="callout__body">{children}</div>
    </aside>
  );
}
