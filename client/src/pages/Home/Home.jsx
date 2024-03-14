import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'

const Home = () => {
  return (
    <div >
      <Header />

      <div className='bg-primary px-40 sm:px-10'>
        <Intro />
        <About />
        <Experiences />
        <Projects />
      </div>
    </div>
  )
}

export default Home
