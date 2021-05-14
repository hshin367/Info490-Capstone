const api = {
  base: "https://us-central1-restore-uw.cloudfunctions.net/api",

  events: {
    getEvents: "/events",
    registerforEvent: "/event/",
    eventsGoing: "/events/going",
    eventsUnGoing: `/event/eid/ungoing`,
    inviteFriend: "/event/inviteFriend",
  },

  aquarium: {
    getAllFishes: "/aquarium/getAllFishForUser",
    addFishes: "/aquarium/fish/add",
  },

  user: {
    getAllFriends: "/user/getAllFriends",
    getFriendRequests: "/user/getAllRequests",
  },
};

export default api;
