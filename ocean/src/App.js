import React, { Component } from "react";
import Routes from "./Routes/index.js";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";
// import UserContext from "./components/User/User.js";

import Navbar from "./components/Navbar/navbar.js";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      events: this.props.events,
      menuStatus: "aquarium",
      scrollPosition: 0,
      displayScroll: true,
      themeMode: window.localStorage.getItem("theme") || "dark",
    };
  }

  toggleTheme = (style) => {
    window.localStorage.setItem("theme", style);
    this.setState({
      themeMode: style,
    });
  };

  setDefaultTheme = () => {
    window.localStorage.setItem("theme", "dark");
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const localTheme = window.localStorage.getItem("theme");
    localTheme
      ? this.setState({
          themeMode: localTheme,
        })
      : this.setDefaultTheme();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle mode={this.state.themeMode} />
        <div className="wrapper">
          <Navbar toggleTheme={this.toggleTheme} bgCol={this.state.themeMode} />
          <Routes />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
