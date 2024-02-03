import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

api_key = os.environ.get('.env')
client = OpenAI(api_key=api_key)

def mood_detection_model(user_r):
  mood_detection_model = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
      {"role": "system", "content": "You are a higly attuned and emotionally receptive empath to children. \
       You categorize all the responses that are inputted to you as either 'happy' or 'sad'. \
       All the responses inputted towards you are children in one of the two emotionally states mentioned above \
       recounting their day. \
       You respond with either 'happy' or 'sad' depending on what mood you believe the child is feeling about their day.\
       If the string 'DO_NOT_REPLY' is found at the end of the prompt, entered reply with 'no_response'. \
        "},
      {"role": "user", "content": user_r}
    ]
  )
  if mood_detection_model.choices[0].message != "happy" or mood_detection_model.choices[0].message != "sad":
    raise ValueError("The model's response is not 'happy' or 'sad'.")
  return mood_detection_model.choices[0].message