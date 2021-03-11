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
