import Image from "next/image"
const Post1 = () => {
  return (
    <div>
      <h1>Post 1</h1>
      <Image src={"../../public/puppys.jpeg"} alt='a-puppys'></Image>
      <p>Full content of Post 1 goes here.</p>
    </div>
  )
}

export default Post1
