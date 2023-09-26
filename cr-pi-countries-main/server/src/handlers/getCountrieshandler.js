const axios = require("axios");
const Sequelize = require('sequelize');
const {Country, Activity} = require("../db");
const getCountries = require("../controllers/getCountries");

const getCountriesHandler = async (req, res) => {
    
    try {
        const allCountries = await getCountries();
        res.status(200).send(allCountries);
      }
     catch (error) {
      res.status(500).send(error);
    }
  };

  module.exports = getCountriesHandler;