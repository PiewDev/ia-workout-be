import { QUESTION_TYPES } from '../../constants/questionsConstants.js';
import BaseInput from './BaseInput.js';

export default class MonthsInput extends BaseInput {
  constructor () {
    super({ type: QUESTION_TYPES.MONTHS_SELECTOR });
  }
}
