const api = {
  base: "https://us-central1-restore-uw.cloudfunctions.net/api",

  events: {
    getEvents: "/events",
    registerforEvent: "/event/",
    eventsGoing: "/events/going",
    eventsNotGoing: "/events/notgoing",
  },
};

export default api;