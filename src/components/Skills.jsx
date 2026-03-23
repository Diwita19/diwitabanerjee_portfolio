import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { skillsData } from '../data/portfolioData'

function Skills({ embedded = false }) {
  const content = (
    <>
      {!embedded && (
        <SectionTitle
          title="My Technical Skills"
          description="Technical strengths across AI, data, cloud, and software engineering."
          light={true}
        />
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {skillsData.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="soft-card p-6"
          >
            <h3 className="text-xl font-semibold text-slate-900">{group.category}</h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="soft-pill rounded-full px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )

  if (embedded){
    return <div id="skills">{content}</div>
  }

  return (
    <section id="skills" className="mx-auto w-[min(1120px,calc(100%-2rem))] py-28 text-slate-900">
      {content}
    </section>
  )
}

export default Skills