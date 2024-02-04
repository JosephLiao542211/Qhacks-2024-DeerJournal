const backend_ip = "10.216.51.147:3000"

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

export function getFirstQuestion() {
  fetch("http://"+backend_ip+":3000/api/chat/getQuestion", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data.history;
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });
}

export function getFollowUp(previousQuestions, previousAnswers) {
  const requestBody = {
    previousQuestions: previousQuestions,
    previousAnswers: previousAnswers,
  };
  fetch("http://"+backend_ip+":3000/api/getFollowUp", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
  }

export function getFollowUpQuestion(previousQuestions, previousAnswers) {
    fetch("http://"+backend_ip+":3000/api/getFollowUpQuestion", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });
}
