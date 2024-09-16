// @ts-check
import { QUESTIONS, QUESTIONS_KEYS } from '../../utils/constants.js';
import MonthsInput from '../inputs/MonthsInput.js';
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
  }
};

export default questions;
