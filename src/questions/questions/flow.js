import { QUESTIONS_KEYS, QUESTION_TYPES, PRINCIPAL_OPTIONS } from '../../utils/constants.js';
const trainingData = {
  id: QUESTIONS_KEYS.TRAINING_LEVEL,
  type: QUESTION_TYPES.OPTIONS,
  options: [
    {
      text: PRINCIPAL_OPTIONS.BEGINNER,
      next: {
        questions: [
          {
            id: QUESTIONS_KEYS.TRAINING_FOCUS,
            next: null
          }
        ]
      }
    },
    {
      text: PRINCIPAL_OPTIONS.CURRENTLY_TRAINING,
      next: {
        questions: [
          {
            id: QUESTIONS_KEYS.MONTHS_TRAINING,
            next: {
              questions: [
                {
                  id: QUESTIONS_KEYS.TRAINING_FOCUS,
                  next: null
                }
              ]
            }
          }
        ]
      }
    },
    {
      text: PRINCIPAL_OPTIONS.RETAKE,
      next: {
        questions: [
          {
            id: QUESTIONS_KEYS.MONTHS_TRAINING,
            next: {
              questions: [
                {
                  id: QUESTIONS_KEYS.MONTHS_WITHOUT_TRAINING,
                  next: {

                    questions: [
                      {
                        id: QUESTIONS_KEYS.TRAINING_FOCUS,
                        next: null
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};

export default trainingData;
