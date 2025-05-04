import React from 'react'

function TwoMobilesSection() {
  return (
<>
<section className="flex justify-center items-center relative p-10 h-[300px] md:h-[500px]">
        <img src="/two-mobiles.png" className='h-[500px] md:h-[700px] absolute top-[-200]' alt="" />

    </section>
    <div className="flex justify-center items-center mb-8 mt-[-15]">
    <div className="border border-gray-200  w-[60%] "></div>
    </div>
        <h1 className="font-bold text-3xl md:text-5xl text-center">How the app works</h1>
</>
  )
}

export default TwoMobilesSection
