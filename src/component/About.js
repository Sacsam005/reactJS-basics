import React, { useState } from "react";

export default function About(props) {
  const [style, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggleStyleDark = () => {
    if (style.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "#042743",
      });
    } else {
      setMyStyle({
        color: "whit",
        backgroundColor: "#042743",
      })
    }
  }

  const toggleStyleLight = () => {
    if (style.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      })
    }
  }

  return (
    <div className="container" style={{borderColor: props.mode}}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={style}>
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={style}>
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={style}>
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div>
      </div>

      <button
        onClick={toggleStyleDark}
        type="button"
        className="btn btn-dark my-3">
        Dark Mode
      </button>
      <button
        type="button"
        onClick={toggleStyleLight}
        className="btn btn-light mx-3"
        style={{ border: "1px solid black" }}>
        Light Mode
      </button>
    </div>
  );
};

