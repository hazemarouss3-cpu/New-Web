import { Sparkles, Instagram, Facebook, Youtube } from 'lucide-react'

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-10">
      <div className="section-container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-bold">Rhythmix</span>
        </a>

        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Rhythmix Academy. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-brand-400/50 hover:text-brand-300"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
