import axios from "axios";
import api from "../constants/APIEndPoints";

const POST = "POST";
const GET = "GET";

// TODO : additional error display on the webpage
export const getEvents = async (query) => {
  try {
    const res = await axios.get(api.base + api.events.getEvents, {
      params: { query },
    });
    return res;
  } catch (err) {
    console.log("Failed to get Events");
  }
};

// posts a request for registering to the event with a specific eventId
export const registerForEvent = async (eventId) => {
  // token
  const userToken = JSON.parse(localStorage.getItem("user-info")).token;
  const reqConfig = {
    headers: {
      authorization: `Bearer ${userToken}`,
    },
  };

  try {
    const res = await axios({
      method: "POST",
      url: api.base + api.events.registerforEvent + eventId + "/going",
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    });
    return res;
  } catch (err) {
    if (err.response) {
      console.log(
        "Failed to post event to mark as registered for a user Error Status: " +
          err.response.status
      );
      return err.response;
    }
  }
};

export const getGoingEvents = async () => {
  const userToken = JSON.parse(localStorage.getItem("user-info")).token;

  try {
    const res = await axios({
      method: "GET",
      url: api.base + api.events.eventsGoing,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log("Failed to get Events");
  }
};

export const unRegisterForEvent = async (eid) => {
  const userToken = JSON.parse(localStorage.getItem("user-info")).token;

  try {
    const res = await axios({
      method: "POST",
      url: api.base + api.events.eventsUnGoing.replace("eid", eid),
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    console.log("Failed to unregister for an event");
  }
};

export const inviteFriend = async (eName, recipient) => {
  const userToken = JSON.parse(localStorage.getItem("user-info")).token;

  try {
    const res = await axios({
      method: "POST",
      url: api.base + api.events.inviteFriend,
      headers: {
        authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
      data: {
        eventName: eName,
        recipient: recipient,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    console.log("Failed to send an invitation");
  }
};

/**
 *
 * @returns fish images url.
 */
export const getFishes = async () => {
  const userToken = JSON.parse(localStorage.getItem("user-info")).token;

  try {
    const res = await axios({
      method: "GET",
      url: api.base + api.aquarium.getAllFishes,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log("Failed to get Events");
  }
};

/**
 * post fishes
 * { "type": "fishName" }
 */
export const addFishes = async () => {
  const userToken = JSON.parse(localStorage.getItem("user-info")).token;

  try {
    const res = await axios({
      method: "POST",
      url: api.base + api.aquarium.addFishes,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log("Failed to get Events");
  }
};

export const getFriends = async () => {
  const userToken = JSON.parse(localStorage.getItem("user-info")).token;

  try {
    const res = await axios({
      method: "GET",
      url: api.base + api.user.getAllFriends,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    console.log("Failed to get Friends List");
  }
};

export const getFriendRequests = async () => {
  const userToken = JSON.parse(localStorage.getItem("user-info")).token;

  try {
    const res = await axios({
      method: GET,
      url: api.base + api.user.getFriendRequests,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    console.log("Failed to get Friends List");
  }
};

/**
 * input: 
 * {
	  "friend": "friendtest3",
	  "accept": true
   }

 * @returns message of the status 
 */
export const handleFriendRequests = async (friend, isAccepted) => {
  const userToken = JSON.parse(localStorage.getItem("user-info")).token;

  try {
    const res = await axios({
      method: POST,
      url: api.base + api.user.handleFriendRequest,
      headers: {
        authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
      data: {
        friend: friend,
        accept: isAccepted,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    console.log("Failed to handle friend request");
  }
};
