import { Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-8 sm:p-12 ring-1 ring-white/20 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                See AQUAWISE in action
              </h3>
              <p className="mt-3 text-cyan-50/90">
                Get a personalized walkthrough of our mobile app and data capabilities. Learn how we can adapt to your farms and production goals.
              </p>
            </div>
            <form
              className="grid sm:grid-cols-3 gap-3"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const email = form.email.value
                const company = form.company.value
                alert(`Thanks! We'll reach out to ${email} at ${company}.`)
              }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Work email"
                className="sm:col-span-1 col-span-3 rounded-xl px-4 py-3 ring-1 ring-white/30 bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                name="company"
                required
                placeholder="Company"
                className="sm:col-span-1 col-span-3 rounded-xl px-4 py-3 ring-1 ring-white/30 bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="sm:col-span-1 col-span-3 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-cyan-700 hover:shadow-lg"
              >
                <Mail size={16} /> Request demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
