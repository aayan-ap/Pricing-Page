import React from "react";
import "./index.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Pricing_card from "./Components/Pricing_card";
import Pricing_card_once from "./Components/Pricing_card_once";
import Pricing_card_self from "./Components/Pricing_card_self";
import Pricing_card_onsite from "./Components/Pricing_card_onsite";
import Webinar from "./Components/Webinar";
import WhoJoin from "./Components/WhoJoin";
import Steps from "./Components/Steps";
import Prologue from "./Components/Prologue";
import Why from "./Components/Why";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import NavRes from "./Components/NavRes";
import Companies from "./Components/Companies";
import Webinar_vid from "./Components/Webinar_vid";


// import Webinar_vid from "./Components/Webinar_vid";

function App() {
  return (
    <div>
      <header>
        {/* <Nav></Nav> */}
        <NavRes></NavRes>

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
        <Pricing_card className="card"></Pricing_card>
        <Pricing_card_once className="card"></Pricing_card_once>
        <Pricing_card_self className="card"></Pricing_card_self>
        <Pricing_card_onsite className="card"></Pricing_card_onsite>
      </div>

      {/* Webinar Videos */}
      <Webinar></Webinar>
      {/* <Webinar_vid /> */}
      

      {/* Who Should Join? */}
      <WhoJoin></WhoJoin>

      {/* Steps to Success */}
      <Steps></Steps>

      {/* Director Prologue */}
      <Prologue></Prologue>
      {/* Why Corporates Choose CloudAge ? */}
      <Why></Why>

{/* Companies */}
<Companies></Companies>

      {/* Faqs */}
      <Faq></Faq>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
