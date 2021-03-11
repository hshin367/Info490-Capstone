// import logo from './logo.svg';
import React, { Component } from "react";
import Routes from "./Routes/index.js";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { Layout } from "antd";
import theme from "./theme";
import UserContext from "./components/User/User.js";

import Navbar from "./components/Navbar/navbar.js";

// TODO : consider shifting to antd layouts for responsivenss.
const { Header, Footer, Sider, Content } = Layout;

const user = {
  name: "sampleName",
  registeredEvents: [],
};

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
      <UserContext.Provider value={user}>
        <GlobalStyle />
        <div className="wrapper">
          <ThemeProvider theme={theme}>
            <Navbar />
            <Routes />
            {/* <Footer /> */}
          </ThemeProvider>
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
