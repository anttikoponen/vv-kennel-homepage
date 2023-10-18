// components/Card.tsx
import Link from "next/link"

interface CardProps {
  id: string
  imageSrc: string
  title: string
  description: string
}

const Card = ({ id, imageSrc, title, description }: CardProps) => {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
      <Link href={`/posts/${id}`}>
        <img src={imageSrc} alt={title} className='w-full h-48 object-cover' />
        <div className='p-4'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>{title}</h2>
          <p className='text-gray-600'>{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card
