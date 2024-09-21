import { PromptService } from './promptService.js';

export class PromptController {
  constructor () {
    this.promptService = new PromptService();
    this.getPrompt = this.getPrompt.bind(this);
  }

  getPrompt = async (req, res) => {
    try {
      const data = req.body;
      const responses = {};
      data.forEach(item => {
        responses[item.questionId] = item.answer;
      });
      const prompt = await this.promptService.getPrompt(responses);
      return res.json(prompt);
    } catch (error) {
      res.status(400).json({ error: 'Invalid input data' });
    }
  };
}
