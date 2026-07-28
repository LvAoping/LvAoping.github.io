import { site } from '../data/site'

export function Volunteering() {
  return (
    <section className="section timeline-section" id="volunteering">
      <div className="container">
        <span className="section__eyebrow">Volunteering & service</span>
        <h2 className="section__title">Campus & teaching</h2>
        <p className="section__lead">
          Student representation and teaching support alongside degree studies.
        </p>

        <ul className="timeline">
          {site.volunteering.map((item) => (
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
