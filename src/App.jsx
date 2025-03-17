import { useState, React } from 'react'
import Navbar from './components/Navbar'
import Letter from './components/Letter'
import EntryText from './components/EntryText'
import Technologies from './components/Technologies'
import Strengths from './components/Strengths'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'

function App() {

  return (

    <div>
      <Navbar />
      <EntryText />
      <Technologies />
      <Strengths />
      <AboutMe />
      <Education />
      <WorkExperience />
      <Letter />
    </div>


  )
}

export default App
