import { site } from '../data/site'

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <span className="section__eyebrow">About</span>
        <h2 className="section__title">Background</h2>
        <p className="section__lead">
          A short overview of how I work and what I focus on.
        </p>
        <div className="about__body">
          <p className="about__bio">{site.bio}</p>
          <ul className="about__focus">
            {site.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
