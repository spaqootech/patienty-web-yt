import React from 'react'

function RightImageSection() {
  return (
    <section className='p-10 md:px-30 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20'>
        <div className="flex flex-col gap-5 w">
            <p className="text-xl font-bold">Add Appointment </p>
            <div className="text-4xl font-bold">Add your patient’s
            <br />appointment</div>
            <div className="text-gray-500 text-xl">Add daily appointment of your patients
            <br className='hidden md:block' />& can mention the disease.</div>
        </div>
        <img src="/mob-2.png" className='h-[600px]' alt="" />
    </section>
  )
}

export default RightImageSection
