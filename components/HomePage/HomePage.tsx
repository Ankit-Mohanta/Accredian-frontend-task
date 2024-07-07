import React from 'react'
import HeroComponent from '../HeroSection/page'
import SecondComponent from '../SecondComponent/page'
import ReferralBenefit from '../ReferralBenefit/page'
import FAQ from '../FAQ/page'
import LastComponent from '../LastComponent/page'

const HomePage = () => {
  return (
    <div className="w-full mx-auto">

      <HeroComponent />

      <SecondComponent />

      <ReferralBenefit />

      <FAQ />

      <LastComponent />

    </div>
  )
}

export default HomePage