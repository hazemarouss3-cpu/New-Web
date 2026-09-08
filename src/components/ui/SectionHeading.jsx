export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col ${alignment} gap-4`}>
      {eyebrow && (
        <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && (
        <p className="max-w-2xl text-base text-slate-400 sm:text-lg">{description}</p>
      )}
    </div>
  )
}
