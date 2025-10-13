import FoundersInsight from '@/components/insights/FoundersInsight'
import InsightsGrid from '@/components/insights/InsightsGrid'
import InsightsHero from '@/components/insights/InsightsHero'
import NewFooter from '@/components/new-landing-page/NewFooter'
import React from 'react'

function page() {
  return (
    <div>
        <InsightsHero />
        <FoundersInsight />
        <InsightsGrid />
        <NewFooter />
    </div>
  )
}

export default page