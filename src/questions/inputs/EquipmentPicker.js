import { QUESTION_TYPES } from '../../constants/questionsConstants.js';

import BaseInput from './BaseInput.js';

export default class EquipmentPicker extends BaseInput {
  constructor () {
    super({ type: QUESTION_TYPES.EQUIPMENT_PICKER });
  }
}
