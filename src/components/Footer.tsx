import { site } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {site.name}
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}
