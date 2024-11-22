import { useState } from "react";
import { useDispatch } from "react-redux";
import { addText } from "../redux/slices/textSlice";

function TextInput() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const onAddText = (text) => {
    dispatch(addText(text));
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddText(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TextInput;
