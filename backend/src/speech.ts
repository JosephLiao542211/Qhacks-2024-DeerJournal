import OpenAI from "openai";
require('dotenv').config();
const openai = new OpenAI();

export async function tts(text: string) {
  try {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1-hd",
      voice: "nova",
      input: text,
    });
    const buffer = Buffer.from(await mp3.arrayBuffer());
    return buffer;
  } catch (error) {
    console.error(error);
  }
}
