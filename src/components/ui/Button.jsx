const variants = {
  primary: 'bg-accent text-accent-ink hover:brightness-95 shadow-lg shadow-accent/25',
  secondary: 'bg-brand text-brand-ink hover:opacity-90',
  ghost: 'border border-white/40 text-white hover:bg-white/10',
  outline: 'border border-line text-ink hover:bg-surface',
}

export default function Button({ href, variant = 'primary', className = '', children, ...rest }) {
  const external = href?.startsWith('http')
  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className={`inline-flex min-h-12 items-center justify-center whitespace-nowrap gap-2 rounded-full px-6 py-3 text-sm font-semibold transition active:scale-[0.98] ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
