//IRepository.mjs
//Establece una interfaz que define los médtodos CRUD estándar y sirmve como contrao para 
//asegurar que caulquier clase que implemente la interfaz cuente con estos métodos

class IRepository {
    obtenerPorId(id) {
        throw new Error("Método 'obtenerPorId()' no implementado");

    }
    obtenerTodos() {
        throw new Error("Método 'obtenerTodos()' no implementado");

    }
    buscarPorAtributo(atributo, valor) {
        throw new Error("Método 'buscarPorAtribulo()' no implementado");

    }
    obtenerMayoresDe30(atributo, valor) {
        throw new Error("Método 'obtenerMayoresDe30()' no implementado");

    }
}
