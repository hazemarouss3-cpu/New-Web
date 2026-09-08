import { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import Button from './ui/Button.jsx'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Subscriptions', href: '#subscriptions' },
  { label: 'Branches', href: '#branches' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setIsMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-ink-950/80 shadow-lg shadow-black/20 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">Rhythmix</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-brand-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button as="a" href="#subscriptions">
            Join Now
          </Button>
        </div>

        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-ink-950/95 backdrop-blur-xl md:hidden">
          <div className="section-container flex flex-col gap-5 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-slate-200 hover:text-brand-300"
              >
                {link.label}
              </a>
            ))}
            <Button as="a" href="#subscriptions" onClick={handleLinkClick} className="w-full">
              Join Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
