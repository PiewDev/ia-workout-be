import chatSession from "../../prompGeneration/ia.mjs";


export class RoutineRepository {
  constructor() {
    this.chatSession = chatSession();
  }

  async generateRoutine(prompt) {
    try {
      const chatSession = await this.chatSession;
      const routine = await chatSession.sendMessage(prompt);
      return JSON.parse(routine.response.text());
    } catch (error) {
      console.error("Error generating routine:", error);
      throw new Error("Failed to generate routine");
    }
  }
}