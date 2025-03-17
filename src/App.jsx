import { useState, React } from 'react'
import Navbar from './components/Navbar'
import Letter from './components/Letter'
import EntryText from './components/EntryText'
import Technologies from './components/Technologies'
import Strengths from './components/Strengths'
import AboutMe from './components/AboutMe'
import Education from './components/Education'

function App() {

  return (

    <div>
      <Navbar />
      <EntryText />
      <Technologies />
      <Strengths />
      <AboutMe />
      <Education />
      <Letter />
    </div>


  )
}

export default App
