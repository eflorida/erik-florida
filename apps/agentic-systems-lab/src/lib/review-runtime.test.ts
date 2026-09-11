import { describe, expect, it } from "vitest";

import {
  DEFAULT_REVIEW_MODEL,
  estimateTokenCost,
  getPublicProviderError,
} from "./review-runtime";

describe("review runtime", () => {
  it("estimates uncached, cached, and output token cost", () => {
    expect(
      estimateTokenCost({
        model: DEFAULT_REVIEW_MODEL,
        inputTokens: 1_000_000,
        cachedInputTokens: 100_000,
        outputTokens: 100_000,
      }),
    ).toBeCloseTo(3.02);
  });

  it("does not present Terra pricing as an estimate for an override", () => {
    expect(
      estimateTokenCost({
        model: "another-model",
        inputTokens: 100,
        cachedInputTokens: 0,
        outputTokens: 100,
      }),
    ).toBeNull();
  });

  it("maps provider statuses without exposing provider detail", () => {
    expect(getPublicProviderError(429)).toMatchObject({
      code: "rate-limited",
      status: 429,
    });
    expect(getPublicProviderError(401)).toMatchObject({
      code: "configuration-required",
      status: 503,
    });
    expect(getPublicProviderError(500)).toMatchObject({
      code: "provider-failure",
      status: 502,
    });
  });
});
