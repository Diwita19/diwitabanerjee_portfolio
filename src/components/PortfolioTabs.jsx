import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Projects from './Projects'
import Skills from './Skills'
import Certifications from './Certifications'

function PortfolioTabs() {
  const tabs = useMemo(
    () => [
      {
        id: 'projects',
        label: 'Highlighted Projects',
        title: 'Highlighted Projects',
        description: (
            <>
            A curated set of AI, ML, multimodal, and full-stack projects showcasing research and engineering impact. 
            More projects are available on{' '}
            <a
                href="https://github.com/Diwita19"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#c8c2ff] hover:underline"
            >
                GitHub →
            </a>
            </>
        ),
      },
      {
        id: 'skills',
        label: 'Technical Skills',
        title: 'Technical Skills',
        description: "Technical strengths across AI, data, cloud, and software engineering.",
      },
      {
        id: 'certifications',
        label: 'Certifications',
        title: 'Certifications',
        description: "Cloud and data engineering credentials across GCP, AWS, and Azure.",
      },
    ],
    []
  )

  const [activeTab, setActiveTab] = useState('projects')
  const [direction, setDirection] = useState(1)

  const getTabIndex = (tabId) => tabs.findIndex((tab) => tab.id === tabId)
  const activeTabData = tabs.find((tab) => tab.id === activeTab)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')

      if (['projects', 'skills', 'certifications'].includes(hash)) {
        const nextIndex = getTabIndex(hash)
        const currentIndex = getTabIndex(activeTab)

        if (nextIndex !== currentIndex) {
          setDirection(nextIndex > currentIndex ? 1 : -1)
        }

        setActiveTab(hash)

        const section = document.getElementById('portfolio')
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [activeTab, tabs])

  const handleTabClick = (tabId) => {
    const nextIndex = getTabIndex(tabId)
    const currentIndex = getTabIndex(activeTab)

    if (nextIndex !== currentIndex) {
      setDirection(nextIndex > currentIndex ? 1 : -1)
    }

    setActiveTab(tabId)
    window.history.replaceState(null, '', `#${tabId}`)
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return <Projects embedded />
      case 'skills':
        return <Skills embedded />
      case 'certifications':
        return <Certifications embedded />
      default:
        return <Projects embedded />
    }
  }

  const contentVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 28 : -28,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -28 : 28,
    }),
  }

  return (
    <section id="portfolio" className="mx-auto w-[min(1120px,calc(100%-2rem))] py-15">
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3 rounded-full bg-white/50 p-2 backdrop-blur-md">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className="relative rounded-full px-5 py-3 text-sm font-semibold md:px-6 md:text-base"
            >
              {isActive && (
                <motion.span
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 shadow-md"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}

              <span
                className={`relative z-10 transition duration-200 ${
                  isActive ? 'text-white' : 'text-slate-700'
                }`}
              >
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>

        <AnimatePresence mode="wait" custom={direction}>
            <motion.div
                key={activeTabData.id}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeInOut' }}
                className="mb-10 text-center"
            >
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {activeTabData.title}
          </h3>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-600 md:text-[1.05rem]">
            {activeTabData.description}
          </p>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={activeTab}
          custom={direction}
          variants={contentVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.32, ease: 'easeInOut' }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default PortfolioTabs