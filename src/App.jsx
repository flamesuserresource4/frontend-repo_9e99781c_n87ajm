import React, { useState } from 'react'
import Hero from './components/Hero'
import Slide from './components/Slide'
import Services from './components/Services'

function App() {
  const [showDeck, setShowDeck] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative">
        <Hero onGetStarted={() => setShowDeck(true)} />
        <Services />

        {showDeck && (
          <div className="space-y-6 pb-16">
            <Slide
              title="Problem Statement"
              bullets={[
                'Dog walkers often provide insufficient walks & misrepresent exercise.',
                'Owners struggle to find reliable boarding/grooming during work or travel.',
                'Lack of transparency & trust in dog care services.',
                'Nutritious meals for dogs are either expensive or filled with preservatives.',
                'Limited options for specialized workouts & engagement for dogs.',
              ]}
            />

            <Slide
              title="Services Offered (Solutions)"
              bullets={[
                'Verified Dog Walking – GPS + live POV camera tracking.',
                'Community Boarding – connect with trusted dog lovers for homely care.',
                'Grooming Services – discounted deals via partner salons, home pick-up.',
                'Extensive Workouts – cycling runs, swimming, park visits, puppy training.',
                'Healthy Meal/Tiffin Service – fresh, preservative-free meals via kitchens.',
              ]}
            />

            <Slide
              title="Industry Trends & Opportunity"
              bullets={[
                'Pet care industry in India: Growing at ~20% CAGR, projected at $1.5B+ by 2030.',
                'Rising nuclear families & working professionals with pets.',
                'Shift towards premium pet care & healthy diets.',
                'Growing pet tech adoption (GPS collars, pet tracking apps).',
                'Opportunity to build India’s first integrated pet-care + community platform.',
              ]}
            />

            <Slide
              title="Uniqueness & Innovation"
              bullets={[
                'Transparency: Dog walker live-stream POV.',
                'Community-driven boarding (Airbnb for dogs).',
                'Affordable grooming & food via partnership model.',
                'Integrated all-in-one app (walks, workouts, food, grooming, community).',
                'Trust-first approach: Verification, ratings, and tracking features.',
              ]}
            />

            <Slide
              title="Business Model Canvas"
              bullets={[
                'Customer Segments: Pet owners (urban professionals), grooming salons, kitchens.',
                'Value Proposition: Reliable, transparent, affordable pet care + community.',
                'Channels: Mobile app (Pluto), social media, partnerships.',
                'Customer Relationships: Subscription, reviews/ratings, gamified loyalty.',
                'Revenue Streams: Commission on grooming/boarding; subscription for premium; delivery/tiffin margin; workout service fees.',
                'Key Resources: App, partnerships, verified service providers.',
                'Key Activities: App dev, verification, community management.',
                'Key Partners: Grooming salons, kitchens, cycling/swimming trainers.',
                'Cost Structure: Tech dev, operations, partnerships, marketing.',
              ]}
            />
          </div>
        )}

        <footer className="text-center py-10 text-blue-300/70">
          Built for pet parents and dog lovers across India.
        </footer>
      </div>
    </div>
  )
}

export default App
