//Capa de Servicios: Contiene la lógica de negocio
//se encarga de validar y transformar los datos cuando sea necesario

export async function obtenerSuperheroePorId(id) {
    return await superHeroRepository.obtenerPorId(id);
}
export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos(id);
}
export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await superHeroRepository.buscarPorAtributo(atributo, valor);

}
export async function obtenerSuperheroesMayoresDe30() {
    return await superHeroRepository.obtenerMayoresDe30();
}
