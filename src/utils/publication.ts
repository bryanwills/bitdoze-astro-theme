export interface PublishablePost {
  data: {
    draft: boolean;
    date: Date;
  };
}

export function isPublishedPost(
  post: PublishablePost,
  now = new Date(),
): boolean {
  return !post.data.draft && post.data.date <= now;
}
