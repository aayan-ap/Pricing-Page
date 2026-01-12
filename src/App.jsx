import React from 'react'
import "./index.css";
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Paymentbtn from './Components/Paymentbtn'
import Pricing_card from './Components/Pricing_card';

function App() {

  return (
    <div>
    <header>
  <Nav></Nav>
  </header>
    <Hero></Hero>
   <Pricing_card></Pricing_card>
    </div>
  )
}

export default App