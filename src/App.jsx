import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Subscriptions from './components/Subscriptions.jsx'
import Branches from './components/Branches.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Subscriptions />
        <Branches />
      </main>
      <Footer />
    </div>
  )
}
