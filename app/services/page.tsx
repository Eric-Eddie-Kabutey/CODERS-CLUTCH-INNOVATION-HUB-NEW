import NewFooter from '@/components/new-landing-page/NewFooter'
import Organization from '@/components/new-landing-page/organization'
import ServicesHero from '@/components/services/hero'
import ProductDesign from '@/components/services/ProductDesign'
import ProductDevelopment from '@/components/services/ProductDevelopment'
import ProductLab from '@/components/services/ProductLab'
import ProductStrategy from '@/components/services/ProductStrategy'
import TestimonialsServices from '@/components/services/TestimonialsServices'
import React from 'react'

function page() {
  return (
    <div>
    <ServicesHero />
    <ProductLab />
    <ProductStrategy />
    <ProductDesign />
      <ProductDevelopment />
      <Organization />
    <TestimonialsServices />
    <NewFooter />
    </div>
    
  )
}

export default page