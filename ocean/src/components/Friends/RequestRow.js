import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types";
import { getFriends } from "../../actions/actions";
import { Container, Flex, TextBox } from "../../pages/styles/style.js";
import FriendSearchBar from "../InputForms/FriendSearchBar.js";
import {
    SingleRequestContainer,
    RequestImage
  } from "./style.js";

function RequestRow(props) {
    let imgsrc = "https://firebasestorage.googleapis.com/v0/b/restore-uw.appspot.com/o/no-img.png?alt=media&token=bde54978-8782-4222-b454-ccba77170d3d"
    return (
        <SingleRequestContainer>
            <img src={imgsrc} width="5em" height="5em"/>
            {props.requestHandle}
            <button> Decline </button>
            <button> Accept </button>
        </SingleRequestContainer>
    )
}

export default RequestRow