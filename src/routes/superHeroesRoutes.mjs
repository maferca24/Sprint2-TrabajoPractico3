//Define las rutas necesarias para cada operación del controlador
//La capa de ruta define los endpoints y mapea cada uno a su respectivo controlador
//permitiendo que las solicitudes HTTP se manejen de forma estructurada y predecible


import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller
} from '../controllers/superheroesControllers.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/hero/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

export default router;
