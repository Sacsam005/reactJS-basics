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

  const removeChange = () => {
    setText("");
  };

  const [text, setText] = useState("");

  return (
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
      <button className="btn-primary" onClick={handleUpClick}>
        Convert to UPPERCASE
      </button>
      <button className="btn-danger mx-4" onClick={removeChange}>
        Remove
      </button>
    </div>
  );
}
