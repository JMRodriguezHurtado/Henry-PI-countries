
const axios = require("axios");
const Sequelize = require('sequelize');
const {Country, Activity} = require("../db")

const getCountryById = async (id) => {
  const country = await Country.findAll({
    where: {
      id: id.toUpperCase(),
    },
    include: {
      model: Activity,
      through: { attributes: [] },
    },
  });
  return country;
};

module.exports = getCountryById;
