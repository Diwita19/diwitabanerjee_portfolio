function SectionTitle({
  title,
  description,
  center = false,
  light = false,
}) {
  return (
    <div
      className={`mb-14 ${
        center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
      }`}
    >
      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl ${
          light ? 'text-slate-900' : 'text-white'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-8 md:text-lg ${
            light ? 'text-slate-600' : 'text-white/70'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle