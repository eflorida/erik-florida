declare module "*.mdx" {
  import type { ComponentType } from "react";

  const MDXContent: ComponentType;
  export const metadata: unknown;
  export default MDXContent;
}
