const axios = require('axios');

const getClima = async(lat, lang) =>{
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=9da32118dc0a6c8fceed6b659c42037d`);
    return {
        temp: resp.data.main.temp
    }
}

module.exports = {
    getClima
}