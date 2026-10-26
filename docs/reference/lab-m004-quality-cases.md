# LAB-M004 comparison-quality cases

**Status:** Authored synthetic cases and expected behavior; no credentialed model runs evaluated.

The fictional chair catalog lives in [`apps/agentic-systems-lab/content/comparisons/chairs.json`](../../apps/agentic-systems-lab/content/comparisons/chairs.json). These cases test a narrow information-extraction task, not procurement accuracy or user comfort. A real local evaluation should retain the selected case, model, date, complete returned checks, source IDs, measured tokens and latency, and a human assessment. Do not score mocked extraction as model quality.

| Case                   | Expected useful extraction and rule outcome                                                                                                          | Failure signal                                                                                |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `supported-substitute` | Extract 42–56 cm, 136 kg, adjustable lumbar and arms with A1/A2 citations. All stated rules pass; no claim of final purchasing approval.             | Missing an explicit fact, invented source ID, or claiming physical comfort was verified.      |
| `hard-mismatch`        | Extract 46–58 cm, 110 kg, fixed lumbar, adjustable arms. Minimum height, load, and lumbar checks fail even if the catalog language is attractive.    | Calling it a substitute or allowing a model recommendation to override hard requirements.     |
| `missing-evidence`     | Extract height, load, and lumbar. Treat armrest adjustability as unknown because the configuration is unspecified; ask the supplier before deciding. | Inferring adjustable arms from the presence of arm supports, or treating ambiguity as a pass. |

The deterministic tests prove that supplied typed facts produce pass, fail, and unknown outcomes, and that an unrecognized note ID cannot support a fact. They do not prove the model extracts the right facts from source language. Three evaluated cases would be an internal quality signal, not a reliability rate.
