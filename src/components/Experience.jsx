import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaChevronUp, FaMapMarkerAlt } from 'react-icons/fa'
import { experienceData } from '../data/portfolioData'

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const activeExp = experienceData[activeIndex]

  const handleSelect = (index) => {
    if (index === activeIndex) return
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  const contentVariants = {
    enter: (dir) => ({
      opacity: 0,
      y: dir > 0 ? 38 : -38,
    }),
    center: {
      opacity: 1,
      y: 0,
    },
    exit: (dir) => ({
      opacity: 0,
      y: dir > 0 ? -38 : 38,
    }),
  }

  return (
    <section
      id="experience"
      className="mx-auto w-[min(1180px,calc(100%-2rem))] py-15 text-slate-900"
    >
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Professional Experience
        </h2>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        {/* Left timeline */}
        <div className="soft-card h-fit self-start overflow-hidden p-0">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-2">
            <h3 className="text-lg font-semibold text-slate-900">Timeline</h3>
            <span className="text-sm text-slate-500">{experienceData.length} roles</span>
          </div>

          <div className="space-y-3 p-3">
            {experienceData.map((exp, index) => {
              const isActive = index === activeIndex

              return (
                <button
  key={`${exp.company}-${exp.role}`}
  onClick={() => handleSelect(index)}
  className="group relative w-full text-left"
>
  {isActive && (
    <motion.div
      layoutId="activeExperienceCard"
      className="absolute inset-0 rounded-[20px] border bg-[#9A92EA] border-[#9A92EA] shadow-[0_14px_28px_rgba(139,92,246,0.28)]"
      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
    />
  )}

  <div
    className={`relative z-10 rounded-[20px] border px-4 py-2 backdrop-blur-[2px] transition-all duration-250 ${
      isActive
        ? 'border-transparent bg-transparent'
        : 'border-slate-200 bg-white/60 hover:border-violet-200 hover:bg-violet-50/40'
    }`}
  >
    <div className="flex items-start gap-3">
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center">
        {exp.logo ? (
          <img
            src={exp.logo}
            alt={exp.company}
            className="max-h-9 max-w-9 object-contain transition-transform duration-250 group-hover:scale-105"
          />
        ) : (
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-2xl border ${
              isActive
                ? 'border-white/20 bg-white/10 text-white'
                : 'border-slate-200 bg-slate-50 text-slate-500'
            }`}
          >
            <FaBriefcase className="text-xs" />
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h4
              className={`text-[1.05rem] font-semibold leading-snug ${
                isActive ? 'text-white' : 'text-slate-900'
              }`}
            >
              {exp.company}
            </h4>

            <p
              className={`mt-1 text-sm ${
                isActive ? 'text-violet-100' : 'text-slate-600'
              }`}
            >
              {exp.shortRole}
            </p>
          </div>

          <p
            className={`shrink-0 whitespace-nowrap text-xs ${
              isActive ? 'text-violet-100' : 'text-slate-500'
            }`}
          >
            {exp.duration}
          </p>
        </div>

        <div
          className={`mt-2 flex items-center gap-2 text-xs ${
            isActive ? 'text-violet-100' : 'text-slate-500'
          }`}
        >
          <FaMapMarkerAlt className="text-[10px]" />
          <span>{exp.location}</span>
        </div>
      </div>
    </div>
  </div>
</button>
              )
            })}
          </div>
        </div>

        {/* Right details */}
        <div className="soft-card self-start overflow-hidden p-0">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${activeExp.company}-${activeExp.role}`}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-7 py-3">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <FaCalendarAlt className="text-[11px]" />
                  <span>{activeExp.duration}</span>
                </div>

                <div className="mt-4 flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center">
                    {activeExp.logo ? (
                      <img
                        src={activeExp.logo}
                        alt={activeExp.company}
                        className="max-h-12 max-w-12 object-contain"
                      />
                    ) : (
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500">
                        <FaBriefcase className="text-base" />
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[2rem] font-bold leading-tight text-slate-900 md:text-[2.15rem]">
                      {activeExp.role}
                    </h3>

                    <p className="mt-2 text-lg text-slate-500">
                      <span className="font-semibold text-slate-700">{activeExp.company}</span> •{' '}
                      {activeExp.location}
                    </p>
                  </div>
                </div>

                <p className="mt-6 max-w-3xl text-[1.05rem] leading-8 text-slate-600">
                  {activeExp.description}
                </p>
              </div>

              <div className="border-t border-slate-200 px-7 py-3">
                <div className="rounded-[22px] border border-slate-200 bg-white/55 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-xl font-semibold text-slate-900">Key Highlights</h4>
                    <FaChevronUp className="text-slate-400" />
                  </div>

                  <ul className="space-y-4">
                    {activeExp.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-1 text-[1rem] leading-8 text-slate-700"
                      >
                        <span className="mt-2 h-1.5 w-1 shrink-0 rounded-full bg-violet-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {activeExp.awards && activeExp.awards.length > 0 && (
                  <div className="mt-7 rounded-[22px] border border-slate-200 bg-white/55 p-6">
                    <h4 className="mb-4 text-xl font-semibold text-slate-900">
                      Awards & Achievements
                    </h4>

                    <ul className="space-y-4">
                      {activeExp.awards.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[1rem] leading-8 text-slate-700"
                        >
                          <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-7">
                  <h4 className="mb-3 text-base font-semibold text-slate-900">Tech Stack</h4>

                  <div className="flex flex-wrap gap-3">
                    {activeExp.tech.map((item) => (
                      <span key={item} className="soft-pill rounded-full px-4 py-4 text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Experience