import { QUESTIONS_KEYS, QUESTION_TYPES } from "../../../utils/constants.js"; 

const questions = {
    [QUESTIONS_KEYS.TRAINING_LEVEL]: {
        question: "¿Cuál es tu nivel de entrenamiento?",
        type: QUESTION_TYPES.OPTIONS
    },
    [QUESTIONS_KEYS.TRAINING_FOCUS]: {
        question: "¿En qué te gustaría enfocar el entrenamiento?",
        type: QUESTION_TYPES.TEXT_INPUT,
        limit: 200
    },
    [QUESTIONS_KEYS.MONTHS_TRAINING]: {
        question: "¿Cuántos meses entrenaste?",
        type: QUESTION_TYPES.NUMERIC_INPUT,
        placeholder: "Ingrese cantidad de meses"
    },
    [QUESTIONS_KEYS.MONTHS_WITHOUT_TRAINING]: {
        question: "¿Cuánto tiempo estuviste sin entrenar?",
        type: QUESTION_TYPES.NUMERIC_INPUT,
        placeholder: "Ingrese cantidad de meses/años"
    }
};

export default questions;