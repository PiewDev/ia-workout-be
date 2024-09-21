import { QUESTIONS_KEYS, QUESTION_TYPES, PRINCIPAL_OPTIONS, TITLES } from '../../constants/questionsConstants.js';

const trainingData = {
  id: QUESTIONS_KEYS.TRAINING_LEVEL,
  type: QUESTION_TYPES.OPTIONS,
  options: [
    {
      text: PRINCIPAL_OPTIONS.BEGINNER,
      next: {
        questions: [
          {
            id: QUESTIONS_KEYS.TRAINING_FOCUS
          }
        ]
      }
    },
    {
      text: PRINCIPAL_OPTIONS.CURRENTLY_TRAINING,
      next: {
        questions: [
          {
            id: QUESTIONS_KEYS.MONTHS_TRAINING
          },
          {
            id: QUESTIONS_KEYS.NEXT,
            questions: [
              {
                id: QUESTIONS_KEYS.TRAINING_FOCUS
              }
            ]
          }
        ]
      }
    },
    {
      text: PRINCIPAL_OPTIONS.RETAKE,
      next: {
        questions: [
          {
            id: QUESTIONS_KEYS.MONTHS_TRAINING
          },
          {
            id: QUESTIONS_KEYS.MONTHS_WITHOUT_TRAINING
          },
          {
            id: QUESTIONS_KEYS.TITLE,
            title: TITLES.TRAINING_TIME
          },
          {
            id: QUESTIONS_KEYS.NEXT,
            questions: [
              {
                id: QUESTIONS_KEYS.TRAINING_FOCUS
              }
            ]
          }
        ]
      }
    }
  ]
};

export default trainingData;
