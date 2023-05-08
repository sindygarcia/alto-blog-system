import { useRouter } from "next/router";

import PostForm from "@/components/postForm";
import { getSingleBlog } from "../../../utils/blogs";
import { IPost } from "@/utils/interfaces";
import { useEffect, useState } from "react";

export const getStaticPaths = async () => {
  const paths = [].map((post: IPost) => ({
    params: { id: post.id?.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export function getStaticProps({ params }: any) {
  return {
    props: { id: Number(params.id) },
  };
}

export default function EditPost({ id }: { id: number }) {
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    const post: IPost = getSingleBlog(Number(id));
    setPost(post);
  }, [id]);

  return (
    <div className="container">
      <h1>Edit Post</h1>
      <PostForm post={post}></PostForm>
    </div>
  );
}
