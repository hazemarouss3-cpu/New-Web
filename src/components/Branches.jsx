import { branches } from '../data/branchesData.js'
import SectionHeading from './ui/SectionHeading.jsx'
import BranchCard from './BranchCard.jsx'

export default function Branches() {
  return (
    <section id="branches" className="relative bg-ink-900/40 py-24 sm:py-32">
      <div className="section-container flex flex-col gap-16">
        <SectionHeading
          eyebrow="Locations"
          title="Train at a branch near you"
          description="Three fully-equipped academy branches across Alexandria and Cairo, each staffed with certified rhythmic gymnastics coaches."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </div>
    </section>
  )
}
