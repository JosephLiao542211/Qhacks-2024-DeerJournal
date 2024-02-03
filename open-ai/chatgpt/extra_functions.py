import os
import openai
from dotenv import load_dotenv
from io import BytesIO
from PIL import Image
import matplotlib.pyplot as plt
import requests

import models

model = "gpt-3.5-turbo"

load_dotenv()
mood_conversation_history =[]
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

