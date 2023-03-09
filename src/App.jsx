import React from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Location from './components/location/Location'
import Footer from './components/footer/Footer'
import Scroll from './components/home/Scroll'
import Cloud from './cloud/Cloud'

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Home/>
        <Location/>
      </main>
      <Scroll/>
      <About/>
      <Cloud/>
      <Footer/>
      
    </>
  )
}

export default App