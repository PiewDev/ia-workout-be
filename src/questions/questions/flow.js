import { QUESTIONS_KEYS, TRAINING_LEVEL_OPTIONS, TITLES, TRANING_PLACE_OPTIONS } from '../../constants/questionsConstants.js';

const trainingData = {
  questions: [
    {
      id: QUESTIONS_KEYS.TRAINING_LEVEL,
      options: [
        {
          text: TRAINING_LEVEL_OPTIONS.BEGINNER,
          next: {
            questions: [
              {
                id: QUESTIONS_KEYS.TRAINING_FOCUS
              }
            ]
          }
        },
        {
          text: TRAINING_LEVEL_OPTIONS.CURRENTLY_TRAINING,
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
          text: TRAINING_LEVEL_OPTIONS.RETAKE,
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
    },
    {
      id: QUESTIONS_KEYS.NEXT,
      questions: [
        {
          id: QUESTIONS_KEYS.TRANING_PLACE,
          options: [
            {
              text: TRANING_PLACE_OPTIONS.HOME,
              next: {
                questions: [
                  {
                    id: QUESTIONS_KEYS.TRAINING_EQUIPMENT
                  }
                ]
              }
            },
            {
              text: TRANING_PLACE_OPTIONS.GYM
            }
          ]
        }

      ]

    }
  ]
};

export default trainingData;
