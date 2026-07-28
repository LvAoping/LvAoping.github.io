import { site } from '../data/site'

export function Work() {
  return (
    <section className="section projects" id="work">
      <div className="container">
        <span className="section__eyebrow">Work</span>
        <h2 className="section__title">Selected experience</h2>
        <p className="section__lead">
          Recent roles and projects from ITU and academic work. Details stay
          high-level on purpose.
        </p>

        <div className="projects__grid">
          {site.projects.map((project, index) => (
            <article key={project.title} className="project-card">
              <div className="project-card__meta">
                <span className="project-card__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="project-card__role">{project.role}</span>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__blurb">{project.blurb}</p>
              {project.links.length > 0 ? (
                <div className="project-card__links">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
