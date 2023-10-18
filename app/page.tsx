import Image from "next/image"
import fs from "fs"
import Link from "next/link"

export const getPostMetadata = (path: string) => {
  const folder = path
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith(".md"))
  const slugs = markdownPosts.map((file) => file.replace(".md", ""))
  return slugs
}
export const getPostContent = (path: string) => {
  const file = `${path}.md`
  const content = fs.readFileSync(file, "utf-8")
  return content
}

export default function Home() {
  const postMetadata = getPostMetadata("posts/")
  const postPreviews = postMetadata.map((slug) => (
    <div key={slug}>
      <Link href={`/posts/${slug}`}>
        <h2>Post: {slug}</h2>
      </Link>
    </div>
  ))

  return (
    <div className='flex flex-col flex-wrap items-center p-4'>
      <h2>Main page</h2>
      {postPreviews}
    </div>

    /* <div className="min-h-screen relative">
      <Image
        src="/puppys.jpeg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60">
        <div className="min-h-screen flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-extrabold mb-4">Vuorivillen Kennel</h1>
          <p className="text-lg">Coming soon</p>
        </div>
      </div>
    </div> */
  )
}
