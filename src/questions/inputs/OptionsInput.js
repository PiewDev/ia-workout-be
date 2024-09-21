import { QUESTION_TYPES } from '../../constants/questionsConstants.js';

import BaseInput from './BaseInput.js';

export default class OptionsInput extends BaseInput {
  constructor () {
    super({ type: QUESTION_TYPES.TEXT_INPUT });
  }
}
