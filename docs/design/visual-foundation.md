# M001 Visual Foundation

**Status:** Foundation approved in M001 review — 2026-09-10

**Still deferred:** final logo, imagery, and broader brand identity

## Character

The approved direction is technical, editorial, calm, contemporary, and high-signal. Deep graphite and mineral green are paired with a restrained editorial serif. Preserve the typography and overall design in subsequent content work.

## Typography

- **Manrope Variable:** navigation, interface, supporting copy, and technical headings.
- **Newsreader Variable:** display headings and long-form editorial prose.
- **System monospace:** labels, state, sequence numbers, and diagrams only.

Both primary families are bundled with the application through Fontsource; the browser makes no third-party font request.

## Token policy

Semantic tokens live in `apps/site/src/app/globals.css`. Components use roles such as canvas, surface, ink, muted, line, accent, and warm—not literal palette names. Spacing and typography use fluid CSS where it materially improves reading across screen sizes.

## Interaction

- Motion is limited to short hover, focus, and skip-link transitions.
- The upper green glow stays fixed relative to the viewport while content scrolls. M001 review increased its opacity from 24% to 30%. A fixed CSS pseudo-element behind the content implements this without scroll listeners or animation.
- Every interactive element has a visible focus state.
- `prefers-reduced-motion` removes nonessential transition duration.
- Navigation remains server-rendered and visible at mobile widths; no menu JavaScript is needed for the current two destinations.

## Diagram convention

System flows are semantic figures containing a caption and ordered list. Visual connectors are CSS decoration, while a text equivalent remains in the document. Color is not the only carrier of sequence or meaning.

## Accepted review

Erik approved the design and typography, with a small increase in the green glow and fixed positioning during scroll. The homepage needs more emphasis on experience and professional perspective; that content change belongs to M002 and should build on this visual foundation.
