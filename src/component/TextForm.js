import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };

  const removeChange = (event) => {
    setText("");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-danger mx-4">Remove</button>
      </div>
      <div className="container my-3">
        <button className="btn btn-info">Your text summary</button>
        <p>
          {text.split(" ").length} <i>words</i> and {text.length}{" "}
          <i>characters</i>
        </p>
        <p>{(0.008 * text.split(" ").length).toFixed(1)} minutes read time</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
