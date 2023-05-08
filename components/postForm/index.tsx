import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IPost } from "@/utils/interfaces";
import { getAllBlogs } from "@/utils/blogs";

export default function PostForm({ post = null }: { post: IPost | null }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const onSavePost = () => {
    const posts = getAllBlogs();
    if (post) {
      const currentPost = posts.find((p) => p.id === post.id);
      if (currentPost) {
        currentPost.name = name;
        currentPost.content = content;
      }
    } else {
      posts.push({
        id: posts.length + 1,
        name,
        content,
      });
    }
    localStorage.setItem("cms_blog_posts", JSON.stringify({ posts }));
    router.push("/blog");
  };

  const onCancel = () => {
    router.back();
  };

  useEffect(() => {
    console.log(post);
    if (post) {
      setName(post.name);
      setContent(post.content);
    }
  }, [post]);

  return (
    <Box component="form" className="post-form">
      <div>
        <TextField
          label="Name"
          variant="standard"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
          sx={{ width: "50%" }}
        />
      </div>
      <div>
        <TextField
          label="Content"
          multiline
          rows={4}
          value={content}
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setContent(event.target.value);
          }}
          sx={{ width: "50%" }}
        />
      </div>
      <div style={{ width: "50%", textAlign: "end" }}>
        <Button
          variant="outlined"
          onClick={onCancel}
          disabled={!name && !content}
          sx={{ marginRight: "8px" }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={onSavePost}
          disabled={!name && !content}
        >
          Save
        </Button>
      </div>
    </Box>
  );
}
