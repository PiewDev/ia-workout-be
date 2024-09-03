import generateRoutine from "../../prompGeneration/generateRoutine.mjs";

export class RoutineRepository {
  async generateRoutine(prompt) {
    const routine = await generateRoutine(prompt);
    return routine;
  }
}