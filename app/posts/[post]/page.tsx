const PostPage = (props: any) => {
  const post = props.params.slug

  return (
    <div>
      <h1>This is a new post {post} </h1>
      <p></p>
    </div>
  )
}
export default PostPage
