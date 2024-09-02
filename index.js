import getQuestions from './src/questions/getQuestions.js';
import generatePrompt from './src/prompGeneration/generatePromp.js';
import generateRoutine from './src/prompGeneration/generateRoutine.mjs';
import express from 'express';
import cors from 'cors';
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

app.get('/questions', (req, res) => {
  var flujo = getQuestions();
  res.json(flujo);
});

app.post('/prompt', (req, res) => {
  const data = req.body;

  // Validación básica (puedes agregar más validaciones según sea necesario)
  if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({ error: 'Invalid input data' });
  }

  var prompt = generatePrompt(data);
  res.json(prompt);
});

app.post('/routine', async (req, res) => {
  const data = req.body;
  console.log(data);
  // Validación básica (puedes agregar más validaciones según sea necesario)
  if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({ error: 'Invalid input data' });
  }

  var prompt = generatePrompt(data);
  var routine = await generateRoutine(prompt)

  console.log(routine);
  res.json(routine);
});



// Escuchar en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
