import os
import openai
from dotenv import load_dotenv
from io import BytesIO
from PIL import Image
import matplotlib.pyplot as plt
import requests
import json

import models

model = "gpt-3.5-turbo"

load_dotenv()
conversation_history =[]
api_key = os.environ.get('.env')
client = openai.OpenAI(api_key=api_key)

def save_display_img(img_url):
    # Download the image
    image_response = requests.get(img_url)
    image = Image.open(BytesIO(image_response.content))

    # Display the image (for Jupyter Notebooks or similar environments)
    plt.imshow(image)
    plt.axis('off')  # Hide the axis
    plt.show()

def create_json(conversation_history):
    data = {}
    conversation = []
    q_string = 'question'
    for i in range(len(conversation_history)):
        conversation.append(conversation_history[i]['role'])
        conversation.append(conversation_history[i]['content'])
        if len(conversation) == 4:
            data[q_string +  str(i + 1)] = conversation
            conversation = []

    with open('conversation_history.json', 'w') as file:
        json.dump(data, file)

def add_conv(conv):
    conversation_history.append(conv)

def return_conv():
    return conversation_history



