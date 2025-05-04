import React from 'react'

function HeroSection() {
  return (
    <section className="bg-gray-500 h-[75vh] flex flex-col justify-center items-center text-center text-white bg-[url('/header-bg.png')] bg-cover bg-center gap-2 md:gap-5">
        <p className="md:text-2xl font-semibold">Patient Management app</p>
        <h1 className="text-4xl md:text-6xl font-bold md:leading-17">Manage your Patients, <br />with Patienty</h1>
        <p className="md:text-2xl">Download the app now on </p>
        <div className="flex gap-2 md:gap-10 justify-center items-center">
          <button className=" p-3 rounded-full md:text-2xl font-semibold bg-[#8243FF] px-10">Playstore</button>
          <button className="p-2.5 rounded-full md:text-2xl font-semibold  px-8 border">App store</button>
        </div>
    </section>
  )
}

export default HeroSection
