import { Router } from 'express';
import { RoutineController } from './routineController.js';

const routineController = new RoutineController();

export const createRoutineRouter = () => {
  const routineRouter = Router();

  routineRouter.post('/', routineController.getRoutine);
  return routineRouter;
};
