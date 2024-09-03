import flow from './questions/flow.js'
import questions from './questions/questions.js'

function insertQuestions(flow) {
    if (flow.id) {
        const question = questions[flow.id];
        if (question) {
            flow.question = question.question;
            flow.type = question.type;
            if (question.limit) flow.limit = question.limit;
            if (question.placeholder) flow.placeholder = question.placeholder;
        }
    }

    if (flow.options) {
        flow.options.forEach(option => {
            if (option.next && option.next.questions) {
                option.next.questions.forEach(insertQuestions);
            }
        });
    }

    if (flow.next && flow.next.questions) {
        flow.next.questions.forEach(insertQuestions);
    }
}

export class QuestionsService {
  constructor () {}

  getQuestions = () => {
    insertQuestions(flow);
    return flow;
  }
}