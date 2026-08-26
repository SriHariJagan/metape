import Hero from '../components/home/Hero'
import TrustedBy from '../components/home/TrustedBy'
import Features from '../components/home/Features'
import Stats from '../components/home/Stats'
import SolutionsOverview from '../components/home/SolutionsOverview'
import Testimonials from '../components/home/Testimonials'
import { EcosystemSection } from '@/components/sections/home/EcosystemSection'
import CTA from '../components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <Stats />
      <SolutionsOverview />
      <Testimonials />
      <EcosystemSection />
      <CTA />
    </>
  )
}
