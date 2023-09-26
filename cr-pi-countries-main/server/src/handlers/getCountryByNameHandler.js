const axios = require("axios");
const Sequelize = require('sequelize');
const {Country, Activity} = require("../db");
const getCountryByName = require("../controllers/getCountryByName");

const getCountryByNameHandler = async (req, res) => {
    const { name } = req.query;
    try {
     (name) 
        const queryName = await getCountryByName(name);
        res.status(200).send(queryName);
      } 
     catch (error) {
      res.status(500).send(error);
    }
  };

  module.exports = getCountryByNameHandler;