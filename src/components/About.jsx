import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { aboutData } from '../data/portfolioData'

function About() {
  return (
    <section
      id="about"
      className="mx-auto w-[min(1120px,calc(100%-2rem))] py-15 text-slate-900"
    >
      <SectionTitle
        title="About Me"
        description={aboutData.description}
        light={true}
        center={true}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="soft-card p-10"
        >
          <div className="space-y-6 text-[1.05rem] leading-8 text-slate-600">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About