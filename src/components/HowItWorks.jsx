import { Satellite, Radar, Cpu, Activity, BellRing } from 'lucide-react'

const steps = [
  {
    title: 'Capture',
    desc: 'We source frequent imagery and signals from satellites and aerial platforms.',
    icon: Satellite,
  },
  {
    title: 'Process',
    desc: 'AI pipelines transform raw signals into robust water parameter estimates.',
    icon: Cpu,
  },
  {
    title: 'Deliver',
    desc: 'Insights stream to your mobile app with alerts, trends, and reports.',
    icon: BellRing,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-[1] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              How AQUAWISE works
            </h2>
            <p className="mt-4 text-slate-600">
              Our remote sensing and AI stack replaces on-site hardware with a scalable, data-driven approach to water monitoring.
            </p>
            <div className="mt-8 grid gap-6">
              {steps.map((s) => (
                <div key={s.title} className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-cyan-100 text-cyan-700 grid place-content-center">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                    <p className="mt-1 text-slate-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-md">
            <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-sky-100 via-blue-100 to-white grid place-content-center text-sky-700">
              <Radar className="h-24 w-24 opacity-70" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[
                { label: 'Parameters', value: 'DO, pH, Temp, NTU+' },
                { label: 'Coverage', value: 'Global' },
                { label: 'Cadence', value: 'Real-time/near-real-time' },
              ].map((m) => (
                <div key={m.label} className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <div className="text-xs font-medium text-slate-500">{m.label}</div>
                  <div className="text-base font-semibold text-slate-900 mt-1">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
