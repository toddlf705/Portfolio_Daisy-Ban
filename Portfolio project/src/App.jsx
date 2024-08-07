import './App.css'
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <div>
        <Nav/>
        <About/>
        <Skills/>
        <Projects/>
        <Contacts/>
      </div>

    </>
  )
}

export default App
