export default class BaseInput {
  constructor (fieldValues) {
    this.validateFields(fieldValues);
    this.assignFields(fieldValues);
  }

  validateFields (fieldValues) {
    const missingFields = Object.keys(fieldValues).filter(field => !fieldValues[field]);
    if (missingFields.length > 0) {
      throw new Error(this.getErrorMessage(missingFields));
    }
  }

  assignFields (fieldValues) {
    Object.assign(this, fieldValues);
  }

  getErrorMessage (missingFields) {
    return `Missing required fields: ${missingFields.join(', ')}`;
  }
}
