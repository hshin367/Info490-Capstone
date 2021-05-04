import React, { useState, useEffect } from 'react'
import { getFriends } from "../../actions/actions";
import { Container, Flex, TextBox } from "../../pages/styles/style.js";
import FriendSearchBar from "../../components/InputForms/FriendSearchBar.js";
import { SampleFriends} from "../../helpers/sampleData";
import {
    FriendBox,
    FriendListContainer,
    ListContainer,
    TitleBox
  } from "./style.js";
function FriendList() {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFriendsList();
      }, []);

    const getFriendsList = async () => {
        let friendsList;
        // friendsList = await getFriends();
        friendsList = SampleFriends
        if (!friendsList) {
            setLoading(false);
            return (
              <TextBox size="title">
                No Results
              </TextBox>
            );
          }

        setFriends(friendsList);
        setLoading(false);
    }

    if (loading) return <TextBox size="title">Loading Data...</TextBox>;
    
    return (
      <FriendListContainer>
        <TitleBox>
          FRIENDS
        </TitleBox>
        <FriendSearchBar />
        { friends.length === 0 ? (
          <TextBox size="title">
            No Results{" "}
          </TextBox>
        ) : (
          <ListContainer>
          {friends.map(
            (singleFriend, ind) =>
                  <FriendBox>{singleFriend}</FriendBox>
          )}
          </ListContainer>
        )}
      </FriendListContainer>
    )
}

export default FriendList
