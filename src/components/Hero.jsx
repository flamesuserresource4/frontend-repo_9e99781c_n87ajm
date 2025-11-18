import React from 'react'

const Hero = ({ onGetStarted }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(59,130,246,0.35),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs text-blue-200 mb-4">
            India’s first integrated pet-care + community platform
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            PLUTO
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-blue-100/90">“Your Pet’s unexpected Best Friend”</p>
          <p className="mt-6 text-blue-200/90 leading-relaxed">
            A reliable, transparent and community-driven platform for walks, grooming, boarding, healthy meals and engaging workouts — all built with a trust‑first approach.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onGetStarted} className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20 transition">
              Explore the deck
            </button>
            <a href="#services" className="px-5 py-3 rounded-xl bg-slate-700/60 hover:bg-slate-700 text-blue-100 font-semibold border border-white/10 transition">
              See services
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-white/10 p-6 shadow-2xl">
            <div className="aspect-video rounded-2xl bg-[url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-white/10">
                <p className="text-2xl font-bold text-white">GPS</p>
                <p className="text-xs text-blue-200/80">Live Tracking</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-white/10">
                <p className="text-2xl font-bold text-white">POV</p>
                <p className="text-xs text-blue-200/80">Walker Camera</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-white/10">
                <p className="text-2xl font-bold text-white">4.9★</p>
                <p className="text-xs text-blue-200/80">Community Rated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
