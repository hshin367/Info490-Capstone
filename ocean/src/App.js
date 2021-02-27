// import logo from './logo.svg';
import React, { Component } from "react";
import Routes from "./Routes/index.js";

import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

// import "./index.css";
import Footer from "./Footer";
// import TweenOne from "rc-tween-one";
import Navbar from "./components/Navbar/navbar.js";
// import Banner from "./components/Banner/banner.js";

import GlobalStyle from "./GlobalStyle";

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
  handleScroll = (event) => {
    console.log("hi");
    let e = event.target;
    this.setState(
      {
        scrollPosition: window.pageYOffset,
      },
      this.checkScroll
    );
  };

  checkScroll = () => {
    if (this.state.scrollPosition < 250) {
      console.log(this.state.scrollPosition);
      this.setState({
        displayScroll: true,
      });
    } else {
      this.setState({
        displayScroll: false,
      });
    }
  };

  handleClickScrollButton = () => {
    window.scroll({
      top: 570,
      left: 0,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes />

          <Footer />
          {/* {this.state.displayScroll ? (
              <div className="scrolly">
                <TweenOne
                  animation={{
                    y: 15,
                    yoyo: true,
                    repeat: -1,
                    duration: 1000,
                  }}
                >
                  <img
                    src="img/chevron.svg"
                    alt="scroll-arrow"
                    onClick={this.handleClickScrollButton}
                  />
                </TweenOne>
              </div>
            ) : null} */}
        </ThemeProvider>
      </div>
    );
  }
}

class UserProfile extends Component {
  profileHandleClick = (event) => {
    this.props.switchUser();
  };

  render() {
    return (
      <div className="profile" onClick={this.profileHandleClick}>
        <img src={this.props.user.pic} alt="profile pic" />
        <h1>{this.props.user.user.toUpperCase()}</h1>
      </div>
    );
  }
}

class MenuController extends Component {
  aquariumHandleClick = (event) => {
    this.props.switchMenuStatus("aquarium");
  };

  eventsHandleClick = (event) => {
    this.props.switchMenuStatus("events");
  };

  aquarium = () => {
    if (this.props.menuStatus === "aquarium") {
      return (
        <h1 className="selected" onClick={this.aquariumHandleClick}>
          AQUARIUM
        </h1>
      );
    } else {
      return <h1 onClick={this.aquariumHandleClick}>AQUARIUM</h1>;
    }
  };

  events = () => {
    if (this.props.menuStatus === "events") {
      return (
        <h1 className="selected" onClick={this.eventsHandleClick}>
          EVENTS
        </h1>
      );
    } else {
      return <h1 onClick={this.eventsHandleClick}>EVENTS</h1>;
    }
  };

  render() {
    return (
      <div className="menu-controller">
        <nav>
          <ul className="menu-list">
            <ul>{this.aquarium()}</ul>
            <ul>{this.events()}</ul>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
