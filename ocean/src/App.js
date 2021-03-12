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
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  switchMenuStatus = (newStatus) => {
    if (newStatus === "aquarium" || newStatus === "events") {
      //this.setState({ menuStatus: newStatus });
      this.setState((currState) => {
        let stateChanges = { menuStatus: newStatus };
        return stateChanges;
      });
    }
  };

  //Scroll Stuff
  // handleScroll = (event) => {
  //   console.log("hi");
  //   let e = event.target;
  //   this.setState(
  //     {
  //       scrollPosition: window.pageYOffset,
  //     },
  //     this.checkScroll
  //   );
  // };

  // checkScroll = () => {
  //   if (this.state.scrollPosition < 250) {
  //     console.log(this.state.scrollPosition);
  //     this.setState({
  //       displayScroll: true,
  //     });
  //   } else {
  //     this.setState({
  //       displayScroll: false,
  //     });
  //   }
  // };

  // handleClickScrollButton = () => {
  //   window.scroll({
  //     top: 570,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };

  render() {
    return (
      <>
        <GlobalStyle />
        <div className="wrapper">
          <ThemeProvider theme={theme}>
            <Navbar />
            <Routes />
          </ThemeProvider>
        </div>
      </>
    );
  }
}

export default App;
