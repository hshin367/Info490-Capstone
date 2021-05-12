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
      themeMode: "light",
    };
  }

  toggleTheme = () => {
    this.setState({
      themeMode: this.state.themeMode === "light" ? "dark" : "light",
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  switchMenuStatus = (newStatus) => {
    if (
      newStatus === "aquarium" ||
      newStatus === "events" ||
      newStatus === "friends"
    ) {
      //this.setState({ menuStatus: newStatus });
      this.setState((currState) => {
        let stateChanges = { menuStatus: newStatus };
        return stateChanges;
      });
    }
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle mode={this.state.themeMode} />
        <div className="wrapper">
          <Navbar toggleTheme={this.toggleTheme} />
          <Routes />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
