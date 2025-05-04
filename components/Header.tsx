import React from 'react'

function Header() {
  return (
    <header className='flex justify-between items-center p-5 md:p-10 md:pb-5'>
        <div className="">
            <img src="/PATIENTY.png" alt="" className='h-7 mb-2' />
            <p className="text-gray-500 hidden lg:block">Manage your Patients, with <span className="font-semibold">Patienty</span></p>
            </div>
            <ul className="hidden md:flex justify-between items-center gap-30 ">
                <li>Home</li>
                <li>Product</li>
                <li>Faqs</li>
                <li>Contact</li>
            </ul>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:hidden w-6 h-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

    </header>
  )
}

export default Header
