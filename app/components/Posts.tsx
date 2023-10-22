import React from "react"
import Card from "./Card"
import { posts } from "../data" // Cards data

const Posts: React.FC = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 max-w-4xl gap-4'>
      {posts.map((post) => (
        <Card
          id={post.id}
          imageSrc={post.imageSrc}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  )
}

export default Posts
