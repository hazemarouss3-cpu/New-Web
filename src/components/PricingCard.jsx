import { Check, Crown } from 'lucide-react'
import Button from './ui/Button.jsx'

export default function PricingCard({ plan }) {
  const { name, price, currency, period, tagline, features, featured } = plan

  return (
    <div
      className={`relative flex h-full flex-col gap-6 rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
        featured
          ? 'border-brand-400/50 bg-gradient-to-b from-brand-500/10 to-ink-900 shadow-2xl shadow-brand-500/20'
          : 'border-white/10 bg-ink-900/60 hover:border-brand-400/30'
      }`}
    >
      {featured && (
        <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
          <Crown className="h-3.5 w-3.5" />
          Most Popular
        </span>
      )}

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-sm text-slate-400">{tagline}</p>
      </div>

      <div className="flex items-end gap-1">
        <span className="text-4xl font-extrabold text-white">{price}</span>
        <span className="pb-1 text-sm text-slate-400">
          {currency} / {period}
        </span>
      </div>

      <ul className="flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
            <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
              <Check className="h-3.5 w-3.5" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        as="a"
        href="#branches"
        variant={featured ? 'primary' : 'outline'}
        className="w-full"
      >
        Choose {name}
      </Button>
    </div>
  )
}
