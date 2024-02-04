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

export function getFollowUp(previousQuestions, previousAnswers) {
  const requestBody = {
    previousQuestions: previousQuestions,
    previousAnswers: previousAnswers,
  };
  fetch("http://10.216.196.221:3000/api/getFollowUp", {
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
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });
}

export async function getImageUrl(prompt) {
    const requestBody = {
      prompt: prompt,
    };
    try {
      const response = await fetch("http://10.216.196.221:3000/api/imageGen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      return data.imageUrl;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
