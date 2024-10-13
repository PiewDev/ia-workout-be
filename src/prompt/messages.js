import { TRAINING_LEVELS } from '../constants/promptConstants.js';
import { QUESTIONS_KEYS, TRAINING_LEVEL_OPTIONS } from '../constants/questionsConstants.js';

const messages = {
  [TRAINING_LEVEL_OPTIONS.CURRENTLY_TRAINING]: (props) => {
<<<<<<< Updated upstream
    const { trainingFocus, monthsTraining, level } = extractProps(props);
    return `Necesito que me generes una rutina de entrenamiento para un ${level} que ya entrena hace ${monthsTraining} meses y que desea ${trainingFocus}.`;
  },
  [TRAINING_LEVEL_OPTIONS.BEGINNER]: (props) => {
    const { trainingFocus } = extractProps(props);
    return `Necesito que me generes una rutina de entrenamiento para alguien que se está iniciando que desea ${trainingFocus}.`;
  },
  [TRAINING_LEVEL_OPTIONS.RETAKE]: (props) => {
    const { trainingFocus, monthsTraining, monthsWithoutTraining, level } = extractProps(props);
    return `Necesito que me generes una rutina de entrenamiento para un ${level} que entrenó ${monthsTraining} meses pero está sin entrenar hace ${monthsWithoutTraining} meses y que desea ${trainingFocus}.`;
=======
    const { trainingFocus, monthsTraining, level, equipment } = extractProps(props);
    return `Necesito que me generes una rutina de entrenamiento para un ${level} que ya entrena hace ${monthsTraining} meses y que desea ${trainingFocus}, el equipo que tiene disponible es: ${equipment}.`;
  },
  [TRAINING_LEVEL_OPTIONS.BEGINNER]: (props) => {
    const { trainingFocus, equipment } = extractProps(props);
    return `Necesito que me generes una rutina de entrenamiento para alguien que se está iniciando que desea ${trainingFocus}, el equipo que tiene disponible es: ${equipment}.`;
  },
  [TRAINING_LEVEL_OPTIONS.RETAKE]: (props) => {
    const { trainingFocus, monthsTraining, monthsWithoutTraining, level, equipment } = extractProps(props);
    return `Necesito que me generes una rutina de entrenamiento para un ${level} que entrenó ${monthsTraining} meses pero está sin entrenar hace ${monthsWithoutTraining} meses y que desea ${trainingFocus}, el equipo que tiene disponible es: ${equipment}.`;
>>>>>>> Stashed changes
  }
};

function extractProps (props) {
  const trainingFocus = props[QUESTIONS_KEYS.TRAINING_FOCUS];
  const monthsTraining = props[QUESTIONS_KEYS.MONTHS_TRAINING];
  const monthsWithoutTraining = props[QUESTIONS_KEYS.MONTHS_WITHOUT_TRAINING];
  const level = getLevel(props[QUESTIONS_KEYS.MONTHS_TRAINING]);
  const equipment = getEquipment(props[QUESTIONS_KEYS.TRAINING_EQUIPMENT]);
  return { trainingFocus, monthsTraining, monthsWithoutTraining, level, equipment };
}

function getEquipment (list) {
  if (!list) {
    return 'El equipamiento normal en un gym';
  }
  return list.join(', ');
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
