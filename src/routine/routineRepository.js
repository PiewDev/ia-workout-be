import chatSession from '../Ia/iaRepository.js';

export class RoutineRepository {
  constructor () {
    this.initChatSession = chatSession();
  }

  async generateRoutine (prompt) {
    try {
      const chatSession = await this.initChatSession;
      const routine = await chatSession.sendMessage(prompt);
      return JSON.parse(routine.response.text());
    } catch (error) {
      console.error('Error generating routine:', error);
      throw new Error('Failed to generate routine');
    }
  }
}
