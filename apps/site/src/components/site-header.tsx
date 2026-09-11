import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/writing", label: "Writing" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="Erik Florida home">
          <span className="brand__mark" aria-hidden="true">
            EF
          </span>
          <span className="brand__name">Erik Florida</span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="site-nav">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="site-header__signal">
          <span aria-hidden="true" />
          Engineering & product
        </p>
      </div>
    </header>
  );
}
