import axios from "axios";
import api from "../constants/APIEndPoints";

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
    return res.data;
  } catch (err) {
    if (err.response) {
      console.log(
        "Failed to post event to mark as registered for a user Error Status: ",
        err.response.status
      );
      console.log("Contents ", err.response.data);
    }

    if (err.message) {
      console.log("Wrongful request setup", err.message);
    }

    if (err.request) {
      console.log("Wrongful network request", err.reqest);
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
