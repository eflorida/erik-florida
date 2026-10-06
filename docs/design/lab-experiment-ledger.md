# Lab visual direction — Experiment Ledger

**Selected by Erik:** 2026-10-05

**Status:** Visual implementation checkpoint; human visual review pending

The Lab should feel like a separate working instrument when someone leaves the professional website. Erik selected the light, late-1990s science-notebook direction shown in the [concept image](./lab-experiment-ledger-concept.png): warm graph paper, navy structure, blue primary actions, orange specimen labels, boxed results, and a small handwritten note with an underline.

The concept image is an art-direction reference, **not a feature or evidence specification**. Its search, settings, lint, test execution, merge controls, generated findings, and timestamps are illustrative. The application must show only its actual reference scenario or bounded review behavior, actual run events, and measured usage. Neither its visual style nor the image upgrades any LAB-M001, LAB-M002, or LAB-M003 evidence claim.

## Working system

- Warm paper canvas and a faint blue graph grid establish the Lab environment. White or lightly tinted rectangular surfaces hold code, reports, and evidence. The grid remains quiet behind reading content.
- Navy carries major headings and body contrast. Blue marks navigation, primary actions, links, and active work. Orange marks section labels and highlights; warning, success, and error retain distinct semantic colors.
- Barlow Condensed supplies large, emphatic display headings; IBM Plex Sans carries interface copy; monospace labels code, state, and provenance. Caveat appears only as a short handwritten annotation, with an orange CSS underline. Essential instructions and evidence remain in regular type.
- Numbered labels, strong card borders, compact status marks, and visible source-to-result adjacency carry the notebook/instrument feeling. Layout and content remain responsive and accessible.
- The design applies to `/workspace`, `/`, and `/reference` without importing the professional site's visual primitives or broadening Lab runtime authority.

## Review focus

Inspect desktop and mobile hierarchy, reading comfort, contrast, the distinction from the site, and whether the handwritten accent feels intentional rather than decorative clutter. Keep the primary run surface visible early on `/workspace`. New controls suggested by the mockup need their own product and evidence review before implementation.
