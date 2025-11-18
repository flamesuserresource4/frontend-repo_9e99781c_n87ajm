import React from 'react'

const Slide = ({ title, subtitle, bullets }) => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-slate-800/50 border border-white/10 rounded-3xl p-8 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h2>
        {subtitle && <p className="text-blue-200/90 mb-6">{subtitle}</p>}
        {Array.isArray(bullets) && bullets.length > 0 && (
          <ul className="space-y-3 list-disc list-inside text-blue-100/90">
            {bullets.map((b, i) => (
              <li key={i} className="leading-relaxed">{b}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Slide
