import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai"

const apiKey = '';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  systemInstruction: "Eres un entrenador profesional que basa sus rutinas en ciencia, divide los ciclos en rutinas varias semanas y los días de semana que crea necesario para cada caso, cada ciclo son solo un set de ejercicios concretos que no cambian de una semana a la otra si no se busca mejorar algun indicador, que puede  ser el PR, RIM, Reps según el caso requiera. \nEl enfoque a tomar debería considerar lo que diga la ciencia para el entrenamiento de naturales y el nivel del individuo, la progresión que requiere un básico es mas simple que la que requiere un evanzado.\nPara los principiantes se busca algo fullbody orientado a ir subiendo el peso de a poco, en cambio para los avanzados se busca alguna forma de planificación mas avanzada, como por ejemplo para superar un pr el empezar con un RIR alto y a medida que avanza el ciclo acercarse nuevamente al PR.  \nSe te va a especificar el PR en los básicos para que con ellos puedas calcular en cada ejercicio que peso, RIM, reps, series usar, la idea es que la rutina no sean necesariamente solo los ejercicios básicos si no que varíe según las necesidades del cliente. \nLa estructura de respuesta debe ser: \n{\n    \"plan\": {\n      \"name\": Nombre del plan de entrenamiento\n      \"planType\": Tipo de entrenamiento: FullBody, Jalones y Tirones, Torso Pierna, etc.  \n      \"about\": Breve explicación sobre la modalidad de entrenamiento y su justificación   \n      \"daysPerWeek\":  Días a la semana en la que se va realizar entrenamiento optimo para el tipo de entrenamiento\n      \"weeks\": [\n        {\n          \"weekNumber\": Numero de la semana del plan (1 = semana inicial)\n          \"weekPurpose\": breve explicación de cual es el objetivo de la semana \n          \"days\": [\n            {\n              \"day\": Día de entrenamiento dentro de la semana (día 1, 2... )\n              \"exercises\": [\n                {\n                  \"name\": Nombre del ejercicio\n                  \"sets\": numbero de series\n                  \"reps\": numero de repeticiones\n                  \"weight\": peso en Kg\n                  \"RIR\": Repetitions in reserve (RIR)\n\t\t  \"PRPercent\":A que porcentaje del PR equivale el peso\n                  \"notes\": notas para entender en que enfocar el ejercicio en este punto del ciclo (Por ej: priorizar el peso antes del RIR)\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\nLista de ejercicios posibles: Press de banca con barra, Press de banca inclinado con mancuernas, Fondos en paralelas, Dominadas, Remo con barra, Remo con mancuerna a una mano, Sentadilla con barra, Peso muerto, Prensa de pierna, Press militar con barra, Press Arnold con mancuernas, Elevaciones laterales, Curl con barra, Curl con mancuernas, Curl en banco Scott, Press francés con barra, Extensiones de tríceps en polea, Elevaciones de piernas colgado, Crunch en máquina, Plancha.",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
  responseSchema: {
    type: "object",
    properties: {
      plan: {
        type: "object",
        properties: {
          name: {
            type: "string"
          },
          planType: {
            type: "string"
          },
          about: {
            type: "string"
          },
          daysPeerWeek: {
            type: "string"
          },
          weeks: {
            type: "array",
            items: {
              type: "object",
              properties: {
                weekNumber: {
                  type: "integer"
                },
                weekPurpose: {
                  type: "string"
                },
                days: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      day: {
                        type: "string"
                      },
                      exercises: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            name: {
                              type: "string"
                            },
                            sets: {
                              type: "integer"
                            },
                            reps: {
                              type: "integer"
                            },
                            weight: {
                              type: "number"
                            },
                            RIR: {
                              type: "integer"
                            },
                            PRPercent: {
                              type: "string"
                            },
                            notes: {
                              type: "string"
                            }
                          },
                          required: [
                            "name",
                            "sets",
                            "reps",
                            "weight",
                            "RIR",
                            "notes"
                          ]
                        }
                      }
                    },
                    required: [
                      "day",
                      "exercises"
                    ]
                  }
                }
              },
              required: [
                "weekNumber",
                "weekPurpose",
                "days"
              ]
            }
          }
        },
        required: [
          "name",
          "planType",
          "about",
          "daysPeerWeek",
          "weeks"
        ]
      }
    },
    required: [
      "plan"
    ]
  },
};

async function generateRoutine(prompt) {
  console.log('prompt', prompt)
  const chatSession = model.startChat({
    generationConfig
    });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
 
  return JSON.parse(result.response.text());
  
}

export default generateRoutine;

