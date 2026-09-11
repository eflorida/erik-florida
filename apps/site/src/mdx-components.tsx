import type { MDXComponents } from "mdx/types";

import { Callout } from "@/components/editorial/callout";
import { SystemDiagram } from "@/components/editorial/system-diagram";
import { OverviewSection } from "@/components/editorial/overview-section";

const components = {
  Callout,
  SystemDiagram,
  OverviewSection,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
