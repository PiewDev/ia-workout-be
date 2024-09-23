import { QUESTION_TYPES } from '../../constants/questionsConstants.js';

import BaseInput from './BaseInput.js';

export default class TextInput extends BaseInput {
  /**
   * Create a TextInput.
   * @param {Object} options
   * @param {number} options.maxLength
  */
  constructor ({ maxLength }) {
    super({ type: QUESTION_TYPES.TEXT_INPUT, maxLength });
  }
}
