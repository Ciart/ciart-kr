import type { CollectionEntry } from "astro:content";

export const getPostDateText = (post: CollectionEntry<'blog'>) => {
  const created = post.data.created;
  return `${created.getFullYear()}년 ${created.getMonth() + 1}월 ${created.getDate()}일`;
};
