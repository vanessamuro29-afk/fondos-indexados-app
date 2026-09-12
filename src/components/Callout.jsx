const VARIANTS = {
  info: {
    wrapper: 'bg-sky-50 border-sky-300 text-sky-900',
    icon: '💡',
  },
  warning: {
    wrapper: 'bg-amber-50 border-amber-300 text-amber-900',
    icon: '⚠️',
  },
  example: {
    wrapper: 'bg-slate-50 border-slate-300 text-slate-800',
    icon: '🧮',
  },
  definition: {
    wrapper: 'bg-indigo-50 border-indigo-300 text-indigo-900',
    icon: '📘',
  },
}

export default function Callout({ variant = 'info', title, children }) {
  const style = VARIANTS[variant] || VARIANTS.info
  return (
    <div className={`my-4 rounded-xl border p-4 ${style.wrapper}`}>
      {title && (
        <p className="mb-1 flex items-center gap-2 font-semibold">
          <span aria-hidden="true">{style.icon}</span>
          {title}
        </p>
      )}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}
