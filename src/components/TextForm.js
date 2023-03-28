import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  // to change the state
  // setText("new text")
  function ChangeToUppercase() {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const ChangeToLowercase = () => {
    let Text2 = text.toLowerCase();
    setText(Text2);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <div className={`container text-${props.mode==='light'?'dark':'light'}` }>
        <div className="container">
        <div className="my-5">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h2>{props.heading}</h2>
          </label>
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="exampleFormControlTextarea1"
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={ChangeToUppercase}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={ChangeToLowercase}>
          Convert To Lowercase
        </button>
      </div>
       <div className="container">
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters in the
          textbox
        </p>
        <p>it takes {0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
