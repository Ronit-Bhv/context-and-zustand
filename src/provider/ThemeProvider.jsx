import { useState, useMemo } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const value = useMemo(
    () => ({
      mode,
      toggle: () => {
        console.log("toggle theme");
        setMode(current => (current === "light" ? "dark" : "light"));
      }
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}