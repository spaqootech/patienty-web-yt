import React from 'react'

function LeftImageSection({image , title ,description , paragraph}:any) {
  return (
    <section className='p-10 md:px-30 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20'>
        <img src={image} className='h-[600px]' alt="" />
        <div className="flex flex-col gap-5 md:w-120">
            <p className="text-xl font-bold">{title}</p>
            <div className="text-4xl font-bold">{description}</div>
            <div className="text-gray-500 text-xl">{paragraph}</div>
        </div>
    </section>
  )
}

export default LeftImageSection
