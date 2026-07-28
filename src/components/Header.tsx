import { site } from '../data/site'

export function Header() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#top">
          {site.shortName}
        </a>
        <nav className="navbar__links" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.primary ? 'navbar__link--primary' : 'navbar__link--extra'}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
