import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white text-gray-900">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <CTA />
        <footer className="py-10 border-t border-gray-100 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BlueSmile Dental. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
