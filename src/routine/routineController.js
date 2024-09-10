import { RoutineService } from './routineService.js';

export class RoutineController {
  constructor () {
    this.routineService = new RoutineService();
    this.getRoutine = this.getRoutine.bind(this);
  }

  getRoutine = async (req, res) => {
    try {
      const data = req.body;
      const routine = await this.routineService.getRoutine(data);
      return res.json(routine);
    } catch (error) {
      res.status(400).json({ error: 'Invalid input data' });
    }
  };
}
