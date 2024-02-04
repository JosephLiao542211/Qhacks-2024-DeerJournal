import fs from "fs";
import path from "path";
import OpenAI from "openai";

const openai = new OpenAI();

const input_text = "file_name";

const speechFile = path.resolve("./created_audio/" + input_text + ".mp3");

async function tts() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1-hd",
    voice: "nova",
    input: "Today is a wonderful day to build something people love!",
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}
tts();