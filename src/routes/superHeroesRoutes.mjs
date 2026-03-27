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

//Rutas fijas:
//Todos los superheroes
//http://localhost:3000/api/heroes
router.get('/heroes', obtenerTodosLosSuperheroesController);
//Superheroes mayores a 30 años
//http://localhost:3000/api/heroes/mayores-30
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

//Rutas con parámetros
//Superheroes por id

//http://localhost:3000/api/heroes/69c6fd59d90e243b1c0fad1b
router.get('/heroes/:id', obtenerSuperheroePorIdController);

//http://localhost:3000/api/heroes/buscar/planetaOrigen/Tierra
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

export default router;
