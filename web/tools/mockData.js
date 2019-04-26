const story = {
  description: "story description",
  genres: ["genre 1", "genre 2", "genre 3"],
  coverImageURL: "https://text.io/coverimage.png",
  actors: [
    {
      id: "0001",
      name: "Jack",
      initial: "J",
      about: "Jack yara yara about"
    },
    {
      id: "0002",
      name: "Kelly",
      initial: "K",
      about: "Kelly yara yara about"
    }
  ],
  episodes: [
    {
      episodeName: "Episode 1",
      style: {
        "0001": {
          actorInitial: "J",
          dialogDirection: "outgoing",
          dialogBackgroundColor: "#4cd137",
          dialogColor: "white",
          avatarBackgroundColor: "#dfdfdf"
        },
        "0002": {
          actorInitial: "K",
          dialogDirection: "incoming",
          dialogBackgroundColor: "#9c88ff",
          dialogColor: "white",
          avatarBackgroundColor: "#dfdfdf"
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
module.exports = {
  story: story
};
