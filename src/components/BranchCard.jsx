import { useState } from 'react'
import { MapPin, Phone, Clock, Map } from 'lucide-react'

export default function BranchCard({ branch }) {
  const [showMap, setShowMap] = useState(false)
  const { name, city, address, phones, hours, mapEmbedUrl } = branch

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 transition-all duration-300 hover:-translate-y-2 hover:border-brand-400/40 hover:shadow-2xl hover:shadow-brand-500/10">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-800">
        {showMap ? (
          <iframe
            title={`${name} branch map`}
            src={mapEmbedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setShowMap(true)}
            className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-800 via-ink-900 to-brand-900/30 text-slate-400 transition-colors hover:text-brand-300"
          >
            <Map className="h-10 w-10" />
            <span className="text-sm font-medium">View Map</span>
          </button>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-semibold text-brand-300 backdrop-blur-sm">
          {city}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-xl font-bold text-white">{name}</h3>

        <div className="flex items-start gap-3 text-sm text-slate-400">
          <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-400" />
          <span>{address}</span>
        </div>

        <div className="flex flex-col gap-2">
          {phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-brand-300"
            >
              <Phone className="h-4 w-4 flex-none text-brand-400" />
              {phone}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-400">
          <Clock className="h-4 w-4 flex-none text-brand-400" />
          {hours}
        </div>
      </div>
    </div>
  )
}
