const BASE_KEYS = {
  NEXT: 'next',
  TITLE: 'title'
};

const QUESTIONS_KEYS = {
  ...BASE_KEYS,
  TRAINING_LEVEL: 'trainingLevel',
  TRAINING_FOCUS: 'trainingFocus',
  MONTHS_TRAINING: 'monthsTraining',
  MONTHS_WITHOUT_TRAINING: 'monthsWithuotTraining',
  TRAINING_EQUIPMENT: 'trainingEquipment',
  TRANING_PLACE: 'trainingPlace',
  SELECT_SEX: 'selectSex',
  SELECT_WEIGHT: 'selectWeight',
  SELECT_HEIGHT: 'selectHeight'

};

const QUESTIONS = {
  TRAINING_LEVEl: '¿Cuál es tu nivel de entrenamiento?',
  TRAINING_FOCUS: '¿En qué te gustaría enfocar el entrenamiento?',
  MONTHS_TRAINING: '¿Cuánto tiempo entrenaste?',
  MONTHS_WITHOUT_TRAINING: '¿Cuánto tiempo estuviste sin entrenar?',
  TRAINING_EQUIPMENT: '¿Qué equipo tienes para entrenar?',
  TRANING_PLACE: '¿En donde vas a entrenar?',
  SELECT_HEIGHT: 'Ingrese su altura',
  SELECT_WEIGHT: 'Ingrese su peso',
  SELECT_SEX: 'Seleccione su sexo'

};

const QUESTION_TYPES = {
  OPTIONS: 'options',
  MONTHS_SELECTOR: 'months-selector',
  TEXT_INPUT: 'text-input',
  EQUIPMENT_PICKER: 'equipment-picker',
  NUMERIC_INPUT: 'numeric-input'
};

const TRAINING_LEVEL_OPTIONS = {
  BEGINNER: 'Estoy por empezar',
  CURRENTLY_TRAINING: 'Ya entreno',
  RETAKE: 'Voy a retomar'

};

const TRANING_PLACE_OPTIONS = {
  HOME: 'En casa',
  GYM: 'En el gym'
};
const SEX_OPTIONS = {
  MALE: 'Masculino',
  FEMALE: 'Femenino'
};
const TITLES = {
  TRAINING_TIME: 'Tiempo de entrenamiento',
  PERSONAL_DATA: 'Datos personales'
};

export {
  QUESTIONS_KEYS,
  QUESTION_TYPES,
  QUESTIONS,
  TRAINING_LEVEL_OPTIONS,
  TITLES,
  TRANING_PLACE_OPTIONS,
  SEX_OPTIONS
};
