import { motion } from 'framer-motion'
import { FaArrowRight, FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

function Hero() {
  const quickSkills = [
    'AI',
    'ML',
    'NLP',
    'Deep Learning',
    'LLM',
    'VLM',
    'RAG',
    'Data Science',
    'Full-Stack',
    'Software Development',
    'AWS',
    'GCP',
    'Azure',
  ]

  return (
    <section
      id="home"
      className="mx-auto flex min-h-[88vh] w-[min(1120px,calc(100%-2rem))] flex-col items-center justify-center py-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center"
      >
        {/* Profile */}
        <div className="mb-8 h-36 w-36 overflow-hidden rounded-full border-4 border-white/15 shadow-xl shadow-violet-500/10">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Diwita Banerjee"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
          Diwita Banerjee
        </h1>

        {/* Role */}
        <p className="mt-4 text-lg font-medium text-violet-200 md:text-2xl">
          AI/ML Engineer | Data Scientist | Full-Stack AI Developer
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

          {/* Email */}
          <a
            href="mailto:diwitabanerjee01@gmail.com"
            title="Email"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:-translate-y-0.5 hover:bg-white"
          >
            <FaEnvelope className="text-white transition group-hover:text-slate-900" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Diwita19"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:-translate-y-0.5 hover:bg-white"
          >
            <FaGithub className="text-lg text-white transition group-hover:scale-110 group-hover:text-slate-900" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/diwitabanerjee/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:-translate-y-0.5 hover:bg-white"
          >
            <FaLinkedin className="text-lg text-white transition group-hover:scale-110 group-hover:text-slate-900" />
          </a>

          {/* Resume */}
          <a
            href={`${import.meta.env.BASE_URL}Diwita_Banerjee_AI_ML_Engineer_Resume_Meta.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            title="Resume"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-900"
            >
            <span className="text-white transition group-hover:text-slate-900">
                Resume
            </span>
          </a>
        </div>

        {/* Skills Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {quickSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Hero