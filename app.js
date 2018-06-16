const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
const getInfo = async (direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        
        return `El clima en ${coors.direccion} es de ${temp.temp}`;
        
    } catch (error) {
        return  `No se pudo determina el clima en ${direccion}`;
    }
}

// lugar.getLugarLatLng(argv.direccion)
// .then(resp=>{
//     console.log(resp);
// })
// .catch(e=>console.log(e));

// clima.getClima(14.7038002, -91.8659809)
// .then(temp => console.log(temp))
// .catch(e => console.log(e));

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e=>console.log(e));