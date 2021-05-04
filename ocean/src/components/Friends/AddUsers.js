import React, { useState, useEffect } from 'react'
import { getFriends } from "../../actions/actions";
import { Container, Flex, TextBox } from "../../pages/styles/style.js";
import FriendSearchBar from "../InputForms/FriendSearchBar.js";
import {
    SearchUserContainer,
    AddFriendTitleBox,
    SearchContainer
  } from "./style.js";

function AddUsers() {
    
    return (
      <SearchUserContainer>
        <AddFriendTitleBox>
          Add Friend
        </AddFriendTitleBox>
        <SearchContainer>
          <FriendSearchBar />
        </SearchContainer>
      </SearchUserContainer>
    )
}

export default AddUsers
