import { QUESTION_TYPES } from '../../constants/questionsConstants.js';

import BaseInput from './BaseInput.js';

export default class NumericInput extends BaseInput {
  /**
   * Create a NumericInput.
   * @param {Object} options
   * @param {string} options.placeholder
   * @param {int} options.maxLength
  */
  constructor ({ placeholder, maxLength }) {
    super({ type: QUESTION_TYPES.NUMERIC_INPUT, placeholder, maxLength });
  }
}
