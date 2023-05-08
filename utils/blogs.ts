import { IPost } from './interfaces';

export function getAllBlogs(): IPost[] {
  return getPosts();
}

export function getSingleBlog(id: number): IPost {
  const posts = getPosts();

  return posts.find((post: IPost) => post.id === id) || {};
}

function getPosts() {
  if (window?.localStorage) {
    const posts = JSON.parse(window.localStorage?.getItem('cms_blog_posts') || '{}').posts || [];
    return posts;
  }

  return [];

}
