import { useState } from "react";
import Warning from "./Warning";

const TextArea = ({ text, setText }) => {
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarningText("No script tags allowed!");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No @ Symbol allowed!");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }
    setText(newText);
  };
  return (
    <div className='textarea'>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder='Enter your Text'
        spellCheck='false'
      />
      {warningText ? <Warning warningText={warningText} /> : null}
    </div>
  );
};

export default TextArea;
