import Post1 from "@/posts/post1"

const PostPage = (props: any) => {
  const post = props.params.slug
  return (
    <div>
      <h1>This is a new post from pages/posts {post} </h1>
      <Post1 />
      <p></p>
    </div>
  )
}

export default PostPage
