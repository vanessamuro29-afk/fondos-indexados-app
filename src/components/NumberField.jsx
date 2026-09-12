export default function NumberField({ label, value, onChange, min, max, step = 1, suffix, helpText }) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="font-medium text-slate-700">{label}</span>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        {suffix && <span className="text-slate-500">{suffix}</span>}
      </div>
      {helpText && <span className="text-xs text-slate-400">{helpText}</span>}
    </label>
  )
}
