import React from 'react'
import "./index.css";
import Nav from './Components/nav'
import Hero from './Components/Hero'
import Paymentbtn from './Components/Paymentbtn'
function App() {

  return (
    <div>
    <header>
  <Nav></Nav>
  </header>
    <Hero></Hero>
    <Paymentbtn></Paymentbtn>
    </div>
  )
}

export default App