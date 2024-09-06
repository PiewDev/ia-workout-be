import { Router } from 'express';
import { PromptController } from './promptController.js';

const promptController = new PromptController();
export const createPromptRouter = () => {
  const promptRouter = Router();

  promptRouter.post('/', promptController.getPrompt);
  return promptRouter;
};
