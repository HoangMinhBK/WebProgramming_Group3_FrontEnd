import { createContext, useContext } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const theme = {
    aliceBlue: "rgba(227, 242, 253, 1)",
    uranianBlue: "rgba(187, 222, 251, 1)",
    lightSkyBlue: "rgba(144, 202, 249, 1)",
    blueJeans: "rgba(100, 181, 246, 1)",
    blueJeans2: "rgba(66, 165, 245, 1)",
    dodgerBlue: "rgba(33, 150, 243, 1)",
    bleuDeFrance: "rgba(30, 136, 229, 1)",
    brightNavyBlue: "rgba(25, 118, 210, 1)",
    greenBlue: "rgba(21, 101, 192, 1)",
    cobaltBlue: "rgba(13, 71, 161, 1)",
  };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export const useCustomTheme = () => useContext(ThemeContext);
