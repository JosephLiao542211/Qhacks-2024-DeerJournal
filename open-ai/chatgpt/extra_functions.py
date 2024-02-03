import os
import openai
from dotenv import load_dotenv

load_dotenv()

api_key = os.environ.get('.env')
client = openai.OpenAI(api_key=api_key)

def chat_history_add(model, conversation_history, user_r):
    conversation_history.append({"role": "user", "content": user_r})
    conversation_history.append({"role": "assistant", "content": user_r})
    
    # Send the entire conversation history to the model
    response = client.chat.completions.create(
        model=model,
        messages=conversation_history
    )
    # Extract the assistant's reply from the response
    assistant_reply = response.choices[0].message.content

    return assistant_reply