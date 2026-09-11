type SystemDiagramProps = {
  caption: string;
  steps: string[];
};

export function SystemDiagram({ caption, steps }: SystemDiagramProps) {
  return (
    <figure className="system-diagram">
      <figcaption>{caption}</figcaption>
      <ol aria-label={caption}>
        {steps.map((step, index) => (
          <li key={`${index}-${step}`}>
            <span className="system-diagram__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <p className="system-diagram__description">
        A sequential flow from {steps.join(" to ")}.
      </p>
    </figure>
  );
}
