import os
from openai import OpenAI
from dotenv import load_dotenv

import models

api_key = os.environ.get('.env')
client = OpenAI(api_key=api_key)

load_dotenv()

# Defines the initial prompts and responses
first_q = 'How was your day today? Recount what happened.'
first_sys_r_positive = "That's great to hear!"
first_sys_r_negative = "Oh no! I'm sorry to hear that!"
gratitude_q = "What are three things you are grateful for today?"
vision_month_q = "What are 3 things you want to accomplish this month?"
vision_tomorrow_q = "What is one thing you want to do better tomorrow?"

def main():
  conversation_history = []

  with open("open-ai/chatgpt/test.txt", "r") as file:
    text = file.read()


  # Asks the first question to the user
  print(first_q)

  happy = True

  # Collects the first user response to the question
  first_user_r = "I learned about fractions, I had math class with Ms. G, and I played soccer with my friends and recess \
  and almost won the game of soccer we played."
  horrible_r = "I got in trouble for talking in class, I got a bad grade on my math test, and I lost my favorite pencil."

  # Detects mood from first question asked
  first_q_chat_r = models.mood_detection_model(first_user_r)
  conversation_history = first_q_chat_r[1][0]
  # Responds to the child's mood with premade response and asks custom follow up question #1
  if first_q_chat_r[0] == "happy":
    print("That's great to hear!")
  else:
    print("Oh no! I'm sorry to hear that!")
  second_q_sys = models.first_follow_up_q("gpt-3.5-turbo", first_q_chat_r[1][0])
  print(second_q_sys)

  # Adds response from second_user from first follow-up question to conversation history
  second_q_user_r = "I enjoyed learning about fractions I thought it was really interesting. I was slightly disappointed we didn't \
  win the soccer game but I was happy with how close the match was."
  conversation_history.append({"role": "assistant", "content": second_q_sys})
  conversation_history.append({"role": "user", "content": second_q_user_r})
  third_q_sys = models.second_follow_up_q("gpt-3.5-turbo", conversation_history)
  print(third_q_sys)

  #Adds response from third_user from second follow-up question to conversation history
  third_q_user_r = "I think I learned a lot about playing soccer and I think it showed me the importance the journey of what I do, \
  rather than just focusing on the destination of my goals."
  conversation_history.append({"role": "assistant", "content": third_q_sys})
  conversation_history.append({"role": "user", "content": third_q_user_r})

  # Follows up with user after second-follow up question response and asks about goals
  print(models.r_second_follow_up_q("gpt-3.5-turbo", conversation_history))
  print(gratitude_q)
main()