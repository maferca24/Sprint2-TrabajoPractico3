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
    
    async buscarPorAtributo(atributo, valor) {
        //RESOLVER
    const query = { [atributo]: new RegExp(valor, 'i') }; // 'i' para que no importe mayúsculas/minúsculas
    return await SuperHero.find(query);
}
    async obtenerMayoresDe30() {
    //RESOLVER
        return await SuperHero.find({
        edad: { $gt: 30 },
        planetaOrigen: 'Tierra', // O cualquier otra condición que quieras agregar
        poder: { $exists: true } 
    });
}


}
export default new SuperHeroRepository();

