import { QuestionsService } from './questionsService.js';

export class QuestionsController {
  constructor () {
    this.questionsService = new QuestionsService();
    this.getQuestions = this.getQuestions.bind(this);
  }

  getQuestions = async (req, res) => {
    try {
      const flow = await this.questionsService.getQuestions();
      return res.status(200).json(flow);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching questions' });
    }
  };
}
