import axios from "axios";
import api from "../constants/APIEndPoints";

export const getEvents = async (query) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(api.base + api.events.getEvents);
    return res;
  } catch (err) {
    console.log("Failed to get Events");
  }
};
