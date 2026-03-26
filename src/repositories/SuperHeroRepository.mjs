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
     //Para RESOLVER
     //new RegExp Crea un patrón de búsqueda flexible (comodín).
    const query = { [atributo]: new RegExp(valor, 'i') }; // 'i' para que no importe mayúsculas/minúsculas
    return await SuperHero.find(query);
}
    async obtenerMayoresDe30() {
    //Para RESOLVER
        return await SuperHero.find({
        edad: { $gt: 30 }, //Que la edad sea mayor a 30 (no incluye el 30 exacto).
        planetaOrigen: 'Tierra', // Que su origen sea exactamente "Tierra".
        //poder: { $exists: true } //: Que el documento tenga un campo llamado poder (que no esté vacío o nulo).
        'poder.2': { $exists: true }//Que tenga mas de dos poderes
    });
}


}
export default new SuperHeroRepository();

