export const DEFAULT_REVIEW_MODEL = "gpt-5.6-terra";

const pricePerMillionTokens = {
  input: 2,
  cachedInput: 0.2,
  output: 12,
} as const;

export function estimateTokenCost({
  model,
  inputTokens,
  cachedInputTokens,
  outputTokens,
}: {
  model: string;
  inputTokens: number;
  cachedInputTokens: number;
  outputTokens: number;
}) {
  if (model !== DEFAULT_REVIEW_MODEL) {
    return null;
  }

  const uncachedInputTokens = Math.max(0, inputTokens - cachedInputTokens);

  return (
    (uncachedInputTokens * pricePerMillionTokens.input +
      cachedInputTokens * pricePerMillionTokens.cachedInput +
      outputTokens * pricePerMillionTokens.output) /
    1_000_000
  );
}

export function getPublicProviderError(status: number | undefined) {
  if (status === 429) {
    return {
      code: "rate-limited" as const,
      message:
        "The review service is busy or has reached its usage limit. Try again shortly.",
      status: 429,
    };
  }

  if (status === 401 || status === 403) {
    return {
      code: "configuration-required" as const,
      message: "The server API credential could not authorize this review.",
      status: 503,
    };
  }

  return {
    code: "provider-failure" as const,
    message:
      "The live review could not be completed. The submitted diff was not stored by this app.",
    status: 502,
  };
}
