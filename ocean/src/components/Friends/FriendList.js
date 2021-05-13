import React, { useState, useEffect } from "react";
import { getFriends } from "../../actions/actions";
import { Container, Flex, TextBox } from "../../pages/styles/style.js";
import FriendSearchBar from "../../components/InputForms/FriendSearchBar.js";
import { SampleFriends } from "../../utils/sampleData";
import {
  FriendBox,
  FriendListContainer,
  ListContainer,
  TitleBox,
  AddFriendBtn,
} from "./style.js";
function FriendList() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (searchTerm !== "") {
      renderSearchResult();
    } else {
      // in prod. there would be friends in db
      // in dev. there would be sampleD
      setSearchResult(friends);
    }
  }, [searchTerm]);

  useEffect(() => {
    getFriendsList();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e);
  };

  const getFriendsList = async () => {
    let friendsList;
    // friendsList = await getFriends();
    friendsList = SampleFriends;
    if (!friendsList) {
      setLoading(false);
      return (
        <TextBox size="xxl" color="white">
          No Results
        </TextBox>
      );
    }

    setFriends(friendsList);
    setLoading(false);
    setSearchResult(friendsList);
  };

  if (loading)
    return (
      <TextBox size="xxl" color="white">
        Loading Data...
      </TextBox>
    );

  // searches for event names
  const renderSearchResult = () => {
    console.log(searchTerm);
    let searchResult = friends.filter((frnd) => {
      const nameIndex = frnd
        ? frnd.toLowerCase().indexOf(searchTerm.toLowerCase())
        : "";
      return nameIndex > -1;
    });
    setSearchResult(searchResult);
  };

  return (
    <FriendListContainer>
      <TitleBox>FRIENDS</TitleBox>
      <FriendSearchBar handleChange={handleChange} />
      {searchResult.length === 0 ? (
        <TextBox size="xxl" color="white">
          No Results{" "}
        </TextBox>
      ) : (
        <ListContainer>
          {searchResult.map((singleFriend, ind) => (
            <FriendBox key={ind}>
              {singleFriend}
              <AddFriendBtn>Add Friend</AddFriendBtn>
            </FriendBox>
          ))}
        </ListContainer>
      )}
    </FriendListContainer>
  );
}

export default FriendList;
