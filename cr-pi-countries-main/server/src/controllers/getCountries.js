const axios = require("axios");
const Sequelize = require('sequelize');
const {Country, Activity} = require("../db")

  const getCountries = async () => {
    const countries = await Country.findAll({
      include: {
        model: Activity,
        through: { attributes: [] },
      },
    });
    return countries;
  };

module.exports = getCountries;