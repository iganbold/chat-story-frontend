export const EpisodeData = {
  episodeName: "Episode 1",
  style: {
    "0001": {
      dialogDirection: "incoming",
      dialogBackgroundColor: "#FD6FFF",
      dialogColor: "white",
      avatarBackgroundColor: "#dfdfdf"
    },
    "0002": {
      dialogDirection: "outgoing",
      dialogBackgroundColor: "#9c88ff",
      dialogColor: "white",
      avatarBackgroundColor: "#dfdfdf"
    }
  },
  actors: {
    "0001": { name: "Jack", initial: "J", about: "Jack yara yara about" },
    "0002": { name: "Kelly", initial: "K", about: "Kelly yara yara about" }
  },
  dialogs: [
    {
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "Tik Tok"
      }
    },
    {
      type: "TYPING_DIALOG",
      actorID: "0001"
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "Hello"
      }
    },
    {
      type: "TYPING_DIALOG",
      actorID: "0002"
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
      actorID: "0002",
      payload: {
        value: "Send and Receive Free Text Messages from your PC for FREE."
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "beyond alphanumeric text to include multimedia messages"
      }
    },
    {
      type: "TYPING_DIALOG",
      actorID: "0001"
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
      actorID: "0001",
      payload: {
        value: "I will be there at 6pm."
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "👍 See you soon"
      }
    },
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
      actorID: "0001",
      payload: {
        value: "I will be there at 6pm."
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "👍 See you soon"
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
      actorID: "0001",
      payload: {
        value: "I will be there at 6pm."
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "👍 See you soon"
      }
    }
  ]
};
