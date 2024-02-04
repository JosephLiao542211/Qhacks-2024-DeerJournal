import OpenAI from "openai";
import { moodAnalyzer, secondQ, thirdQ, thirdQR, gratitudeQR, goalDifferentiation, goalResponse, visionBoard } from './models.mjs';

const openai = new OpenAI();

const first_q = 'How was your day today? Recount what happened.'
const first_sys_r_positive = "That's great to hear!"
const first_sys_r_negative = "Oh no! I'm sorry to hear that!"
const gratitude_q = "What are three things you are grateful for today?"
const vision_month_q = "What are 3 things you want to accomplish in a month?"
const vision_board_into = "Here is your vision board for the next month:"
const first_user_r = "I learned about fractions, I had math class with Ms. G, and I played soccer with my friends and recess \
and almost won the game of soccer we played."
const horrible_r = "I got in trouble for talking in class, I got a bad grade on my math test, and I lost my favorite pencil."
const second_q_user_r = "I enjoyed learning about fractions I thought it was really interesting. I was slightly disappointed we didn't \
win the soccer game but I was happy with how close the match was."
const third_q_user_r = "I think I learned a lot about playing soccer and I think it showed me the importance the journey of what I do, \
rather than just focusing on the destination of my goals."
const vision_board_r = "I want to get better at soccer, I want to learn more about fractions, and I want to make more friends."

async function main() {
  await thirdQ()

}

main();