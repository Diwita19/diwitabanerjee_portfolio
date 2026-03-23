import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FaCalendarAlt,
  FaChevronUp,
  FaGraduationCap,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { educationData } from '../data/portfolioData'

function Education() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const activeEdu = educationData[activeIndex]

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
      id="education"
      className="mx-auto w-[min(1180px,calc(100%-2rem))] py-15 text-slate-900"
    >
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Education
        </h2>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        {/* Left timeline */}
        <div className="soft-card h-fit self-start overflow-hidden p-0">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <h3 className="text-lg font-semibold text-slate-900">Timeline</h3>
            <span className="text-sm text-slate-500">{educationData.length} degrees</span>
          </div>

          <div className="space-y-3 p-3">
            {educationData.map((edu, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={`${edu.school}-${edu.degree}`}
                  onClick={() => handleSelect(index)}
                  className="group relative w-full text-left"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeEducationCard"
                      className="absolute inset-0 rounded-[20px] border bg-[#9A92EA] border-[#9A92EA] shadow-[0_14px_28px_rgba(139,92,246,0.28)]"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}

                  <div
                    className={`relative z-10 rounded-[20px] border px-4 py-4 backdrop-blur-[2px] transition-all duration-250 ${
                      isActive
                        ? 'border-transparent bg-transparent'
                        : 'border-slate-200 bg-white/60 hover:border-violet-200 hover:bg-violet-50/40'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center">
                        {edu.logo ? (
                          <img
                            src={edu.logo}
                            alt={edu.school}
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
                            <FaGraduationCap className="text-xs" />
                          </div>
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            <p
                              className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${
                                isActive ? 'text-violet-100' : 'text-violet-500'
                              }`}
                            >
                              {index === 0 ? 'Graduate Degree' : 'Undergraduate Degree'}
                            </p>

                            <h4
                              className={`mt-2 text-[1.05rem] font-semibold leading-snug ${
                                isActive ? 'text-white' : 'text-slate-900'
                              }`}
                            >
                              {edu.school}
                            </h4>

                            <p
                              className={`mt-1 text-sm ${
                                isActive ? 'text-violet-100' : 'text-slate-600'
                              }`}
                            >
                              {edu.shortDegree || edu.degree}
                            </p>

                            <div
                              className={`mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs ${
                                isActive ? 'text-violet-100' : 'text-slate-500'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-[10px]" />
                                <span>{edu.location}</span>
                              </div>

                              <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-[10px]" />
                                <span>{edu.duration}</span>
                              </div>
                            </div>
                          </div>

                          <span
                            className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-semibold ${
                              isActive
                                ? 'bg-white/20 text-white'
                                : 'bg-green-100 text-green-700'
                            }`}
                          >
                            Graduated
                          </span>
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
              key={`${activeEdu.school}-${activeEdu.degree}`}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-7 py-7">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <FaCalendarAlt className="text-[11px]" />
                  <span>{activeEdu.duration}</span>
                </div>

                <h3 className="mt-3 text-[2rem] font-bold leading-tight text-slate-900 md:text-[2.15rem]">
                  {activeEdu.degree}
                </h3>

                {activeEdu.concentration && (
                  <p className="mt-2 text-lg font-medium text-violet-600">
                    Concentration: {activeEdu.concentration}
                  </p>
                )}

                <p className="mt-2 text-lg text-slate-500">
                  <span className="font-semibold text-slate-700">{activeEdu.school}</span> •{' '}
                  {activeEdu.location}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-5 py-2 text-sm font-medium text-violet-700">
                    GPA: {activeEdu.gpa}
                  </div>

                  {activeEdu.degreeLink && (
                    <a
                      href={activeEdu.degreeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-slate-200 bg-white/70 px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
                    >
                      View Degree
                    </a>
                  )}
                </div>
              </div>

              <div className="border-t border-slate-200 px-7 py-7">
                <div className="rounded-[22px] border border-slate-200 bg-white/55 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-xl font-semibold text-slate-900">Highlights</h4>
                    <FaChevronUp className="text-slate-400" />
                  </div>

                  <ul className="space-y-4">
                    {activeEdu.description.map((item) => (
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

                <div className="mt-7">
                  <h4 className="mb-3 text-base font-semibold text-slate-900">Focus Areas</h4>

                  <div className="flex flex-wrap gap-3">
                    {activeEdu.areas.map((item) => (
                      <span key={item} className="soft-pill rounded-full px-4 py-2 text-sm">
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

export default Education