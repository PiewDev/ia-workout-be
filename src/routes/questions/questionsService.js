import getQuestions from "../../questions/getQuestions.js"

export class QuestionsService {
  constructor () {
  }

  getQuestions = () => {
    const flujo = getQuestions()
    return flujo
  }
}