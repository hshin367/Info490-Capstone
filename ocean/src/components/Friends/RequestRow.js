import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Flex, TextBox } from "../../pages/styles/style.js";
import FriendSearchBar from "../InputForms/FriendSearchBar.js";
import {
  SingleRequestContainer,
  SingleRequestFrdName,
  RequestBtn,
} from "./style.js";

/**
 *
 * @param {props.requestHandle} = name of the friend who sent the request
 * @returns
 */
function RequestRow(props) {
  console.log(props);

  let imgsrc =
    "https://firebasestorage.googleapis.com/v0/b/restore-uw.appspot.com/o/no-img.png?alt=media&token=bde54978-8782-4222-b454-ccba77170d3d";
  return (
    <SingleRequestContainer>
      <img src={imgsrc} width="50px" height="50px" alt="user" />
      <Flex flexDirection="column" padding="0 0 0 1.5rem">
        <SingleRequestFrdName>{props.requestHandle}</SingleRequestFrdName>
        <Flex padding="0">
          <RequestBtn
            decline
            onClick={() => props.handleDeclineRequest(props.requestHandle)}
          >
            Decline
          </RequestBtn>
          <RequestBtn onClick={() => props.handleAccept(props.requestHandle)}>
            Accept
          </RequestBtn>
        </Flex>
      </Flex>
    </SingleRequestContainer>
  );
}

export default RequestRow;
