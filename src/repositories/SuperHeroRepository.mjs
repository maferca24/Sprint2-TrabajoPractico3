//Implementa los metodos definidos en la Interfaz,
//interactuando directamente con MongoDB a traves de Mongoose

import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs'

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await SuperHero.findById(id);
    }
    async obtenerTodos() {
        return await SuperHero.find({});
    }

    //Busqueda por atributo
    async buscarPorAtributo(atributo, valor) {
        //new RegExp Crea un patrón de búsqueda flexible (comodín).
        const query = { [atributo]: new RegExp(valor, 'i') }; // 'i' para que no importe mayúsculas/minúsculas
        return await SuperHero.find(query);
    }
    //Superheroes mayores a 30 años
     async obtenerMayoresDe30() {
         return await SuperHero.find({
             edad: { $gt: 30 } //Que la edad sea mayor a 30 (no incluye el 30 exacto).        
         });
     }
    //Superheroes mayores a 30 años del Planeta Tierra y con mas de dos poderes
    // async obtenerMayoresDe30() {
    // return await SuperHero.find({
    //     edad: { $gt: 30 },
    //     planetaOrigen: 'Tierra',
    //     'poderes.2': { $exists: true } 
    // });
}

export default new SuperHeroRepository();

