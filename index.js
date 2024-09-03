import generatePrompt from './src/prompGeneration/generatePromp.js';
import generateRoutine from './src/prompGeneration/generateRoutine.mjs';
import express from 'express';
import cors from 'cors';
import { createQuestionsRouter } from './src/routes/questions/questionsRoutes.js';
import { createPromptRouter } from './src/routes/prompt/promptRoutes.js';
import { createRoutineRouter } from './src/routes/routine/routineRoutes.js';
const app = express();
const port = 3000;
app.options('*', cors());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE,PATCH',
  preflightContinue: false,
  optionsSuccessStatus: 200
}));
// Middleware para parsear JSONn
app.use(express.json());

// Ruta principal

app.use('/questions', createQuestionsRouter());

app.use('/prompt', createPromptRouter());

app.use('/routine',createRoutineRouter());


// Escuchar en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
