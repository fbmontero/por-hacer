const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripción de la tarea'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente una tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Devuelve la lista de elementos', {})
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}