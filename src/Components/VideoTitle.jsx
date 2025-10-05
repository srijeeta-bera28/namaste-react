import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-8 w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-sm text-white-500 w-1/4'>{overview}</p>
        <div className='flex gap-2'>
            <button className='bg-white text-black py-2 px-12 text-md hover:bg-white/80 cursor-pointer rounded-md'>▶️ Play </button>
            <button className='bg-gray-700 text-white py-2 px-12 text-md cursor-pointer rounded-md'> ℹ️ More info </button>
        </div>
    </div>
  )
}

export default VideoTitle