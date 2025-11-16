import { PiggyBank, Scale, ShieldCheck, BarChart3, Leaf } from 'lucide-react'

const benefits = [
  {
    title: 'Lower total cost',
    desc: 'No hardware capex, no maintenance contracts—enterprise-grade monitoring without the overhead.',
    icon: PiggyBank,
  },
  {
    title: 'Equal access',
    desc: 'Bring precision monitoring to small and mid-size farms to level the playing field.',
    icon: Scale,
  },
  {
    title: 'Reliable by design',
    desc: 'Model ensembles, QA/QC, and confidence bands for trustworthy decisions.',
    icon: ShieldCheck,
  },
  {
    title: 'Operational uplift',
    desc: 'Prevent stock loss with proactive alerts and optimize feed with data-backed trends.',
    icon: BarChart3,
  },
  {
    title: 'Sustainability',
    desc: 'Improve water stewardship, reduce waste, and support resilient production.',
    icon: Leaf,
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-20 sm:py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Built to empower modern aquaculture
          </h2>
          <p className="mt-4 text-slate-600">Designed for reliability, scale, and straightforward adoption.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-blue-100 text-blue-700 grid place-content-center">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
