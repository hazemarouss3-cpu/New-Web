import { ArrowRight, PlayCircle, Star } from 'lucide-react'
import Button from './ui/Button.jsx'

const stats = [
  { value: '12+', label: 'Years of Excellence' },
  { value: '3', label: 'Academy Branches' },
  { value: '500+', label: 'Athletes Trained' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-950 pt-28 pb-20"
    >
      {/* Dynamic animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 animate-gradient-slow bg-gradient-to-br from-ink-950 via-[#1a0b2e] to-ink-950 bg-300%" />
        <div className="absolute -left-20 top-20 h-72 w-72 animate-float rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 animate-float-delayed rounded-full bg-violet-600/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-float rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="section-container grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-8 animate-fade-up">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300">
            <Star className="h-4 w-4 fill-brand-400 text-brand-400" />
            Egypt&apos;s Premier Rhythmic Gymnastics Academy
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Discover the Art of{' '}
            <span className="text-gradient">Rhythmic Gymnastics</span>
          </h1>

          <p className="max-w-lg text-lg text-slate-400">
            Join a community of passionate athletes and world-class coaches. From your first
            ribbon spin to competition-ready routines, we shape grace, strength, and confidence.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button as="a" href="#subscriptions" className="group">
              Join Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button as="a" href="#branches" variant="outline">
              <PlayCircle className="h-4 w-4" />
              Explore Branches
            </Button>
          </div>

          <div className="grid w-full grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</span>
                <span className="text-xs text-slate-400 sm:text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="glass-panel relative mx-auto aspect-[4/5] w-full max-w-md rounded-[2.5rem] p-3 shadow-2xl shadow-brand-900/40">
            <div className="flex h-full w-full items-center justify-center rounded-[2rem] bg-gradient-to-br from-brand-600/30 via-ink-800 to-violet-700/30">
              <div className="flex flex-col items-center gap-4 text-center">
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-5xl">
                  🎀
                </span>
                <p className="px-8 text-sm text-slate-300">
                  Ribbon · Hoop · Ball · Clubs · Rope
                </p>
              </div>
            </div>
            <div className="absolute -left-8 -top-6 animate-float rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 shadow-xl backdrop-blur-md">
              <p className="text-xs text-slate-400">Next Session</p>
              <p className="text-sm font-semibold text-white">Today · 5:00 PM</p>
            </div>
            <div className="absolute -bottom-6 -right-6 animate-float-delayed rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 shadow-xl backdrop-blur-md">
              <p className="text-xs text-slate-400">Athletes Enrolled</p>
              <p className="text-sm font-semibold text-white">500+ and growing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
