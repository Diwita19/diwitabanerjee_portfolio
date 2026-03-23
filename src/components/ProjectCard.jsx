import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="soft-card flex h-full flex-col p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold leading-snug text-slate-900">
          {project.title}
        </h3>

        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-600 transition hover:-translate-y-1 hover:bg-white hover:text-slate-900"
            >
              <FaGithub />
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} Live Demo`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-600 transition hover:-translate-y-1 hover:bg-white hover:text-slate-900"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.tags.map((tag) => (
          <span key={tag} className="soft-pill rounded-full px-3 py-1.5 text-sm">
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default ProjectCard