export function testBackend() {
  fetch("http://10.216.196.221:3000/api/test", {
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
  fetch("http://10.216.196.221:3000/api/getQuestion", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data.question;
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });
}

export function getFollowUpQuestion(previousQuestions, previousAnswers) {
    fetch("http://10.216.196.221:3000/api/getFollowUpQuestion", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data.question;
      })
      .catch((error) => {
        console.error("Error:", error);
        return null;
      });
  }
