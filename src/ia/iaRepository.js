import {
  GoogleGenerativeAI
} from '@google/generative-ai';
import dotenv from 'dotenv';
import generationConfig from './configuration/promptConfiguration.js';
import { systemInstruction } from './configuration/googleSistemInstructions.js';
dotenv.config();

const apiKey = process.env.GOOGLE_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  systemInstruction
});

async function chatSession () {
  const session = await model.startChat({
    generationConfig
  });
  return session;
}

export default chatSession;
