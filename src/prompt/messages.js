import { TRAINING_LEVELS } from '../constants/promptConstants.js';
import { QUESTIONS_KEYS, TRAINING_LEVEL_OPTIONS } from '../constants/questionsConstants.js';

const messages = {
  [TRAINING_LEVEL_OPTIONS.CURRENTLY_TRAINING]: (props) => {
    const { trainingFocus, monthsTraining, personalData } = extractProps(props);
    return `Necesito que me generes una rutina de entrenamiento para ${personalData} que ya entrena hace ${monthsTraining} meses y su deseo es: ${trainingFocus}.`;
  },
  [TRAINING_LEVEL_OPTIONS.BEGINNER]: (props) => {
    const { trainingFocus, personalData } = extractProps(props);
    return `Necesito que me generes una rutina de entrenamiento para ${personalData} que se está iniciando su deseo es: ${trainingFocus}.`;
  },
  [TRAINING_LEVEL_OPTIONS.RETAKE]: (props) => {
    const { trainingFocus, monthsTraining, monthsWithoutTraining, personalData } = extractProps(props);
    return `Necesito que me generes una rutina de entrenamiento para ${personalData} que entrenó ${monthsTraining} meses pero está sin entrenar hace ${monthsWithoutTraining} meses y que su deseo es: ${trainingFocus}.`;
  }
};

function extractProps (props) {
  const trainingFocus = props[QUESTIONS_KEYS.TRAINING_FOCUS];
  const monthsTraining = props[QUESTIONS_KEYS.MONTHS_TRAINING];
  const monthsWithoutTraining = props[QUESTIONS_KEYS.MONTHS_WITHOUT_TRAINING];
  const sex = props[QUESTIONS_KEYS.SELECT_SEX];
  const height = props[QUESTIONS_KEYS.SELECT_HEIGHT];
  const weight = props[QUESTIONS_KEYS.SELECT_WEIGHT];
  const level = getLevel(props[QUESTIONS_KEYS.MONTHS_TRAINING]);

  const personalData = `un humano ${level} de sexo ${sex} que mide ${height}cm y pesa ${weight}kg`;

  return { trainingFocus, monthsTraining, monthsWithoutTraining, level, sex, height, weight, personalData };
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
