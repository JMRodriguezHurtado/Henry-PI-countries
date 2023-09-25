const axios = require("axios");

async function getCountries(req, res) {
  const URL = "";

  try {
    
    const {data} = await axios.get(`${URL}`);

    const country = {
      id: data.id,
      nombre: data.nombre,
      image: data.image,
      continente: data.continente,
      capital: data.capital,
      subregión: data.subregión?.nombre, 
      area: data.area,
      población: data.población,
    };

    country.nombre
      ? res.status(200).json(country)
      : res.status(404).json({message: "No hay tal"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

module.exports = getCountries;
