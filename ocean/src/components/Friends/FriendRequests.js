import React, { useState, useEffect } from "react";
import { getFriendRequests, handleFriendRequests } from "../../actions/actions";
import { Container, Flex, TextBox } from "../../pages/styles/style.js";
import FriendSearchBar from "../../components/InputForms/FriendSearchBar.js";
import { SampleFriendRequests } from "../../utils/sampleData";
import RequestRow from "./RequestRow.js";

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
    console.log("getreq");
    let friendRequests;
    friendRequests = await getFriendRequests();
    // friendRequests = SampleFriendRequests;
    if (!friendRequests) {
      setLoading(false);
      return <TextBox size="title">No Results</TextBox>;
    }

    setFriendRequests(friendRequests);
    setLoading(false);
  };

  const handleDeclineRequest = async (reqHandle) => {
    let result = await handleFriendRequests(reqHandle, false);
    alert(result.message);
    getRequests();
  };

  const handleAccept = async (reqHandle) => {
    let result = await handleFriendRequests(reqHandle, true);
    console.log(result);
    alert(result.message);
    getRequests();
  };

  if (loading)
    return (
      <TextBox size="xxl" color="white">
        Loading Data...
      </TextBox>
    );

  return (
    <>
      <FriendRequestsContainer>
        <FriendRequestTitleBox>FRIEND REQUESTS</FriendRequestTitleBox>
        {friendRequests.length === 0 ? (
          <TextBox size="title">No Friend Requests </TextBox>
        ) : (
          <RequestsListContainer>
            {friendRequests.map((singleRequest, ind) => (
              <RequestRow
                key={ind}
                requestHandle={singleRequest}
                handleAccept={handleAccept}
                handleDeclineRequest={handleDeclineRequest}
              />
            ))}
          </RequestsListContainer>
        )}
      </FriendRequestsContainer>
    </>
  );
}

export default FriendRequests;
