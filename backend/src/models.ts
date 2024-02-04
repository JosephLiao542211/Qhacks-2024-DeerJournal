import OpenAI  from "openai";

require('dotenv').config()

const openai = new OpenAI();

const first_sys_r_positive = "That's great to hear!"
const first_sys_r_negative = "Oh no! I'm sorry to hear that!"
const gratitude_q = "What are three things you are grateful for today?"
const vision_month_q = "What are 3 things you want to accomplish in a month?"
const goodbye = "Great thank you! See you tomorrow!"

function getFirst() {
    return {
        role: "assistant",
        content: "How was your day today? Recount what happened."
    }
}

function getGratefulQ() {
    return {
        role: "assistant",
        content: gratitude_q
    }
} 

function getGoalQ() {
    return {
        role: "assistant",
        content: vision_month_q
    }
} 

function getGoodbye() {
    return {
        role: "assistant",
        content: goodbye
    }
} 

async function getMood(prev_conversation_history: any) {
    var req = prev_conversation_history[prev_conversation_history.length-1].content
    var res = "";
    const mood = await moodAnalyzer(req);

    if (mood == 'happy') {
        res = first_sys_r_positive
    } else {
        res = first_sys_r_negative
    }
    return {
        role: "assistant",
        content: res
    }
}

async function moodAnalyzer(userR: string) {
  const moodModel = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a highly attuned and emotionally receptive empath to children. You categorize all the responses that are inputted to you as either 'happy' or 'sad'. All the responses inputted towards you are children in one of the two emotionally states mentioned above recounting their day. You respond with either 'happy' or 'sad' depending on what mood you believe the child is feeling about their day. If the string 'DO_NOT_REPLY' is found at the end of any prompts or chat history, reply only with the string 'no_response'."
      },
      {
        role: "user",
        content: userR
      }
    ]
  });

  return moodModel.choices[0].message.content;
}

async function secondQ(model: string, prev_conversation_history: any){
    var new_conversation_history = [...prev_conversation_history];
    new_conversation_history.push({"role": "system", "content":
    "You are a super enthusiastic and positive journalling assistant talking to a child. \
    You are also extremely concise and endearing with your responses, limiting them to \
    two sentences or less. \
    You ask follow up questions about the children you are talking to's day and in particular, \
    how certain events made a child feel and what lead to certain events happening if you deem \
    those events were within their control. \
    "});
    new_conversation_history.push({"role": "user", "content": "Now that I have told you about my day, specifically my last response, \
    present me with a response \
    that asks me how I felt about the events that happened today or why I think a specific event \
    that was within my control occured. \
    "});
    var response = await openai.chat.completions.create({
        model: model,
        messages: new_conversation_history
    });
    var assistant_reply = response.choices[0].message;
    return assistant_reply;
}

async function thirdQ(model: string, prev_conversation_history:any){
    var new_conversation_history = [...prev_conversation_history];
    new_conversation_history.push({"role": "system", "content":
    "You are still a super enthusiastic, positive, concise, and endearing journalling assistant talking to a child. \
    You are also still limiting your responses to two sentences or less. \
    Ask a follow up question to the last prompt the user entered and make sure that your question does \
    not relate to any previous questions you asked the user.\
    "});
    var response = await openai.chat.completions.create({
        model: model,
        messages: new_conversation_history
    });
    var assistant_reply = response.choices[0].message;
    return assistant_reply;
}

async function getQR(model: string, prev_conversation_history: any){
    var new_conversation_history = [...prev_conversation_history];
    new_conversation_history.push({"role": "system", "content":
    "You are still a super enthusiastic, positive, concise, and endearing journalling assistant talking to a child. \
    You are limiting your responses to one sentence. \
    Give a positive and endearing response to the user's most recent prompt .\
    "});
    var response = await openai.chat.completions.create({
        model: model,
        messages: new_conversation_history
    });
    var assistant_reply = response.choices[0].message;
    return assistant_reply;
}

async function gratitudeQR(model: string, prev_conversation_history: any){
    var new_conversation_history = [...prev_conversation_history];
    new_conversation_history.push({"role": "system", "content":
    "You are still a super enthusiastic, positive, concise, and endearing journalling assistant talking to a child. \
    You are limiting your responses to one sentence. \
    You just asked the user 'what are three things you are grateful for today'.\
    Find the three things they are grateful for in their response and write a response that is endearing and positive \
    that is two sentences or less. \
    "});
    var response = await openai.chat.completions.create({
        model: model,
        messages: new_conversation_history
    });
    var assistant_reply = response.choices[0].message;
    return assistant_reply;
}

async function goalDifferentiation(model:string, user_goals:string){
    var response = await openai.chat.completions.create({
        model: model,
        messages: [{"role": "system", "content":
        "You are now a professional who only reads user prompts that contain three goals that they want to accomplish\
        in the next month. You need to find these three goals and then \
        reiterate the user's three goals that they gave you into a javascript array or strings \
        "},
        {"role": "user", "content": user_goals}]
    });
    var assistant_reply = response.choices[0].message.content;
    return assistant_reply;
}

async function goalResponse(model: string, prev_conversation_history:any){
    var new_conversation_history = [...prev_conversation_history];
    new_conversation_history.push({"role": "system", "content":
    "You are still a super enthusiastic, positive, concise, and endearing journalling assistant talking to a child. \
    Your responses are strictly limited to 1 sentence. You can not go over this limit. \
    You just asked the user 'what are 3 things they want to accomplish this month?'.\
    Give a very positive response to their 3 goals that they want to accomplish. \
    "});
    var response = await openai.chat.completions.create({
        model: model,
        messages: new_conversation_history
    });
    var assistant_reply = response.choices[0].message.content;
    return assistant_reply;
}

    // async function visionBoard(prompt:any){
    // var response = await openai.createImage({
    //     model: "dall-e-3",
    //     prompt: "visualize the following children's goal oriented towards a child and try to avoid using text in the image: " + prompt,
    //     n: 1,
    //     size: "1024x1024",
    // });
    // var image_url = response.data.data[0].url;
    // return image_url;
    // }

export { getFirst, getGratefulQ, getGoalQ, getGoodbye, getMood, moodAnalyzer, secondQ, thirdQ, getQR, gratitudeQR, goalResponse, goalDifferentiation };