import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Main from './components/Main'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'


function App() {
 

  return (
    <>
      <Header />

      <Navbar />

      <AboutMe />

      <Main />

      <Footer />
     
    </>
  )
}

export default App
