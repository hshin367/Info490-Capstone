import React, { useState, useEffect } from "react";
import { getFriends } from "../../actions/actions";
import FriendSearchBar from "../InputForms/FriendSearchBar.js";
import {
  SearchUserContainer,
  AddFriendTitleBox,
  SearchContainer,
} from "./style.js";

function AddUsers() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e);
  };

  return (
    <SearchUserContainer>
      <AddFriendTitleBox>Add Friend</AddFriendTitleBox>
      <SearchContainer>
        <div className="add-user" style={{ width: "100%" }}>
          <FriendSearchBar handleChange={handleChange} />
        </div>
      </SearchContainer>
    </SearchUserContainer>
  );
}

export default AddUsers;
