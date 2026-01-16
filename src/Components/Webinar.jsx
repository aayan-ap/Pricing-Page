import React, { useState } from "react";
import "./webinar.css";

function Webinar() {
  const data = [
    {
      head: "1st Webinar - 2026 Jan",
      url: "src/assets/webinar_pic1.png",
    },
    {
      head: "2nd Webinar - 2026 Jan",
      url: "src/assets/webinar_pic1.png",
    },
    {
      head: "Project Architecture",
      url: "src/assets/webinar_pic2.png",
    },
  ];

  const [play, setPlay] = useState(false);

  return (
    <>
      <div className="webinar_container">
        {data.map((item, index) => {
          return (
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
          );
        })}
      </div>
    </>
  );
}

export default Webinar;
