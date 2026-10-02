export default function Logo({ light = false }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Tulas International School — home">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b2a6f] font-display text-lg font-bold text-[#f5b800]">
        TIS
      </span>
      <span className={`hidden leading-tight xl:block ${light ? 'text-white' : 'text-ink'}`}>
        <span className="block font-display text-base font-bold">Tulas International</span>
        <span className="block text-xs font-medium tracking-widest text-muted uppercase">School · Dehradun</span>
      </span>
    </a>
  )
}
