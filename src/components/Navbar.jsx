import { useEffect, useMemo, useState } from 'react'

function Navbar() {
  const baseText = 'Diwita Banerjee'

  const rotatingWords = useMemo(
    () => [
        'ML Expert',
        'Coder',
        'Problem Solver',
        'Innovator',
        'Researcher',
        'Explorer',
    ],
    []
  )

  const fullSequence = useMemo(
    () => [
      baseText,
      ...rotatingWords,
      baseText,
      ...rotatingWords,
      baseText,
    ],
    [baseText, rotatingWords]
  )

  const [displayText, setDisplayText] = useState(fullSequence[0])
  const [sequenceIndex, setSequenceIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(fullSequence[0].length)
  const [isPaused, setIsPaused] = useState(true)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    if (isFinished) return

    let timeout
    const currentTarget = fullSequence[sequenceIndex]
    const isLastItem = sequenceIndex === fullSequence.length - 1

    if (isPaused) {
      timeout = setTimeout(() => {
        if (isLastItem) {
          setIsFinished(true)
        } else {
          setIsPaused(false)
          setIsDeleting(true)
        }
      }, 1600)

      return () => clearTimeout(timeout)
    }

    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          const next = currentTarget.slice(0, charIndex - 1)
          setDisplayText(next)
          setCharIndex((prev) => prev - 1)
        }, 45)
      } else {
        timeout = setTimeout(() => {
          const nextIndex = sequenceIndex + 1
          setSequenceIndex(nextIndex)
          setDisplayText('')
          setIsDeleting(false)
          setCharIndex(0)
        }, 220)
      }
    } else {
      if (charIndex < currentTarget.length) {
        timeout = setTimeout(() => {
          const next = currentTarget.slice(0, charIndex + 1)
          setDisplayText(next)
          setCharIndex((prev) => prev + 1)
        }, 75)
      } else {
        timeout = setTimeout(() => {
          setIsPaused(true)
        }, 1000)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, fullSequence, isDeleting, isPaused, isFinished, sequenceIndex])

  const showTypedDot =
    !isDeleting &&
    displayText.length > 0 &&
    charIndex === fullSequence[sequenceIndex].length

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 text-slate-800 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] items-center justify-between py-5">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-slate-900"
          aria-label="Diwita Banerjee"
        >
          <span className="inline-block min-w-[360px]">
            {displayText}
            {showTypedDot && <span className="text-violet-500">.</span>}
            {!isFinished && (
              <span className="inline-block animate-pulse text-violet-500">_</span>
            )}
          </span>
        </a>

        <nav className="flex items-center gap-8 text-lg text-slate-600">
          <a href="#about" className="transition hover:text-slate-900">
            About
          </a>

          <a href="#experience" className="transition hover:text-slate-900">
            Experience
          </a>

          <div className="group relative">
            <a
              href="#projects"
              className="flex items-center gap-2 transition hover:text-slate-900"
            >
              Projects & Skills
              {/* <span className="text-sm transition-transform duration-200 group-hover:rotate-180">
                ▼
              </span> */}
            </a>

            <div className="invisible absolute left-0 top-full mt-1 w-56 translate-y-2 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 opacity-0 shadow-lg backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <a
                href="#projects"
                className="block px-5 py-3 text-base text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block px-5 py-3 text-base text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
              >
                Skills
              </a>
              <a
                href="#certifications"
                className="block px-5 py-3 text-base text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
              >
                Certifications
              </a>
            </div>
          </div>

          <a href="#education" className="transition hover:text-slate-900">
            Education
          </a>

          <a href="#contact" className="transition hover:text-slate-900">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar