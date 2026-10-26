import casesJson from "../../content/comparisons/chairs.json";

import { comparisonCaseSchema } from "@/contracts/comparison";

export const comparisonCases = comparisonCaseSchema
  .array()
  .superRefine((cases, context) => {
    const ids = cases.map((item) => item.id);
    if (new Set(ids).size !== ids.length) {
      context.addIssue({ code: "custom", message: "Case IDs must be unique." });
    }
  })
  .parse(casesJson);

export function getComparisonCase(id: string) {
  return comparisonCases.find((item) => item.id === id) ?? null;
}
