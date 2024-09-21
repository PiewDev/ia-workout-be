import { QUESTIONS_KEYS } from '../constants/questionsConstants.js';
import messages from './messages.js';
import { isValidString } from '../utils/validations.js';

export class PromptService {
  getPrompt = async (responses) => {
    if (!Array.isArray(responses) || responses.length === 0) {
      throw new Error('Invalid input data');
    }

    const prompt = messages[responses[QUESTIONS_KEYS.TRAINING_LEVEL]](responses);
    if (!isValidString(prompt)) {
      throw new Error('Generated prompt is invalid');
    }

    return prompt;
  };
}
