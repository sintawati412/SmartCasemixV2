import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    return JSON.parse(localStorage.getItem("darkmode")) || false;
  });

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
    localStorage.setItem("darkmode", JSON.stringify(dark));
  }, [dark]);

  function toggleTheme() {
    setDark(!dark);
  }

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}