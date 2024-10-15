// @ts-check
import { QUESTIONS, QUESTIONS_KEYS } from '../../constants/questionsConstants.js';
import EquipmentPicker from '../inputs/EquipmentPicker.js';
import MonthsInput from '../inputs/MonthsInput.js';
import NumericInput from '../inputs/NumericInput.js';
import OptionsInput from '../inputs/OptionsInput.js';
import TextInput from '../inputs/TextInput.js';

const questions = {
  [QUESTIONS_KEYS.TRAINING_LEVEL]: {
    question: QUESTIONS.TRAINING_LEVEl,
    input: new OptionsInput()
  },
  [QUESTIONS_KEYS.TRAINING_FOCUS]: {
    question: QUESTIONS.TRAINING_FOCUS,
    input: new TextInput({
      maxLength: 200
    })
  },
  [QUESTIONS_KEYS.MONTHS_TRAINING]: {
    question: QUESTIONS.MONTHS_TRAINING,
    input: new MonthsInput()
  },
  [QUESTIONS_KEYS.MONTHS_WITHOUT_TRAINING]: {
    question: QUESTIONS.MONTHS_WITHOUT_TRAINING,
    input: new MonthsInput()
  },
  [QUESTIONS_KEYS.TRAINING_EQUIPMENT]: {
    question: QUESTIONS.TRAINING_EQUIPMENT,
    input: new EquipmentPicker()
  },
  [QUESTIONS_KEYS.TRANING_PLACE]: {
    question: QUESTIONS.TRANING_PLACE,
    input: new OptionsInput()
  },
  [QUESTIONS_KEYS.SELECT_SEX]: {
    question: QUESTIONS.SELECT_SEX,
    input: new OptionsInput()
  },
  [QUESTIONS_KEYS.SELECT_WEIGHT]: {
    question: QUESTIONS.SELECT_WEIGHT,
    input: new NumericInput({
      placeholder: 'Kg',
      maxLength: 3
    })
  },
  [QUESTIONS_KEYS.SELECT_HEIGHT]: {
    question: QUESTIONS.SELECT_HEIGHT,
    input: new NumericInput({
      placeholder: 'Cm',
      maxLength: 3
    })
  }
};

export default questions;
