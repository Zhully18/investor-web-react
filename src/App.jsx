import React from 'react'
import Hero from './Components/Hero/Hero'
import Insight from './Components/Insight/Insight'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Resource from './Components/Resouces/Resource'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Insight />
      <About />
      <Services />
      <Resource />
      <Footer />
    </div>
  )
}

export default App