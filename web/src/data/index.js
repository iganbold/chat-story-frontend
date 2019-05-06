export const EpisodeData = {
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
  actors: {
    "0001": { name: "Jack", initial: "J", about: "Jack yara yara about" },
    "0002": { name: "Kelly", initial: "K", about: "Kelly yara yara about" }
  },
  dialogs: [
    {
      id: 1,
      type: "IMAGE_DIALOG",
      actorID: "0001",
      payload: {
        url: "https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif"
      },
      trigger: 2
    },
    {
      id: 1,
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "Tik Tok",
        options: [
          { value: 1, label: "Number 1", trigger: "12" },
          { value: 2, label: "Number 2", trigger: "15" },
          { value: 3, label: "Number 3", trigger: "20" }
        ]
      },
      trigger: 2
    },
    {
      id: 2,
      type: "TYPING_DIALOG",
      actorID: "0001",
      trigger: 3
    },
    {
      id: 3,
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "Happy Birthday!!!",
        animatedEmoji: "🎂"
      }
    },
    {
      id: 4,
      type: "TYPING_DIALOG",
      actorID: "0002"
    },
    {
      id: 5,
      type: "IMAGE_DIALOG",
      actorID: "0002",
      payload: {
        url:
          "https://i.pinimg.com/originals/dc/7c/b8/dc7cb8c24233f9eb7f8b1147f8000103.jpg"
      }
    },
    {
      id: 5,
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "hi"
      }
    },
    {
      id: 6,
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "Send and Receive Free Text Messages from your PC for FREE.",
        animatedEmoji: "🦄"
      }
    },
    {
      id: 7,
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "beyond alphanumeric text to include multimedia messages"
      }
    },
    {
      id: 8,
      type: "TYPING_DIALOG",
      actorID: "0001"
    },
    {
      id: 9,
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "How are you?"
      }
    },
    {
      id: 10,
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "I am good. How are you? What time are you coming?"
      }
    },
    {
      id: 11,
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "I will be there at 6pm."
      }
    },
    {
      id: 12,
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "👍 See you soon",
        animatedEmoji: "🍩"
      }
    },
    {
      id: 13,
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "Hello"
      }
    },
    {
      id: 14,
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "hi"
      }
    },
    {
      id: 15,
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "How are you?"
      }
    },
    {
      id: 16,
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "I am good. How are you? What time are you coming?"
      }
    },
    {
      id: 17,
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "I will be there at 6pm."
      }
    },
    {
      id: 18,
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "👍 See you soon"
      }
    },
    {
      id: 19,
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "How are you?"
      }
    },
    {
      id: 20,
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "I am good. How are you? What time are you coming?"
      }
    },
    {
      id: 21,
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "I will be there at 6pm."
      }
    },
    {
      id: 22,
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "👍 See you soon"
      },
      end: true
    }
  ]
};
