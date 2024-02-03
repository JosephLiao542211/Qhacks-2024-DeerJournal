import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

api_key = os.environ.get('.env')
client = OpenAI(api_key=api_key)

def chat_history_add(model, conversation_history, user_r):
    conversation_history.append({"role": "user", "content": user_r})
    
    # Send the entire conversation history to the model
    response = OpenAI.ChatCompletion.create(
        model=model,
        messages=conversation_history,
        api_key=api_key
    )
    
    # Extract the assistant's reply from the response
    assistant_reply = response.choices[0].message["content"]
    
    # Append the assistant's reply to the conversation history
    conversation_history.append({"role": "assistant", "content": assistant_reply})
    
    return assistant_reply