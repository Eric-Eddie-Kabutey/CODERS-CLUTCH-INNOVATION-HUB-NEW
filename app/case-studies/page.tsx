import CaseStudy from '@/components/CaseStudies/CaseStudy'
import CaseStudyHero from '@/components/CaseStudies/CaseStudyHero'
import NewFooter from '@/components/new-landing-page/NewFooter'
import React from 'react'

function page() {
  return (
    <div>
        <CaseStudyHero />
        <CaseStudy />
        <NewFooter />
        
    </div>
  )
}

export default page