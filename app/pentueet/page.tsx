import { getPostMetadata } from "@/app/page"
import Link from "next/link"

const PentueetPage = (props: any) => {
  const postMetadata = getPostMetadata("posts/pentueet/")
  const postPreviews = postMetadata.map((slug) => (
    <div key={slug}>
      <Link href={`/pentueet/${slug}`}>
        <h2>Post: {slug}</h2>
      </Link>
    </div>
  ))
  return (
    <div className='flex flex-col items-center p-4'>
      <h1>This is a kindle page</h1>
      {postPreviews}
    </div>
  )
}
export default PentueetPage
