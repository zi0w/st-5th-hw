import { createContext, useEffect, useState } from "react";

export const TextContext = createContext(null);

const TextProvider = ({ children }) => {
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <TextContext.Provider value={{ texts, onAddText }}>
      {children}
    </TextContext.Provider>
  );
};

export default TextProvider;
