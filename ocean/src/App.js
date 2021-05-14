import React, { useState, useEffect, createContext } from "react";
import Routes from "./Routes/index.js";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";
import Navbar from "./components/Navbar/navbar.js";
import { convertStrToBool } from "./utils/convertStrToBool";
// import UserContext from "./components/User/User.js";

let boolDisplayKelps = convertStrToBool(window.localStorage.getItem("kelps"));

export const AppContext = createContext();
const App = () => {
  const [themeMode, setThemeMode] = useState(
    window.localStorage.getItem("theme") || "dark"
  );
  const [displayKelps, setDisplayKelps] = useState(
    boolDisplayKelps === undefined ? true : boolDisplayKelps
  );

  const toggleTheme = (style) => {
    window.localStorage.setItem("theme", style);
    setThemeMode(style);
  };

  const setDefaultTheme = () => {
    window.localStorage.setItem("theme", "dark");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setThemeMode(localTheme) : setDefaultTheme();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle mode={themeMode} />
      <div className="wrapper">
        <AppContext.Provider value={[displayKelps, setDisplayKelps]}>
          <Navbar toggleTheme={toggleTheme} bgCol={themeMode} />
          <Routes />
        </AppContext.Provider>
      </div>
    </ThemeProvider>
  );
};

export default App;
