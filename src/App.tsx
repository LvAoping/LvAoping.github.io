import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Volunteering } from './components/Volunteering'
import { Work } from './components/Work'
import './App.css'

function App() {
  return (
    <div className="site">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Work />
        <Education />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
