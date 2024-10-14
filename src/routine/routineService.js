import { PromptService } from '../prompt/promptService.js';
import { RoutineRepository } from './routineRepository.js';

export class RoutineService {
  constructor () {
    this.promptService = new PromptService();
    this.routineRepository = new RoutineRepository();
  }

  getRoutine = async (data) => {
    if (!data) {
      throw new Error('Invalid input data');
    }

    const prompt = await this.promptService.getPrompt(data);
    console.log('prompt', prompt);
    const routine = await this.routineRepository.generateRoutine(prompt);
    return routine;
  };
}
