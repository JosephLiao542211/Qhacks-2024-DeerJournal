const backend_ip = "100.99.245.43:3000";

export function testBackend() {
  fetch("http://"+backend_ip+"/api/test", {
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
    const response = await fetch("http://" + backend_ip + "/api/chat/getQuestion", {
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
    var requestBody = {history: chatlog};
    try {
      const response = await fetch("http://" + backend_ip + "/api/chat/getQ2", {
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
    var requestBody = {history: chatlog};
    try {
      const response = await fetch("http://" + backend_ip + "/api/chat/getQ3", {
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
    var requestBody = {history: chatlog};
    try {
      const response = await fetch("http://" + backend_ip + "/api/chat/getGrateQ", {
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
    var requestBody = {history: chatlog};
    try {
      const response = await fetch("http://" + backend_ip + "/api/chat/getGoalQ", {
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
  var requestBody = {history: chatlog};
  if (questionNumber === 1) {
    try {
      const response = await fetch("http://" + backend_ip + "/api/chat/getMood", {
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
  else if (questionNumber == 5) {
    try {
      const response = await fetch("http://" + backend_ip + "/api/chat/getGoodbye", {
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
  else if (questionNumber > 3) {
    try {
      const response = await fetch("http://" + backend_ip + "/api/chat/gradResponse", {
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
  else if (questionNumber > 1){
    try {
      const response = await fetch("http://" + backend_ip + "/api/chat/getResponse", {
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
  var requestBody = {history: chatlog};
  try {
    const response = await fetch("http://" + backend_ip + "/api/chat/summarize", {
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