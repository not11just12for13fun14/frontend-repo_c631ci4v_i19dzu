import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <HowItWorks />
        <Benefits />
        <CTA />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} AQUAWISE. All rights reserved.</p>
          <div className="text-sm text-slate-500">Made for sustainable aquaculture.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
