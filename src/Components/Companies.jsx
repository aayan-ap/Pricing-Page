import React from "react";
import "./companies.css";
import alumniLogos from "./data/alumniLogos";
function Companies() {


  return (
    <>
      <div className="companies_container">
        <div className="companies_head">
          <h1>We Train Employees That Work Globally</h1>
        </div>
        <div className="crousel">
          <div className="group">
            {alumniLogos.map((item, index) => (
              <div className="card" key={index}>
                <img src={item.src} alt={item.title} />
              </div>
            ))}
          </div>
          <div aria-hidden className="group">
          {alumniLogos.map((item, index) => (
              <div className="card" key={index}>
                <img src={item.src} alt={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Companies;
