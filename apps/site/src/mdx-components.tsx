import type { MDXComponents } from "mdx/types";

import { Callout } from "@/components/editorial/callout";
import { SystemDiagram } from "@/components/editorial/system-diagram";

const components = {
  Callout,
  SystemDiagram,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
