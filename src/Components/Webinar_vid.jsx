import React, { useState } from "react";
import "./webinar_vid.css";

function Webinar_vid() {
  // const data = [
  //   {
  //     head: "1st Webinar - 2026 Jan",
  //     url: "src/assets/webinar_pic1.png",
  //   },
  //   {
  //     head: "2nd Webinar - 2026 Jan",
  //     url: "src/assets/webinar_pic1.png",
  //   },
  //   {
  //     head: "Project Architecture",
  //     url: "src/assets/webinar_pic2.png",
  //   },
  // ];

  const [play, setPlay] = useState(false);

  return (
    <>
      {/* <div className="webinar_container">
      
            <div className="webinar_content" key={index}>
              <div className="webinar_head">
                <p>{item.head}</p>
              </div>
              <div className="webinar_sec">
                <img
                  className="webinar_thumbnail"
                  src={item.url}
                  alt="Thumbnail"
                ></img>
              </div>
            </div>
      </div> */}

      <div className="webinar_container">
        <div className="webinar_content">
          <div className="webinar_head">
            <p>1st Webinar - 2026 Jan</p>
          </div>
          <div className="webinar_sec">
            <video className="webinar_vid" controls poster="src/assets/webinar_pic1.png">
              <source src="src/assets/Sample_coding.mp4" type="video/mp4"></source>
              
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Webinar_vid;
