//Capa de Vistas: define las funciones de presentaicón de los datos, organizando la infromación
//de los supeheroes en un formato estructurado

export function renderizarSuperheroe(superheroe) {
    return {
        Nombre: superheroe.nombreSuperHeroe,
        "Nombre Real": superheroe.nombreReal,
        Edad: superheroe.edad,
        "Planeta de Origen": superheroe.planetaOrigen,
        Debilidad: superheroe.debilidad,
        Poderes: superheroe.Poderes,
        Aliados: superheroe.Aliados,
        Enemigos: superheroe.enemigos
    };
}
export function renderizarListaSuperheroes(superheroes) {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}