import { Router } from 'express';
import { QuestionsController } from './questionsController.js';

const questionsController = new QuestionsController();

export const createQuestionsRouter = () => {
  const questionsRouter = Router();

  questionsRouter.get('/', questionsController.getQuestions);
  return questionsRouter;
};
