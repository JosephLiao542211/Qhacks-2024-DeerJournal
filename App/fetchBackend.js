import * as FileSystem from "expo-file-system";
import base64 from "react-native-base64";

let backend_url = process.env.EXPO_PUBLIC_BACKEND_URL;
console.log("----------------BACKENDURL", backend_url);
backend_url = backend_url.endsWith("/")
  ? backend_url.slice(0, -1)
  : backend_url;
console.log("----------------BACKENDURL", backend_url);

export function testBackend() {
  fetch(backend_url + "/api/test", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data.message;
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });
}

export async function getFirstQuestion() {
  try {
    const response = await fetch(backend_url + "/api/chat/getQuestion", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data.response.content;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getNext(questionNumber, chatlog, response) {
  if (response == true) {
    return await getResponse(questionNumber, chatlog);
  }
  if (questionNumber === 1) {
    var requestBody = { history: chatlog };
    try {
      const response = await fetch(backend_url + "/api/chat/getQ2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      return data.response.content;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
  if (questionNumber === 2) {
    var requestBody = { history: chatlog };
    try {
      const response = await fetch(backend_url + "/api/chat/getQ3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      return data.response.content;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
  if (questionNumber === 3) {
    var requestBody = { history: chatlog };
    try {
      const response = await fetch(backend_url + "/api/chat/getGrateQ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      return data.response.content;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
  if (questionNumber === 4) {
    var requestBody = { history: chatlog };
    try {
      const response = await fetch(backend_url + "/api/chat/getGoalQ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      return data.response.content;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
}

export async function getResponse(questionNumber, chatlog) {
  var requestBody = { history: chatlog };
  if (questionNumber === 1) {
    try {
      const response = await fetch(backend_url + "/api/chat/getMood", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      return data.response.content;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  } else if (questionNumber == 5) {
    try {
      const response = await fetch(backend_url + "/api/chat/getGoodbye", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      return data.response.content;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  } else if (questionNumber > 3) {
    try {
      const response = await fetch(backend_url + "/api/chat/gradResponse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      return data.response.content;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  } else if (questionNumber > 1) {
    try {
      const response = await fetch(backend_url + "/api/chat/getResponse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      return data.response.content;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
}

export async function summarize(chatlog) {
  var requestBody = { history: chatlog };
  try {
    const response = await fetch(backend_url + "/api/chat/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    return data.response.content;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getImageUrl(prompt) {
  const requestBody = {
    prompt: prompt,
  };
  try {
    const response = await fetch(backend_url + "/api/imageGen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    console.log("returningUrl")
    return data.imageUrl;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getTts(text) {
  try {
    const response = await fetch(backend_url + "/api/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }), // send JSON data in the request body
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    let reader = new FileReader();
    reader.readAsDataURL(blob);
    let base64data = null;
    reader.onloadend = function () {
      base64data = reader.result;
      // console.log(base64data);
    };
    
    return base64data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
