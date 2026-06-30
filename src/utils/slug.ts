export function slugify(value: string): string {
  return value
    .toString()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type ContentEntryLike = {
  id?: string;
  slug?: string;
  data: {
    slug?: string;
  };
};

export function entryIdToSlug(entry: { id?: string; slug?: string }): string {
  const id = entry.slug || entry.id || "";
  const lastSegment = id.split("/").filter(Boolean).pop() || id;
  return lastSegment.replace(/\.(md|mdx)$/i, "");
}

export function entryIdToPath(entry: { id?: string; slug?: string }): string {
  const id = entry.slug || entry.id || "";
  return id
    .replace(/\.(md|mdx)$/i, "")
    .split("/")
    .filter(Boolean)
    .map(slugify)
    .join("/");
}

export function getPostSlug(post: ContentEntryLike): string {
  return post.data.slug
    ? entryIdToPath({ id: post.data.slug })
    : entryIdToPath(post);
}

export function getPostUrl(post: ContentEntryLike): string {
  return `/${getPostSlug(post)}/`;
}
