import { pricingPlans } from '../data/pricingData.js'
import SectionHeading from './ui/SectionHeading.jsx'
import PricingCard from './PricingCard.jsx'

export default function Subscriptions() {
  return (
    <section id="subscriptions" className="relative bg-ink-950 py-24 sm:py-32">
      <div className="section-container flex flex-col gap-16">
        <SectionHeading
          eyebrow="Packages"
          title="Choose the plan that fits your journey"
          description="Flexible training packages designed for every level — from first-time beginners to future champions."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <p className="text-center text-sm text-slate-500">
          All packages include uniform guidance and access to seasonal showcases. Prices may vary
          slightly by branch.
        </p>
      </div>
    </section>
  )
}
