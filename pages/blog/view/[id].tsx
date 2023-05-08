import { useRouter } from "next/router";
import { IPost } from "@/utils/interfaces";
import { getAllBlogs, getSingleBlog } from "../../../utils/blogs";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export const getStaticPaths = async () => {
  const paths = [].map((post: IPost) => ({
    params: { id: post.id },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export function getStaticProps({ params }: any) {
  return {
    props: { id: Number(params.id) },
  };
}

export default function Blog({ id }: { id: number }) {
  const router = useRouter();
  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    const post: IPost = getSingleBlog(Number(id));
    setPost(post);
  }, [id]);

  const onEditPost = () => {
    router.push(`/blog/edit/${id}`);
  };

  return (
    <div className="container">
      <div style={{ width: "100%", textAlign: "end" }}>
        <Button variant="contained" onClick={onEditPost}>
          Edit
        </Button>
      </div>
      <h1 style={{ marginBottom: "16px" }}>{post?.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: post?.content }} />
    </div>
  );
}
