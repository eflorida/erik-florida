import { RunExplorer } from "@/components/run-explorer";
import { getReferenceRun } from "@/data/runs";

export default function ReferenceRunPage() {
  return (
    <main id="main-content">
      <RunExplorer run={getReferenceRun()} />
    </main>
  );
}
