import source from "../../content/runs/redirect-safety.json";

import { runSchema } from "@/contracts/run";

const referenceRun = runSchema.parse(source);

export function getReferenceRun() {
  return referenceRun;
}
