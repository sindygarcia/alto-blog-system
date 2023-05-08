import PostForm from "@/components/postForm";

export default function CreatePost() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostForm post={null}></PostForm>
    </div>
  );
}
