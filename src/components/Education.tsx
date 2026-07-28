import { site } from '../data/site'

export function Education() {
  return (
    <section className="section timeline-section" id="education">
      <div className="container">
        <span className="section__eyebrow">Education</span>
        <h2 className="section__title">Studies</h2>
        <p className="section__lead">
          Degrees and programmes across computational science and aerospace
          engineering.
        </p>

        <ul className="timeline">
          {site.education.map((item) => (
            <li key={`${item.org}-${item.title}`} className="timeline__item">
              <div className="timeline__period">{item.period}</div>
              <div className="timeline__body">
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__org">{item.org}</p>
                {item.detail ? (
                  <p className="timeline__detail">{item.detail}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
