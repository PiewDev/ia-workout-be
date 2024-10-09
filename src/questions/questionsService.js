import { QUESTIONS_KEYS, QUESTION_TYPES } from '../constants/questionsConstants.js';
import flow from './questions/flow.js';
import questions from './questions/questions.js';

function insertQuestions (flow) {
  flow.questions.forEach(element => {
    if (element.id === QUESTIONS_KEYS.NEXT) {
      insertQuestions(element);
    }
    const question = questions[element.id];
    if (question) {
      Object.assign(element, question);
    }
    if (element?.input?.type === QUESTION_TYPES.OPTIONS) {
      element.options.forEach(option => {
        console.log(option.text, 'option');
        if (option.next) {
          insertQuestions(option.next);
        }
      });
    }
  });
}

export class QuestionsService {
  getQuestions = () => {
    console.log(flow, 'flow');
    try {
      insertQuestions(flow);
    } catch (error) {
      console.log(error);
    }
    console.log(flow, 'flow2');
    return flow;
  };
}
