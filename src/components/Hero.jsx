import Spline from '@splinetool/react-spline'
import { CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 lg:pt-32 min-h-[86vh] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-blue-50 to-white" />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-cyan-200/40 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-blue-200/40 blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-300/60 shadow-sm">
            Powered by Remote Sensing & AI
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Precision water monitoring for every aquaculture operation
          </h1>
          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            AQUAWISE delivers real-time insights on critical water parameters without costly hardware. A modern, mobile-first experience that brings sensor-level accuracy to ponds, cages, and RAS of any size.
          </p>

          <div className="mt-6 grid gap-3">
            {[
              'No expensive installations or specialized maintenance',
              'Sensor-comparable accuracy with AI-driven fusion',
              'Live metrics, alerts, and trends in the mobile app',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-cyan-600" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-700/40 transition"
            >
              Request a demo
            </a>
            <a
              href="#overview"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-cyan-700 font-semibold ring-1 ring-cyan-300/60 bg-white/70 backdrop-blur hover:bg-white"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden ring-1 ring-sky-200/60 shadow-xl">
          <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
