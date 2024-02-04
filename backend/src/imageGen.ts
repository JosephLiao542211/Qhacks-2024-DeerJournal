import OpenAI from "openai";

require('dotenv').config();

const openai = new OpenAI();

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
