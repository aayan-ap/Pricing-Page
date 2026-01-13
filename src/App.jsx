import React from 'react'
import "./index.css";
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Pricing_card from './Components/Pricing_card';
import Pricing_card_once from './Components/Pricing_card_once';
import Pricing_card_self from './Components/Pricing_card_self';



function App() {

  return (
    <div>
    <header>
  <Nav></Nav>
  </header>
    <Hero></Hero>
    <div className='PricingCard'>
  <Pricing_card></Pricing_card>
  <Pricing_card_self></Pricing_card_self>
  <Pricing_card_once></Pricing_card_once>
   <Pricing_card></Pricing_card> 
  


  </div>
    </div>
  )
}

export default App