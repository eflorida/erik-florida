import { describe, expect, it } from "vitest";

import source from "../../content/career.json";

import { careerRoleSchema, careerSchema } from "./career-schema";
import { getCareer } from "./career";

const role = {
  id: "example-role",
  title: "Engineer",
  organization: "Example",
  start: "2021-10",
  end: "2025-01",
  summary: "A career role fixture.",
  highlights: [],
};

describe("career content boundary", () => {
  it("loads the real authored narrative and resolves the current role", () => {
    const career = getCareer();
    expect(career.currentRole.id).toBe(career.currentRoleId);
    expect(career.currentRole.end).toBeNull();
    expect(career.journey).toEqual(source.journey);
  });

  it("rejects invalid months and reversed dates", () => {
    expect(
      careerRoleSchema.safeParse({ ...role, start: "2021-13" }).success,
    ).toBe(false);
    expect(
      careerRoleSchema.safeParse({ ...role, end: "2020-01" }).success,
    ).toBe(false);
    expect(careerRoleSchema.safeParse({ ...role, end: null }).success).toBe(
      true,
    );
  });

  it("rejects duplicate anchors", () => {
    expect(() =>
      careerSchema.parse({ ...source, work: [...source.work, ...source.work] }),
    ).toThrow("Career anchors must be unique");
    expect(() =>
      careerSchema.parse({
        ...source,
        earlierRoles: [{ ...role, id: "procurement-extension-title" }],
      }),
    ).toThrow("Career anchors must be unique");
  });

  it("requires narrative sections with one or two nonempty paragraphs", () => {
    expect(careerSchema.safeParse({ ...source, journey: [] }).success).toBe(
      false,
    );
    for (const paragraphs of [[], [" "], ["One", "Two", "Three"]]) {
      expect(
        careerSchema.safeParse({
          ...source,
          perspective: { ...source.perspective, paragraphs },
        }).success,
      ).toBe(false);
      expect(
        careerSchema.safeParse({
          ...source,
          journey: source.journey.map((section) => ({
            ...section,
            paragraphs,
          })),
        }).success,
      ).toBe(false);
    }
  });

  it("rejects duplicate narrative IDs and reserved homepage heading IDs", () => {
    expect(() =>
      careerSchema.parse({
        ...source,
        journey: [...source.journey, ...source.journey],
      }),
    ).toThrow("Homepage narrative headings must have unique IDs");
    for (const id of ["page", "perspective", "featured-note"]) {
      expect(() =>
        careerSchema.parse({
          ...source,
          journey: [{ ...source.journey[0], id }],
        }),
      ).toThrow("Homepage narrative headings must have unique IDs");
    }
  });

  it("rejects a past or missing current role", () => {
    for (const currentRoleId of ["raiven-technical-lead", "missing-role"]) {
      expect(() => careerSchema.parse({ ...source, currentRoleId })).toThrow(
        "current role must reference an open-ended role",
      );
    }
  });

  it("rejects unmodeled source notes and non-HTTPS evidence links", () => {
    expect(
      careerSchema.safeParse({
        ...source,
        privateNotes: "Source-only material",
      }).success,
    ).toBe(false);
    expect(
      careerSchema.safeParse({
        ...source,
        patent: { ...source.patent, href: "javascript:alert(1)" },
      }).success,
    ).toBe(false);
  });
});
