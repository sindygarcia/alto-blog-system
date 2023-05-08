import Post from "@/components/post";
import { getAllBlogs } from "@/utils/blogs";
import { IPost } from "@/utils/interfaces";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BlogListPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const posts: IPost[] = getAllBlogs();
    setPosts(posts);
  }, []);

  const onAddPost = () => {
    router.push("/blog/create");
  };

  return (
    <div className="container blog-list-container">
      <div className="add-btn-wrapper">
        <Button onClick={onAddPost} variant="contained">
          Add Post
        </Button>
      </div>
      <div className="blog-list-wrapper">
        {posts &&
          posts.map((post) => (
            //@ts-ignore
            <Post key={post.id} id={post.id} name={post.name}></Post>
          ))}
      </div>
    </div>
  );
}
