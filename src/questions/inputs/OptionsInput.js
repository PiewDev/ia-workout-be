import { QUESTION_TYPES } from '../../utils/constants.js';

import BaseInput from './BaseInput.js';

export default class OptionsInput extends BaseInput {
  constructor () {
    super({ type: QUESTION_TYPES.TEXT_INPUT });
  }
}
