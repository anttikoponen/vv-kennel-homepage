import React from "react"

const Post1: React.FC = () => {
  return (
    <div className='p-4'>
      <h1 className='text-3xl font-semibold mb-4'>My Blog Post Title</h1>
      <p className='text-gray-500 text-sm mb-4'>Published on July 25, 2023</p>
      <img
        src='/puppys.jpeg' // Replace with your actual image path
        alt='Blog Post Image'
        className=' max-w-screen-lg max-h-64'
      />
      <p className='text-gray-700 leading-7'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        risus a convallis cursus, felis libero fermentum nunc, ac tincidunt mi
        metus nec velit. Proin a massa eu justo venenatis egestas. Sed feugiat
        non ligula ac aliquam.
      </p>
      <p className='text-gray-700 leading-7'>
        Vivamus tincidunt mi et dolor suscipit, ac luctus justo consectetur.
        Nullam quis nunc in ipsum aliquam bibendum eu a turpis. Nullam ut eros
        sed lectus lacinia suscipit. Cras vel lorem et arcu rhoncus cursus.
      </p>
      <p className='text-gray-700 leading-7'>
        In hac habitasse platea dictumst. Integer sit amet justo ut sapien
        interdum efficitur. Sed id tellus odio. Curabitur fringilla tellus vel
        dapibus vehicula. Vivamus eu ex eget urna dapibus efficitur a non dolor.
        Nunc vel sodales odio.
      </p>
    </div>
  )
}

export default Post1
