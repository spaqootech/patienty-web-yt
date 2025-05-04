import React from 'react'

function DownloadSection() {
  return (
    <section className="p-20 md:p-32 bg-[#FF6BA1] text-white flex flex-col gap-5 md:gap-10 justify-center items-center text-center py-20">
        <h1 className="text-2xl md:text-4xl font-bold">Download the app now.</h1>
        <p className="text-xl">Available on your favorite store. Start your new experience now</p>
        <div className="flex items-center gap-10 justify-center">
            <button className=" p-3 md:p-5 bg-[#8243FF] md:px-10 rounded-xl">Playstore</button>
            <button className=" p-3 md:p-4 border md:px-10 rounded-xl">App store</button>
        </div>
    </section>
  )
}

export default DownloadSection
