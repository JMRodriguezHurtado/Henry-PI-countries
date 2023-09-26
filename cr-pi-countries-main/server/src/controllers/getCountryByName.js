const axios = require("axios");
const Sequelize = require('sequelize');
const {Country, Activity} = require("../db")

const getCountryByName = async (name) => {
    const country = await Country.findAll({
      where: {
        name: {
          [Sequelize.Op.iLike]: `%${name}%`,
        },
      },
      include: {
        model: Activity,
        through: { attributes: [] },
      },
    });
    return country;
  };

module.exports = getCountryByName;
