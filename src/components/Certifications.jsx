import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { certificationsData } from '../data/portfolioData'
import { FaExternalLinkAlt } from 'react-icons/fa'

function Certifications({ embedded = false }) {
  const content = (
    <>
      {!embedded && (
        <SectionTitle
          title="Certifications"
          light={true}
        />
      )}

      <div className="space-y-12">
        {certificationsData.map((group, groupIndex) => (
          <div key={group.category}>
            <h3 className="mb-6 text-center text-xl font-semibold text-slate-800">
              {group.category}
            </h3>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {group.items.map((cert, index) => (
                <motion.a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: (groupIndex + index) * 0.08,
                  }}
                  className="soft-card group flex min-h-[160px] flex-col justify-between p-6 bg-white/70 transition duration-300 hover:!bg-[#9a92ea] hover:border-blue-400 hover:shadow-lg hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between">
                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      className="h-12 w-auto object-contain transition duration-300 group-hover:scale-105"
                    />

                    <FaExternalLinkAlt className="text-slate-400 transition group-hover:text-white" />
                  </div>

                  <div className="mt-4">
                    <h4 className="text-base font-semibold text-slate-900 transition group-hover:text-white">
                      {cert.title}
                    </h4>

                    <p className="mt-1 text-sm text-slate-500 transition group-hover:text-slate-200">
                      {cert.issuer}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )

  if (embedded){
    return <div id="certifications">{content}</div>
  }

  return (
    <section id="certifications" className="mx-auto w-[min(1120px,calc(100%-2rem))] py-5 text-slate-900">
      {content}
    </section>
  )
}

export default Certifications