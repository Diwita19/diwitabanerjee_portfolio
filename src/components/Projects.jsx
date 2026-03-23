import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import { projectsData } from '../data/portfolioData'

function Projects({ embedded = false }) {
  const featuredProjects = projectsData.filter((project) => project.featured)

  const content = (
    <>
      {!embedded && (
        <SectionTitle
          title="Highlighted Projects"
          light={true}
        />
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </>
  )

  if (embedded){
    return <div id="projects">{content}</div>
  }

  return (
    <section id="projects" className="mx-auto w-[min(1120px,calc(100%-2rem))] py-28 text-slate-900">
      {content}
    </section>
  )
}

export default Projects