import React from "react";
import "./why.css";
function Why() {
  return (
    <>
      <div className="why_container">
        <div className="why_head">
          <h1>
            Why Corporates Choose <span className="hlt">CloudAge</span> ?
          </h1>
        </div>
        <div className="why_content">
          <div className="why_point">
            <h3>Values</h3>
            <p>
              Candidates value innovation, continuous learning, and
              problem-solving. They seek roles that allow them to contribute to
              meaningful technological advancements that impact the world.
            </p>
          </div>
          <div className="why_point">
            <h3>Morals</h3>
            <p>
              They believe in using technology ethically, ensuring privacy,
              security, and equity in digital solutions, while fostering
              inclusive and sustainable practices in the tech industry.
            </p>
          </div>
          <div className="why_point">
            <h3>Beliefs</h3>
            <p>
              They believe that technology is the backbone of future progress,
              and mastering IT skills will enable them to drive societal change
              and stay at the forefront of innovation.
            </p>
          </div>
          <div className="why_point">
            <h3>Desires</h3>
            <p>
              Candidates desire financial security, professional growth, and the
              ability to work on cutting-edge projects, along with the freedom
              and flexibility often associated with IT careers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Why;
