import { TRAINING_LEVELS } from '../constants/promptConstants.js';
import { QUESTIONS_KEYS, TRAINING_LEVEL_OPTIONS } from '../constants/questionsConstants.js';

const messages = {
  [PRINCIPAL_OPTIONS.CURRENTLY_TRAINING]: (props) => {
    const { trainingFocus, monthsTraining, level } = extractProps(props);
    return `Necesito que me generes una rutina de entrenamiento para un ${level} que ya entrena hace ${monthsTraining} meses y que desea ${trainingFocus}.`;
  },
  [PRINCIPAL_OPTIONS.BEGINNER]: (props) => {
    const { trainingFocus } = extractProps(props);
    return `Necesito que me generes una rutina de entrenamiento para alguien que se está iniciando que desea ${trainingFocus}.`;
  },
  [PRINCIPAL_OPTIONS.RETAKE]: (props) => {
    const { trainingFocus, monthsTraining, monthsWithoutTraining, level } = extractProps(props);
    return `Necesito que me generes una rutina de entrenamiento para un ${level} que entrenó ${monthsTraining} meses pero está sin entrenar hace ${monthsWithoutTraining} meses y que desea ${trainingFocus}.`;
  }
};

function extractProps (props) {
  const trainingFocus = props[QUESTIONS_KEYS.TRAINING_FOCUS];
  const monthsTraining = props[QUESTIONS_KEYS.MONTHS_TRAINING];
  const monthsWithoutTraining = props[QUESTIONS_KEYS.MONTHS_WITHOUT_TRAINING];
  const level = getLevel(props[QUESTIONS_KEYS.MONTHS_TRAINING]);
  return { trainingFocus, monthsTraining, monthsWithoutTraining, level };
}

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
