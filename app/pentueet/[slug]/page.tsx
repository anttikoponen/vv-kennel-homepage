import { getPostContent } from "@/app/page"
import Markdown from "markdown-to-jsx"

const PentueetPost = (props: any) => {
  const slug = props.params.slug
  const content = getPostContent(`posts/pentueet/${slug}`)
  return (
    <div>
      <h1>Pentueet blog page: {slug} </h1>
      <Markdown>{content}</Markdown>
    </div>
  )
}
export default PentueetPost
