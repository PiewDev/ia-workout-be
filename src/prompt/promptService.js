import { QUESTIONS_KEYS, PRINCIPAL_OPTIONS,TRAINING_LEVELS } from "../utils/constants.js";

const messages = {
    [PRINCIPAL_OPTIONS.CURRENTLY_TRAINING]: (props) => 
            `Necesito que me generes una rutina de entrenamiento para un ${getLevel(props[QUESTIONS_KEYS.MONTHS_TRAINING])} que ya entrena hace ${props[QUESTIONS_KEYS.MONTHS_TRAINING]} meses y que desea ${props[QUESTIONS_KEYS.TRAINING_FOCUS]}.`,
    [PRINCIPAL_OPTIONS.BEGINNER]: (props) => 
            `Necesito que me generes una rutina de entrenamiento para alguien que se está iniciando que desea ${props[QUESTIONS_KEYS.TRAINING_FOCUS]}.`,
    [PRINCIPAL_OPTIONS.RETAKE]: (props) => 
            `Necesito que me generes una rutina de entrenamiento para un ${getLevel(props[QUESTIONS_KEYS.MONTHS_TRAINING])} que entrenó ${props[QUESTIONS_KEYS.MONTHS_TRAINING]} meses pero está sin entrenar hace ${props[QUESTIONS_KEYS.MONTHS_WITHOUT_TRAINING]} meses y que desea ${props[QUESTIONS_KEYS.TRAINING_FOCUS]}.`,
};

function getLevel(monthsTraining){
  if (monthsTraining >= 24){
    return TRAINING_LEVELS.ADVANCED;
  }
  if (monthsTraining >= 12){
    return TRAINING_LEVELS.MEDIUM;
  }
  return TRAINING_LEVELS.BEGGINER;
}

function generatePrompt(data) {
  const responses = {};
  data.map(item => {
      responses[item.questionId] = item.answer;
  });
  const prompt = messages[responses[QUESTIONS_KEYS.TRAINING_LEVEL]](responses);

  if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
      throw new Error('Generated prompt is invalid');
  }
  return prompt;
}

export class PromptService {
  constructor () {}

  getPrompt = async (data) => {
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Invalid input data');
    }
    var prompt = generatePrompt(data);

    return prompt;
  }
}