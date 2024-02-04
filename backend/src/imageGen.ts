import OpenAI from "openai";
require('dotenv').config({ path: './.env' });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

export default async function generateImage(prompt: string) {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: "3d art cartoon " + prompt,
    n: 1,
    size: "1024x1024",
  });
  const image_url = response.data[0].url;
  return image_url;
}
