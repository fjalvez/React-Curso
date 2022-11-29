

// Funcionas en JS
const saludar = function(nombre) {
    return ` Hola ${nombre}`;
}

// Funcion de flecha
const saludar2 = (nombre) => {
    return ` Hola ${nombre}`;
}

const saludar3 = (nombre) => ` Hola ${nombre}`;

const saludar4 = () => ` Hola Mundo`;


console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Vegeta'));
console.log(saludar4());


// Funcion de flecha que devuelve un objeto
const getUser = () => ({
    uid: 'dsadasdasdadañlñ456456',
    user: 'Sarasa123'
})


const user = getUser();
console.log( user );


const getUsuarioActivo = ( nombre ) => ({
    uid: 'dsadasdasdadañlñ456456',
    user: nombre
});


const usuarioActivo = getUsuarioActivo('fernix');
console.log( usuarioActivo );