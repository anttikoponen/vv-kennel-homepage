const PostPage = (props: any) => {
  const slug = props.params.slug
  return (
    <div>
      <h1>This is a post {slug} </h1>
    </div>
  )
}
export default PostPage
