import { QUESTIONS_KEYS } from '../utils/constants.js';
import flow from './questions/flow.js';
import questions from './questions/questions.js';

function insertQuestions (flow) {
  if (flow.id) {
    const question = questions[flow.id];
    if (question) {
      flow.question = question.question;
      flow.input = question.input;
      if (question.limit) {
        flow.limit = question.limit;
      }
      if (question.placeholder) {
        flow.placeholder = question.placeholder;
      }
    }
  }

  if (flow.options) {
    flow.options.forEach(option => {
      if (option.next && option.next.questions) {
        option.next.questions.forEach(insertQuestions);
      }
    });
  }

  if (flow.id === QUESTIONS_KEYS.NEXT) {
    flow.questions.forEach(insertQuestions);
  }
}

export class QuestionsService {
  getQuestions = () => {
    insertQuestions(flow);
    return flow;
  };
}
