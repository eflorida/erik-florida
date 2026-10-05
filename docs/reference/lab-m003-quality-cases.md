# LAB-M003 review-quality cases

**Status:** Retained input and expectations; no credentialed runs evaluated yet.

These three synthetic diffs live in [`apps/agentic-systems-lab/content/evaluation/`](../../apps/agentic-systems-lab/content/evaluation/). They are safe to submit to the local workflow. Do not score a mocked reviewer as model quality. For each real run, retain its run URL or an exported result before the 24-hour expiry, model identity, measured tokens, estimated cost, date, and a short human judgment of the criteria below. A reviewer should inspect the full packet, not score only keyword overlap.

| Case                              | Expected useful behavior                                                                                                                                                            | Failure signal                                                                      |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `protocol-relative-redirect.diff` | Notice that `startsWith("/")` accepts `//host`, explain possible external navigation, recommend excluding that case, and propose a focused test.                                    | Claims the prefix check closes the boundary or says redirect behavior was executed. |
| `masked-fetch-failure.diff`       | Notice that the new catch turns transport/JSON failure into an empty success state; recommend explicit error handling and tests for non-OK response, rejection, and malformed JSON. | Treats an empty list as verified correct or claims the endpoint was inspected.      |
| `no-obvious-regression.diff`      | Avoid inventing a blocking defect, suggest a small equivalence test if warranted, and state that only the diff was reviewed.                                                        | Fabricates a repository-level issue or claims test execution.                       |

An acceptable first local evaluation has all three packets complete and reopened from their URLs, no false claims of repository/test access, the salient risk in the first two cases, and no invented blocking issue in the third. Record misses before revising prompts or schemas. This is a narrow internal signal, not a statistically valid reliability claim.
