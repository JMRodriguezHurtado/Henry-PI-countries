const axios = require("axios");

async function getCountriesById(req, res) {
  const URL = "http://localhost:5000/countries/name?=";

  try {
    const {name} =  req.params;
    const {data} = await axios.get(`${URL}${name}`);

    const country = {
      id: data.cca3,
      nombre: data.name,
      image: data.image,
      continente: data.continent,
      capital: data.capital,
      subregión: data.subregion?.name, 
      area: data.area,
      población: data.population,
    };

    country.nombre
      ? res.status(200).json(country)
      : res.status(404).json({message: "No hay tal"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

module.exports = getCountriesById;
