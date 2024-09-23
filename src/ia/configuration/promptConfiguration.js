const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'application/json',
  responseSchema: {
    type: 'object',
    properties: {
      plan: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          planType: {
            type: 'string'
          },
          about: {
            type: 'string'
          },
          daysPeerWeek: {
            type: 'string'
          },
          weeks: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                weekNumber: {
                  type: 'integer'
                },
                weekPurpose: {
                  type: 'string'
                },
                days: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      day: {
                        type: 'string'
                      },
                      exercises: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            name: {
                              type: 'string'
                            },
                            sets: {
                              type: 'integer'
                            },
                            reps: {
                              type: 'integer'
                            },
                            weight: {
                              type: 'number'
                            },
                            RIR: {
                              type: 'integer'
                            },
                            PRPercent: {
                              type: 'string'
                            },
                            notes: {
                              type: 'string'
                            }
                          },
                          required: [
                            'name',
                            'sets',
                            'reps',
                            'weight',
                            'RIR',
                            'notes'
                          ]
                        }
                      }
                    },
                    required: [
                      'day',
                      'exercises'
                    ]
                  }
                }
              },
              required: [
                'weekNumber',
                'weekPurpose',
                'days'
              ]
            }
          }
        },
        required: [
          'name',
          'planType',
          'about',
          'daysPeerWeek',
          'weeks'
        ]
      }
    },
    required: [
      'plan'
    ]
  }
};

export default generationConfig;
