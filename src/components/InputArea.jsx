import React, { useState } from "react";

function InputArea(props) {
  const [text, setText] = useState("");

  function onChanged(event) {
    console.log(event.target.value);
    return setText(event.target.value);
  }

  return (
    <div className="form">
      <input onChange={onChanged} type="text" value={text} />
      <button
        onClick={() => {
          props.onAdd(text);
          setText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
