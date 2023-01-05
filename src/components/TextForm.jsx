import { useState } from "react";

const TextForm = (props) => {
  const handleEvent = (event) => {
    setText(event.target.value);
  };
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCase = () => {
    let textNew = text.toLowerCase();
    setText(textNew);
  };
  const clearText = () => {
    setText("");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = () => {
    let nextText = text.split(/[ ]+/);
    setText(nextText.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1 htmlFor="">Enter text here:</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleEvent}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={upperCase}>
          UpperCase
        </button>
        <button className="btn btn-success mx-1" onClick={lowerCase}>
          LowerCase
        </button>
        <button className="btn btn-success mx-1" onClick={clearText}>
          ClearAll
        </button>
        <button className="btn btn-success mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-success mx-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3">
        <h2>Text summary:</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
};

export default TextForm;
