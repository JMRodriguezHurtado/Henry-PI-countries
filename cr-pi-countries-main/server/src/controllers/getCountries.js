const axios = require('axios');
const { Country } = require('../db');

const URL = 'http://localhost:5000/countries';

const getCountries = async () => {
  try {
    const response = await axios(URL);
    const allCountries = response.data;

    let dbCountries = [];

    for (const countryData of allCountries) {
      const countryInfo = {
        name: countryData.name.official,
        id: countryData.cca3,
        area: countryData.area,
        image: countryData.flags.png,
        population: countryData.population,
        continents: countryData.continents[0],
        subregion: countryData.subregion || 'null',
        capital: countryData.capital ? countryData.capital[0] : 'null',
      };

      // Push countryInfo to the dbCountries array (if needed).

      // You can consider moving the database operations outside the loop
      // to improve performance, especially if there are many countries.

      await Country.findOrCreate({
         where: {
           name: countryInfo.name,
           id: countryInfo.id,
           area: countryInfo.area,
           image: countryInfo.image,
           population: countryInfo.population,
           continents: countryInfo.continents,
           subregion: countryInfo.subregion,
           capital: countryInfo.capital,
         },
       });

      // Add countryInfo to dbCountries (if needed).
      dbCountries.push(countryInfo);
    }

    return dbCountries;
  } catch (error) {
    console.log('Error fetching data from the API:', error.message);
    return [];
  }
};

module.exports = getCountries;