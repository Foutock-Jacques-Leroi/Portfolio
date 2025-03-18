import { useState, React } from 'react'
import Navbar from './components/Navbar'
import Letter from './components/Letter'
import EntryText from './components/EntryText'
import Technologies from './components/Technologies'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'

function App() {

  return (

    <div>
      <Navbar />
      <EntryText />
      <Technologies />
      <AboutMe />
      <Education />
      <WorkExperience />
      <Projects />
      <Letter />
    </div>


  )
}

export default App
