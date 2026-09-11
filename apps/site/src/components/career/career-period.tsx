import type { CareerRole } from "@/content/career-schema";

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function CareerPeriod({
  start,
  end,
}: Pick<CareerRole, "start" | "end">) {
  return (
    <span className="career-period">
      <time dateTime={start}>
        {monthFormatter.format(new Date(`${start}-01T00:00:00Z`))}
      </time>
      {" – "}
      {end ? (
        <time dateTime={end}>
          {monthFormatter.format(new Date(`${end}-01T00:00:00Z`))}
        </time>
      ) : (
        "Present"
      )}
    </span>
  );
}
