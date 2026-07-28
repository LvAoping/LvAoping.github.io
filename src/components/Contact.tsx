import { site } from '../data/site'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <span className="section__eyebrow">Contact</span>
        <h2 className="section__title">Get in touch</h2>
        <p className="section__lead">
          Based in {site.location}. Reach me on LinkedIn — happy to share a
          full CV or email privately on request.
        </p>
        <div className="contact__links">
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
