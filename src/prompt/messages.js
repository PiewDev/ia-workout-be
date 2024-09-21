import { TRAINING_LEVELS } from '../constants/promptConstants.js';
import { QUESTIONS_KEYS, PRINCIPAL_OPTIONS } from '../constants/questionsConstants.js';

const messages = {
  [PRINCIPAL_OPTIONS.CURRENTLY_TRAINING]: (props) =>
            `Necesito que me generes una rutina de entrenamiento para un ${getLevel(props[QUESTIONS_KEYS.MONTHS_TRAINING])} que ya entrena hace ${props[QUESTIONS_KEYS.MONTHS_TRAINING]} meses y que desea ${props[QUESTIONS_KEYS.TRAINING_FOCUS]}.`,
  [PRINCIPAL_OPTIONS.BEGINNER]: (props) =>
            `Necesito que me generes una rutina de entrenamiento para alguien que se está iniciando que desea ${props[QUESTIONS_KEYS.TRAINING_FOCUS]}.`,
  [PRINCIPAL_OPTIONS.RETAKE]: (props) =>
            `Necesito que me generes una rutina de entrenamiento para un ${getLevel(props[QUESTIONS_KEYS.MONTHS_TRAINING])} que entrenó ${props[QUESTIONS_KEYS.MONTHS_TRAINING]} meses pero está sin entrenar hace ${props[QUESTIONS_KEYS.MONTHS_WITHOUT_TRAINING]} meses y que desea ${props[QUESTIONS_KEYS.TRAINING_FOCUS]}.`
};

function getLevel (monthsTraining) {
  if (monthsTraining >= 24) {
    return TRAINING_LEVELS.ADVANCED;
  }
  if (monthsTraining >= 12) {
    return TRAINING_LEVELS.MEDIUM;
  }
  return TRAINING_LEVELS.BEGGINER;
}

export default messages;
