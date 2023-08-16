import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Main from './components/Main'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import BannerProfile from './components/BannerProfile'


function App() {
 

  return (
    <>
      <Header />

      <Navbar />

      <BannerProfile />

      <AboutMe />

      <Main />

      <Footer />
     
    </>
  )
}

export default App
