// src/context/CodeInputContext.jsx
import { createContext, useState, useContext } from "react";

const CodeInputContext = createContext();

export const CodeInputProvider = ({ children }) => {
  const [code, setCode] = useState("");

  return (
    <CodeInputContext.Provider value={{ code, setCode }}>
      {children}
    </CodeInputContext.Provider>
  );
};

export const useCodeInput = () => useContext(CodeInputContext);
