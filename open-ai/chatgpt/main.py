import os
from openai import OpenAI
from dotenv import load_dotenv

import models
import extra_functions

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
  first_user_r = "I had a great day today! I learned about fractions, I had math class with Ms. G, and I played soccer with my friends and recess \
  and almost won the game of soccer we played."

  mood_detection_model = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a super enthusiastic, journalling assistant talking to a child. \
    Try to keep your answers to two sentences or less with a focus on conciseness and endearment. \
    You provide prompts to help children journal and whenever they tell you how they feel, \
    you respond extremely positively and encouragingly referring to them as 'you'. \
    If the string 'DO_NOT_REPLY' is found at the end of the prompt, entered reply with 'no_response'.\
    "},
    {"role": "user", "content": text}
  ]
  )

  print(mood_detection_model.choices[0].message)

main()