import React from 'react'

function Footer() {
  return (
    <footer className="flex justify-between items-center p-10 md:p-20 md:px-32">
        <img src="/PATIENTY.png" className='h-4 md:h-8' alt="" />
        <div className="flex justify-center items-center gap-3 md:gap-5">
        <img src="/twitter.svg" className='h-4 md:h-8' alt="" />
        <img src="/facebook.svg" className='h-4 md:h-8' alt="" />
        <img src="/instagram.svg" className='h-4 md:h-8' alt="" />

        </div>
        <p className="font-semibold text-xs md:text-lg">Copyright 2021 patienty.com</p>
    </footer>
  )
}

export default Footer
