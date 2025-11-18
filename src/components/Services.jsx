import React from 'react'

const items = [
  {
    title: 'Verified Dog Walking',
    desc: 'GPS + live POV camera tracking for transparency and trust.',
  },
  {
    title: 'Community Boarding',
    desc: 'Connect with trusted dog lovers for safe, homely care.',
  },
  {
    title: 'Grooming Services',
    desc: 'Discounted partner salons with convenient home pick-up.',
  },
  {
    title: 'Extensive Workouts',
    desc: 'Cycling runs, swimming, park visits and puppy training.',
  },
  {
    title: 'Healthy Meal/Tiffin',
    desc: 'Fresh, preservative-free meals from verified kitchens.',
  },
]

const Services = () => {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-white mb-8">Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl bg-slate-800/60 border border-white/10 p-6 hover:shadow-blue-500/10 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-white">{it.title}</h3>
            <p className="mt-2 text-blue-200/90">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
