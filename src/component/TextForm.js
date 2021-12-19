import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log(text);

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text changed to UPPERCASE', 'success');

  };

  const handleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };

  const handleLowerCase = (event) => {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
    props.showAlert('Text changed to lowercase', 'success');
  }

  const copyText = (event) => {
    let copiedText = document.getElementById('myBox');
    let extraSpaces = text.split(/[ ] +/);
    setText(extraSpaces.join(' '));
    copiedText.select();
    navigator.clipboard.writeText(copiedText.value);
    props.showAlert('Copied to Clipboard', 'success');

  }

  const removeChange = (event) => {
    setText("");
    props.showAlert('TextBox cleared', 'success');

  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-secondary" onClick={handleLowerCase}>
          Convert to lowercase
        </button>
        <button className="btn btn-success" onClick={copyText}>
          Copy Text to clipboard
        </button>
        <button className="btn btn-danger" onClick={removeChange}>
          Remove
        </button>
      </div>
      <div className="container my-3">
        <p>
          <a className="btn btn-info" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-controls="collapseExample">
            Your text summary
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <p className="my-2">
            {text.split(" ").length} <i>words</i> and {text.length}{" "}
            <i>characters</i>
          </p>
          <p>{(0.008 * text.split(" ").length).toFixed(1)} minutes read time</p>
        </div>

        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in the text box to preview here"}</p>
      </div>


    </>
  );
}
