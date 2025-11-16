import { ShieldCheck, Gauge, Waves, Smartphone, Sparkles } from 'lucide-react'

const cards = [
  {
    title: 'Remote Sensing',
    desc: 'Satellite and aerial data to infer water quality without in-pond devices.',
    icon: Waves,
  },
  {
    title: 'AI Accuracy',
    desc: 'Model fusion achieves sensor-comparable precision across environments.',
    icon: Sparkles,
  },
  {
    title: 'Actionable Metrics',
    desc: 'Real-time DO, pH, temperature, turbidity, and more delivered to your app.',
    icon: Gauge,
  },
  {
    title: 'Operational Simplicity',
    desc: 'No capex-heavy installs, no site maintenance, no calibration hassle.',
    icon: ShieldCheck,
  },
  {
    title: 'Mobile-first',
    desc: 'Monitor multiple sites, set alerts, and share reports from anywhere.',
    icon: Smartphone,
  },
]

export default function Overview() {
  return (
    <section id="overview" className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            A cost-effective alternative to traditional sensors
          </h2>
          <p className="mt-4 text-slate-600">
            AQUAWISE removes barriers to precision water quality management, unlocking productivity and sustainability for operations of any size.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="group rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-sky-100 text-sky-700 grid place-content-center">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
