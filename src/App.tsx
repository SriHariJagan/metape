import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Footer } from './components/footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Solutions from './pages/Solutions'
import Career from './pages/Career'
import Contact from './pages/Contact'
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy'
import { TermsOfService } from './pages/legal/TermsOfService'
import { Cancellation } from './pages/legal/Cancellation'
import { Security } from './pages/legal/Security'
import { Compliance } from './pages/legal/Compliance'
import { Sitemap } from './pages/legal/Sitemap'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal/cancellation" element={<Cancellation />} />
          <Route path="/legal/cancellation-and-refund" element={<Cancellation />} />
          <Route path="/legal/refund" element={<Cancellation />} />
          <Route path="/legal/security" element={<Security />} />
          <Route path="/legal/compliance" element={<Compliance />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
