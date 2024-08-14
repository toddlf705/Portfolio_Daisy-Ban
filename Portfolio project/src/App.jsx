import './App.css'
import Nav from './components/Nav'
// import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Skills from './components/Skills'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Nav/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </>
  )
}

export default App
