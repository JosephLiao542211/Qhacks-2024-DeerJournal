import os
from openai import OpenAI
from dotenv import load_dotenv

import extra_functions
import models

api_key = os.environ.get('.env')
client = OpenAI(api_key=api_key)

load_dotenv()

# Defines the initial prompts and responses
first_q = 'How was your day today? Recount what happened.'
first_sys_r_positive = "That's great to hear!"
first_sys_r_negative = "Oh no! I'm sorry to hear that!"
gratitude_q = "What are three things you are grateful for today?"
vision_month_q = "What are 3 things you want to accomplish in a month?"
vision_board_into = "Here is your vision board for the next month:"

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

  # Adds response from user from first follow-up question to conversation history
  second_q_user_r = "I enjoyed learning about fractions I thought it was really interesting. I was slightly disappointed we didn't \
  win the soccer game but I was happy with how close the match was."
  conversation_history.append({"role": "assistant", "content": second_q_sys})
  conversation_history.append({"role": "user", "content": second_q_user_r})
  third_q_sys = models.second_follow_up_q("gpt-3.5-turbo", conversation_history)
  print(third_q_sys)

  #Adds response from user from second follow-up question to conversation history
  third_q_user_r = "I think I learned a lot about playing soccer and I think it showed me the importance the journey of what I do, \
  rather than just focusing on the destination of my goals."
  conversation_history.append({"role": "assistant", "content": third_q_sys})
  conversation_history.append({"role": "user", "content": third_q_user_r})

  # Responds to second follow up question response and asks gratitude question
  second_follow_up_r_r = models.r_second_follow_up_q("gpt-3.5-turbo", conversation_history)
  print(second_follow_up_r_r)
  print(gratitude_q)

  # Adds response from third_user from second follow-up question to conversation history, gratitude question, and response
  gratitude_r = "I am grateful for my friends, my family, and my teacher."
  conversation_history.append({"role": "assistant", "content": second_follow_up_r_r})
  conversation_history.append({"role": "assistant", "content": gratitude_q})
  conversation_history.append({"role": "user", "content": gratitude_r})

  # Responds to gratitude question and asks vision question. User responds to vision question
  r_gratitude_q = models.r_gratitude_q("gpt-3.5-turbo", conversation_history)
  print(r_gratitude_q)
  print("Weekly Vision Board: " + vision_month_q)

  # Adds response from gratitude question and adds vision board question to conversation history
  conversation_history.append({"role": "assistant", "content": r_gratitude_q})
  conversation_history.append({"role": "assistant", "content": vision_month_q})

  # Child's response to vision board question and vision board question; appends both to conversation history and introduces vision board
  vision_board_r = "I want to get better at soccer, I want to learn more about fractions, and I want to make more friends."
  vision_board_r_goals = models.goal_differentiation("gpt-3.5-turbo", vision_board_r)
  conversation_history.append({"role": "user", "content": vision_board_r})
  goal_response = models.goal_response("gpt-3.5-turbo", conversation_history)
  print(goal_response)
  print(vision_board_into)

  #Creates vision board images for user
  vision_goals = vision_board_r_goals.split('\n')
  image1 = models.vision_board_img(vision_goals[0])
  image2 = models.vision_board_img(vision_goals[1])
  image3 = models.vision_board_img(vision_goals[2])
  extra_functions.save_display_img(image1)
  extra_functions.save_display_img(image2)
  extra_functions.save_display_img(image3)

main()