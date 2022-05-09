export type Post = { name: string; blog: string; image: string };

globalThis.post = globalThis.post ?? [];

export function getPost(): Post[] {
  return globalThis.post;
}

export function addPost(post: Post) {
  globalThis.post.push(post);
}
