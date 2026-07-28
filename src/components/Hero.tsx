import { site } from '../data/site'

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="container hero__content">
        <p className="hero__name">{site.name}</p>
        <h1 className="hero__title">{site.title}</h1>
        <p className="hero__tagline">{site.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#work">
            View work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
