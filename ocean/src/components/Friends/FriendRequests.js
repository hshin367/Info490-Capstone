import React, { useState, useEffect } from "react";
import { getFriendRequests } from "../../actions/actions";
import { Container, Flex, TextBox } from "../../pages/styles/style.js";
import FriendSearchBar from "../../components/InputForms/FriendSearchBar.js";
import { SampleFriendRequests } from "../../utils/sampleData";
import {
  FriendBox,
  FriendRequestsContainer,
  RequestsListContainer,
  FriendRequestTitleBox,
} from "./style.js";
function FriendRequests() {
  const [friendRequests, setFriendRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRequests();
  }, []);

  const getRequests = async () => {
    let friendRequests;
    // friendRequests = await getFriendRequests();
    friendRequests = SampleFriendRequests;
    if (!friendRequests) {
      setLoading(false);
      return <TextBox size="title">No Results</TextBox>;
    }

    setFriendRequests(friendRequests);
    setLoading(false);
  };

  if (loading) return <TextBox size="title">Loading Data...</TextBox>;

  return (
    <>
      <FriendRequestsContainer>
        <FriendRequestTitleBox>FRIEND REQUESTS</FriendRequestTitleBox>
        {friendRequests.length === 0 ? (
          <TextBox size="title">No Friend Requests </TextBox>
        ) : (
          <RequestsListContainer>
            {friendRequests.map((singleRequest, ind) => (
              <FriendBox>{singleRequest}</FriendBox>
            ))}
          </RequestsListContainer>
        )}
      </FriendRequestsContainer>
    </>
  );
}

export default FriendRequests;
