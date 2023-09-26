const axios = require("axios");
const Sequelize = require('sequelize');
const {Country, Activity} = require("../db");
const getCountryById = require("../controllers/getCountryById");

const getCountryByIdHandler = async (req, res) => {
    const { idPais } = req.params;
    try {
      const queryId = await getCountryById(idPais);
      res.status(200).send(queryId);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  module.exports = getCountryByIdHandler;