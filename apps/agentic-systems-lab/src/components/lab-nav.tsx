"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const modes = [
  { href: "/workspace", label: "Workspace" },
  { href: "/", label: "Live review" },
  { href: "/reference", label: "Reference scenario" },
] as const;

function NavLinks({ activePathname }: { activePathname: string }) {
  return (
    <nav className="app-nav" aria-label="Lab modes">
      {modes.map(({ href, label }) => {
        const isCurrent =
          href === "/workspace"
            ? activePathname.startsWith("/workspace")
            : activePathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-current={isCurrent ? "page" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export function LabNav() {
  const pathname = usePathname();
  return <NavLinks activePathname={pathname} />;
}

export function LabNavFallback() {
  return <NavLinks activePathname="" />;
}
