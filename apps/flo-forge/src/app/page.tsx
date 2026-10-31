import Image from "next/image";
import { ArrowIcon, ForgeAsterisk } from "@/components/icons";
import { ForgeScene } from "@/components/forge-scene";
import { MotionToggle, Reveal } from "@/components/motion";

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={footer ? "brand footer-brand" : "brand"}
      href="#top"
      aria-label="Flo Forge home"
    >
      <Image
        src="/brand/floforge-wordmark.svg"
        alt="Flo Forge"
        width={816}
        height={232}
        priority={!footer}
      />
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      <header className="site-header frame" id="top">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#approach">The approach</a>
          <a href="#ethos">Our ethos</a>
          <a href="#about">The company</a>
        </nav>
        <a className="header-connect" href="#connect">
          Let’s connect <ArrowIcon diagonal />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            <a href="#approach">The approach</a>
            <a href="#ethos">Our ethos</a>
            <a href="#about">The company</a>
            <a href="#connect">Let’s connect ↗</a>
          </nav>
        </details>
      </header>

      <main id="main-content">
        <section className="hero frame" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> INDEPENDENT MINDS. SHARED
              AMBITION.
            </p>
            <h1 id="hero-title">
              <span>Good ideas.</span>
              <span>Forged into</span>
              <span className="ember-text">great software.</span>
            </h1>
            <p className="hero-description">
              We turn real-world friction into AI-first SaaS.
              <br className="desktop-break" /> Thoughtfully built. Relentlessly
              refined.
              <br className="desktop-break" /> Ready for the way the world works
              next.
            </p>
            <div className="hero-actions">
              <a className="button button-ember" href="#approach">
                Explore the forge <ArrowIcon />
              </a>
              <a className="text-link" href="#ethos">
                What drives us <span>↗</span>
              </a>
            </div>
          </div>
          <ForgeScene />
          <div className="hero-foot">
            <p>SOFTWARE, FORGED WITH PURPOSE.</p>
            <a href="#approach">
              <span>SCROLL TO EXPLORE</span>
              <span className="scroll-arrow">↓</span>
            </a>
            <span className="hero-coordinate" aria-hidden="true">
              HUMAN × MACHINE
            </span>
          </div>
        </section>

        <div className="belief-band">
          <div className="frame">
            <span>AI-first thinking.</span>
            <ForgeAsterisk />
            <span>Hands-on craft.</span>
            <ForgeAsterisk />
            <span>Real-world impact.</span>
            <ForgeAsterisk />
            <span>That’s Flo Forge.</span>
          </div>
        </div>

        <section
          className="approach section frame"
          id="approach"
          aria-labelledby="approach-title"
        >
          <Reveal className="section-heading">
            <p className="eyebrow section-index">
              <span>01 /</span> THE APPROACH
            </p>
            <div>
              <h2 id="approach-title">
                Less friction.
                <br />
                More possibility.
              </h2>
              <p className="section-intro">
                Great software earns its place in your day. We’re here to build
                the kind that makes hard things simpler, gives time back, and
                opens up what comes next.
              </p>
            </div>
          </Reveal>
          <div className="process-grid">
            <Reveal className="process-step">
              <div className="step-top">
                <span className="step-number">01</span>
                <svg viewBox="0 0 64 64" aria-hidden="true" fill="none">
                  <circle cx="28" cy="28" r="16" />
                  <circle cx="28" cy="28" r="5" />
                  <path d="m40 40 15 15M28 5v9M5 28h9" />
                </svg>
              </div>
              <h3>Find the friction.</h3>
              <p>
                Start with a real problem. Listen closely. Look for the everyday
                work that could work a whole lot better.
              </p>
              <span className="step-note">PURPOSE BEFORE PRODUCT</span>
            </Reveal>
            <Reveal className="process-step" delay={0.1}>
              <div className="step-top">
                <span className="step-number">02</span>
                <svg viewBox="0 0 64 64" aria-hidden="true" fill="none">
                  <path d="m32 5 24 14v27L32 60 8 46V19L32 5Zm0 0v55M8 19l24 14 24-14M8 46l24-13 24 13" />
                  <path d="m20 26 12-7 12 7v13l-12 7-12-7V26Z" />
                </svg>
              </div>
              <h3>Forge the solution.</h3>
              <p>
                Bring AI-native thinking and hands-on engineering together.
                Build around the outcome, down to the last detail.
              </p>
              <span className="step-note">INTELLIGENCE MEETS CRAFT</span>
            </Reveal>
            <Reveal className="process-step" delay={0.2}>
              <div className="step-top">
                <span className="step-number">03</span>
                <svg viewBox="0 0 64 64" aria-hidden="true" fill="none">
                  <path d="M12 26a21 21 0 0 1 38-9l5 7M55 9v15H40M52 38a21 21 0 0 1-38 9l-5-7M9 55V40h15" />
                  <path d="m25 32 5 5 10-11" />
                </svg>
              </div>
              <h3>Refine. Then repeat.</h3>
              <p>
                Shipping is a beginning. Keep learning from the people using it,
                and keep making the product worth coming back to.
              </p>
              <span className="step-note">BUILT TO KEEP GETTING BETTER</span>
            </Reveal>
          </div>
        </section>

        <section
          className="ethos-section"
          id="ethos"
          aria-labelledby="ethos-title"
        >
          <div className="frame">
            <Reveal className="ethos-panel">
              <div className="ethos-grain" aria-hidden="true" />
              <div className="ethos-top">
                <p className="eyebrow">02 / THE FLO FORGE STANDARD</p>
                <ForgeAsterisk />
              </div>
              <h2 id="ethos-title">
                AI is the engine,
                <br />
                People are the driver.
              </h2>
              <div className="ethos-bottom">
                <p>
                  AI changes what a small, focused team can build. Human
                  judgment gives it direction. We bring both to the work, from
                  the first question to the finished product.
                </p>
                <div className="ethos-stamp" aria-hidden="true">
                  <span>INTELLIGENTLY ENGINEERED</span>
                  <span>
                    FF<span>✳</span>
                  </span>
                  <span>PURPOSEFULLY HUMAN</span>
                </div>
              </div>
            </Reveal>
            <div className="principles">
              <Reveal>
                <span className="principle-marker">[ A ]</span>
                <h3>Useful beats impressive.</h3>
                <p>
                  The best technology makes someone’s day better. That’s the
                  measure that matters.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <span className="principle-marker">[ B ]</span>
                <h3>Speed with substance.</h3>
                <p>
                  Move with ambition. Build with care. Quality is part of the
                  process, from day one.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <span className="principle-marker">[ C ]</span>
                <h3>Own the whole journey.</h3>
                <p>
                  From a spark of an idea to the details of daily use. Take
                  responsibility for all of it.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          className="about section frame"
          id="about"
          aria-labelledby="about-title"
        >
          <Reveal className="section-heading">
            <p className="eyebrow section-index">
              <span>03 /</span> THE COMPANY
            </p>
            <div>
              <h2 id="about-title">
                One forge.
                <br />
                Many possibilities.
              </h2>
            </div>
          </Reveal>
          <div className="about-details">
            <Reveal className="about-symbol">
              <Image
                src="/brand/floforge-logo.svg"
                width={520}
                height={470}
                alt="Flo Forge orange and steel brand emblem"
              />
              <span className="eyebrow">A HOME FOR WHAT COMES NEXT.</span>
            </Reveal>
            <Reveal className="about-copy">
              <p className="large-copy">
                Flo Forge is an independent software company and the home for a
                growing vision of AI-first SaaS.
              </p>
              <p>
                Founded by Erik Florida, it’s a place to turn curiosity into
                useful products. Different problems. Different industries. One
                shared commitment to thoughtful engineering and software that
                pulls its weight.
              </p>
              <p>
                We’re building for a future where powerful tools feel simple,
                and more people can do work that matters.
              </p>
              <a className="text-link" href="mailto:erik@floforge.tech">
                Get in touch with Erik <ArrowIcon diagonal />
              </a>
            </Reveal>
          </div>
        </section>

        <section
          className="connect-section"
          id="connect"
          aria-labelledby="connect-title"
        >
          <Reveal className="connect frame">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> EVERY GOOD THING STARTS WITH A
                SPARK.
              </p>
              <h2 id="connect-title">
                Let’s see what
                <br />
                we can <span>forge.</span>
              </h2>
            </div>
            <div className="connect-aside">
              <p>
                An interesting problem?
                <br />A shared obsession with better software?
                <br />
                There’s a conversation worth having.
              </p>
              <a
                className="button button-ember"
                href="mailto:erik@floforge.tech"
              >
                erik@floforge.tech <ArrowIcon diagonal />
              </a>
            </div>
            <ForgeAsterisk />
          </Reveal>
        </section>
      </main>

      <footer className="site-footer frame">
        <div className="footer-top">
          <Brand footer />
          <p>Human purpose. Intelligent engineering.</p>
          <a className="back-top" href="#top">
            Back to top ↑
          </a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Flo Forge</p>
          <span>INDEPENDENT BY DESIGN.</span>
          <MotionToggle />
        </div>
      </footer>
    </>
  );
}
