

# Qhacks-2024: Deer, Journal

Devpost: [Our Full Project here](https://devpost.com/software/deer-journal?ref_content=user-portfolio&ref_feature=in_progress)


![Alt text](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/752/272/datas/gallery.jpg)
![Alt text](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/752/268/datas/gallery.jpg)
![Alt text](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/752/267/datas/gallery.jpg)



## Results: Top 5 Project Overall


### Inspiration 
With an increasing demand for therapists and mental health services and a limited supply of these resources, mental health has become a growing issue plaguing Canada, especially our youth. An estimated 1.6 million children and teenagers suffer from mental health issues, yet only 20% will receive adequate care to address this. The goal of “Deer, Journal” is to create an approachable, child-friendly resource for children to develop their self-reflective ability, their goal setting habits, and mental-health coping strategies so they are comfortable with vulnerability and becoming the best version of themselves.

### What it does 
“Deer, Journal” provides an approachable, child-friendly way for children to get into the habit of journaling, practicing self-reflection, and becoming vulnerable. Through interacting with a deer stuffie, children can recount their day and express their daily feelings through guided, AI-powered prompts. The prompts are child-friendly and adapted depending on the child’s daily conversation history. Additionally, the user can tell the AI their goals for the week and the AI will create a unique, weekly vision board catered towards that child. 

### How we built it 
“Deer, Journal” is primarily built off prompting OpenAI API's turbo-gpt-3.5 model to create questions and responses towards children to guide them in journalling and self-reflection. The vision board image generation uses the DALL-E-3 image generation model from the OpenAI API. The mobile app on the frontend was built using Expo and React native, and the backend was built using Node.JS and Express.JS. 

### Challenges we ran into 
The biggest problems that we ran into were backend errors. We spent a lot of time trying to understand and trying to integrate and connect everything to each other. Furthermore, the OpenAI API documentation was incorrect in some places so it took some research to figure out out the correct syntax. Plus, we were too ambitious with the amount of features we wanted to add to “Deer, Journal” which made us focus on features that were much less important to the overall product. Also, a last-minute change caused us to convert all our code related to the text generation from Python to JavaScript.

### Accomplishments that we're proud of 
We are proud of the fact that we got a functioning app and got the key features down. Additionally, the UI turned out much better than expected and all OpenAI API integration was highly successful. 

### What we learned 
We learned that next time a majority of us need to better familiar ourselves with the backend because its important was certaintely undermined originally. Plus, we need to avoid feature creeping and trying to add too many features at once without tackling the primary use and functionality of the product.

### What's next for Deer, Journal
What’s next for “Deer, Journal” is optimizing its primary AI-prompted journaling features and eventually adding the features we originally wanted to add. This includes computer vision to better recognize facial features so that mood analysis can be completed, and computer vision and help guide users through grounding games.
