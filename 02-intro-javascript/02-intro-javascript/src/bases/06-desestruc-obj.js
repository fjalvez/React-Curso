// Desestructuracion
// Asignacion Desestructurante


const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman',
    rango: 'Coronel'
}



const userContext = ({clave, edad, nombre, rango = 'Capitan'}) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.5666,
            lng: -5.5555
        }
    }
}

// desestructuracion con desestructuracion anidada de objs

const {nombreClave, anios, latlng:{lat, lng}} = userContext( persona );


console.log(nombreClave, anios);
console.log(lat, lng);

