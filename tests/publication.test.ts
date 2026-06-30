import { describe, expect, it } from "vitest";
import { isPublishedPost } from "../src/utils/publication";

const now = new Date("2026-01-01T00:00:00Z");

describe("publication policy", () => {
  it("publishes non-draft posts whose date has passed", () => {
    expect(
      isPublishedPost(
        { data: { draft: false, date: new Date("2025-01-01T00:00:00Z") } },
        now,
      ),
    ).toBe(true);
  });

  it("excludes drafts and future-dated posts", () => {
    expect(
      isPublishedPost(
        { data: { draft: true, date: new Date("2025-01-01T00:00:00Z") } },
        now,
      ),
    ).toBe(false);
    expect(
      isPublishedPost(
        { data: { draft: false, date: new Date("2027-01-01T00:00:00Z") } },
        now,
      ),
    ).toBe(false);
  });
});
