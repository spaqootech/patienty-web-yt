import DownloadSection from '@/components/DownloadSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import LeftImageSection from '@/components/LeftImageSection'
import RightIMageSection from '@/components/RightImageSection'
import TwoMobilesSection from '@/components/TwoMobilesSection'
import React from 'react'

function page() {
  return (
    <main>
      <Header/>
      <HeroSection/>
      <TwoMobilesSection/>
      <LeftImageSection 
      image='/mob-1.png'
      title='Create an Account '
      description={`Create/login to an existing account to get started`}
      paragraph='An account is created with your email verification'
      />
      <RightIMageSection/>
      <LeftImageSection 
      image='/mob-3.png'
      title='Add Appointment'
      description={`Add your patient’s appointment`}
      paragraph={`Add daily appointment of your patients & can mention the disease.`}
      />
      <DownloadSection/>
      <Footer/>
    </main>
  )
}

export default page
