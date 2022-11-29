

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: '5555',
        lat: '15.54545',
        long: '13.5558',
    }
};


// console.table({ persona });

// Hace una copia del objeto y no una referencia al mismo objeto en memoria.
const persona2 = { ...persona };

persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);