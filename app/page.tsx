import Image from "next/image"
import fs from "fs"
import Link from "next/link"

const getPostMetadata = () => {
  const folder = "posts/"
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith(".md"))
  const slugs = markdownPosts.map((file) => file.replace(".md", ""))
  return slugs
}

export default function Home() {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((slug) => (
    <div>
      <Link href={`/posts/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  ))

  return (
    <div>
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
