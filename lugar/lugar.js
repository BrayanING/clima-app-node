const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAVtXEbSjfInxhng9Clqs-GYl3xj_cw2mY`)
    if (resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
        let location = resp.data.results[0];
        let coordenadas = location.geometry.location;

        // console.log(JSON.stringify(location.formatted_address));
        // console.log(JSON.stringify(coordenadas.lat));
        // console.log(JSON.stringify(coordenadas.lng));
    
    return {
        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }
}



module.exports ={
    getLugarLatLng
}