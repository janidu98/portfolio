import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div >
      <Header />

      <div className='bg-primary px-40 sm:px-10'>
        <Intro />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home
