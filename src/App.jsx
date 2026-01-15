import React from "react";
import "./index.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Pricing_card from "./Components/Pricing_card";
import Pricing_card_once from "./Components/Pricing_card_once";
import Pricing_card_self from "./Components/Pricing_card_self";
import Pricing_card_onsite from "./Components/Pricing_card_onsite";
import Webinar from "./Components/Webinar";

function App() {
  return (
    <div>
      <header>
        <Nav></Nav>
      </header>
      <Hero></Hero>
      {/* Pricing Card Sequence for large window */}
      <div className="PricingCard">
        <Pricing_card></Pricing_card>
        <Pricing_card_self></Pricing_card_self>
        <Pricing_card_once></Pricing_card_once>
        <Pricing_card_onsite></Pricing_card_onsite>
      </div>
      {/* Pricing Card Sequence for Small window */}
      <div className="PricingCard_responsive">
        <Pricing_card></Pricing_card>
        <Pricing_card_once></Pricing_card_once>
        <Pricing_card_self></Pricing_card_self>
        <Pricing_card_onsite></Pricing_card_onsite>
      </div>
      {/* Webinar Videos */}
      <Webinar></Webinar>
    </div>
  );
}

export default App;
