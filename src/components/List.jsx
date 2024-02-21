import { useState, useRef } from "react";

function List() {
  const inputRef = useRef(null);
  const [inputs, setInputs] = useState([]);

  const handleClick = () => {
    const newInput = inputRef.current.value;
    setInputs((prevInputs) => [...prevInputs, newInput]);
    inputRef.current.value = ""; // clear the input field
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Button</button>
      <ul>
        {inputs.map((input, index) => (
          <li key={index}>{input}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
