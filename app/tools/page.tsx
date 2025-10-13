import NewFooter from '@/components/new-landing-page/NewFooter'
import Tools from '@/components/ToolsHero/tools'
import ToolsHero from '@/components/ToolsHero/ToolsHero'
import React from 'react'

function page() {
  return (
    <div>
        <ToolsHero />
        <Tools />
        <NewFooter />
    </div>
  )
}

export default page