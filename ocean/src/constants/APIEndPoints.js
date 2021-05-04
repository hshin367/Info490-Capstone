const api = {
  base: "https://us-central1-restore-uw.cloudfunctions.net/api",

  events: {
    getEvents: "/events",
    registerforEvent: "/event/",
    eventsGoing: "/events/going",
    eventsNotGoing: "/events/notgoing",
  },

  aquarium: {
    getAllFishes: "/aquarium/getAllFishForUser",
    addFishes: "/aquarium/fish/add",
  },
};

export default api;
