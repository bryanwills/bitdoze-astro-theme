import { describe, expect, it } from "vitest";
import { entryIdToPath, getPostSlug, slugify } from "../src/utils/slug";

describe("slug utilities", () => {
  it("preserves nested content paths", () => {
    expect(entryIdToPath({ id: "guides/Install Guide.md" })).toBe(
      "guides/install-guide",
    );
  });

  it("uses an explicit slug without consulting canonical metadata", () => {
    expect(
      getPostSlug({
        id: "original.md",
        data: { slug: "custom/path" },
      }),
    ).toBe("custom/path");
  });

  it("normalizes taxonomy labels", () => {
    expect(slugify("Design & Développement")).toBe(
      "design-and-developpement",
    );
  });
});
