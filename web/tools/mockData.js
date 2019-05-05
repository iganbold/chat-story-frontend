const story = {
  description: "story description",
  genres: ["genre 1", "genre 2", "genre 3"],
  coverImageURL: "https://text.io/coverimage.png",
  actors: {
    "0001": { name: "Jack", initial: "J", about: "Jack yara yara about" },
    "0002": { name: "Kelly", initial: "K", about: "Kelly yara yara about" }
  },
  episodes: [
    {
      episodeName: "Episode 1",
      style: {
        "0001": {
          dialogDirection: "incoming",
          bubbleBackgroundColor: "#D4D8DC",
          bubbleTextColor: "black",
          avatarBackgroundColor: "#EFEFEF"
        },
        "0002": {
          dialogDirection: "outgoing",
          bubbleBackgroundColor: "#2f89fc",
          bubbleTextColor: "white",
          avatarBackgroundColor: "#EFEFEF"
        }
      },
      dialogs: [
        {
          type: "TEXT_DIALOG",
          actorID: "0001",
          payload: {
            value: "Hello"
          }
        },
        {
          type: "TEXT_DIALOG",
          actorID: "0002",
          payload: {
            value: "hi"
          }
        },
        {
          type: "TEXT_DIALOG",
          actorID: "0001",
          payload: {
            value: "How are you?"
          }
        },
        {
          type: "TEXT_DIALOG",
          actorID: "0002",
          payload: {
            value: "I am good. How are you? What time are you coming?"
          }
        },
        {
          type: "TEXT_DIALOG",
          actorID: "0002",
          payload: {
            value: "I will be there at 6pm."
          }
        },
        {
          type: "TEXT_DIALOG",
          actorID: "0001",
          payload: {
            value: "👍 See you soon"
          }
        }
      ]
    }
  ]
};

const theme = {
  animationDialog: {
    transformX: true ? "0%" : "100%"
  },

  bubble: {
    radius: true ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
    color: "white",
    background: "blue"
  },

  actorAvatar: {
    visibility: false ? "hidden" : "visible",
    background: "grey",
    margin: {
      left: true ? "5px" : "2.5px",
      right: !true ? "5px" : "2.5px"
    }
  },

  actorName: {
    display: false ? "none" : "block",
    margin: {
      left: true ? "45px" : "0px",
      right: !true ? "45px" : "0px"
    }
  }
};

module.exports = {
  story: story,
  episode: story.episodes[0],
  actors: story.actors,
  theme: theme
};
