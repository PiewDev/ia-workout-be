import generatePrompt from "../../prompGeneration/generatePromp.js";

export class PromptService {
  constructor () {
  }

  getPrompt = async (data) => {
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Invalid input data');
    }
    var prompt = generatePrompt(data);
    return prompt;
  }
}