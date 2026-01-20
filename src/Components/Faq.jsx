import React, { useState } from "react";
import "./faq.css";
function Faq() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <>
      <div className="faq_container">
        <div className="faq_head">
          <h1>
            Frequently Asked <span className="faq_hlt">Questions</span>
          </h1>
        </div>
        <div className="faq_content">
          <div className="accordian">
            <div className="question" onClick={() => toggle(0)}>
              <p>
                Can You Teach Me From The Basics, Even If I'm From A Non-IT
                Background ?
              </p>
              <img
                className={`arrow ${open === 0 ? "rotate" : ""}`}
                src="src/assets/arrow.svg"
                alt="arrow"
              />
            </div>
            {open === 0 && (
              // <div className={`answer ${open === 0 ? "show" : ""}`}>
              <div className="answer">
                <p>
                  Yes, The Program Starts From Scratch And Is Designed For
                  Learners With Zero IT Experience.
                </p>
              </div>
            )}
          </div>
          <div className="accordian">
            <div className="question" onClick={() => toggle(1)}>
              <p>How Long Does The Programme Take To Complete?</p>
              <img
                className={`arrow ${open === 1 ? "rotate" : ""}`}
                src="src/assets/arrow.svg"
                alt="arrow"
              />
            </div>
            {open === 1 && (
              // <div className={`answer ${open === 1 ? "show" : ""}`}>
              <div className="answer">
                <p>
                  The Programme Is Designed To Be Completed In 1 Month. Your
                  Results Will Depend On Focus, Practice, And How Consistently
                  You Apply What You Learn.
                </p>
              </div>
            )}
          </div>
          <div className="accordian">
            <div className="question" onClick={() => toggle(2)}>
              <p>Does The Curriculum Include Cutting-Edge Technologies?</p>
              <img
                className={`arrow ${open === 2 ? "rotate" : ""}`}
                src="src/assets/arrow.svg"
                alt="arrow"
              />
            </div>
            {open === 2 && (
              // <div className={`answer ${open === 2 ? "show" : ""}`}>
              <div className="answer">
                <p>
                  Yes, The Program Covers Enterprise Generative Ai Along With
                  The Latest Cloud Tools And Technologies.
                </p>
              </div>
            )}
          </div>
          <div className="accordian">
            <div className="question" onClick={() => toggle(3)}>
              <p>I'm From A Non-IT Field. Can I Really Do This Programme?</p>
              <img
                className={`arrow ${open === 3 ? "rotate" : ""}`}
                src="src/assets/arrow.svg"
                alt="arrow"
              />
            </div>
            {open === 3 && (
              // <div className={`answer ${open === 3 ? "show" : ""}`}>
              <div className="answer">
                <p>
                  Absolutely! This Program Helps Anyone, From Any Background,
                  Transition Into IT Smoothly.
                </p>
              </div>
            )}
          </div>
          <div className="accordian">
            <div className="question" onClick={() => toggle(4)}>
              <p>What Kind Of Support Can I Expect ?</p>
              <img
                className={`arrow ${open === 4 ? "rotate" : ""}`}
                src="src/assets/arrow.svg"
                alt="arrow"
              />
            </div>
            {open === 4 && (
              // <div className={`answer ${open === 4 ? "show" : ""}`}>
              <div className="answer">
                <p>
                  You'll Have Access To Our Community Of Learners And Mentors,
                  Where You Can Ask Questions And Collaborate. The Program Also
                  Includes Guidance From The AI Director, Resume-Building
                  Support, And Mock Interview Sessions To Prepare You For The
                  Job Market.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
