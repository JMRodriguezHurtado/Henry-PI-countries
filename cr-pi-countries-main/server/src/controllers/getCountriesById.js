const axios = require("axios");
const axios = require("axios");
const Sequelize = require('sequelize');
const {Country, Activity} = require("../db")

const getCountriesById = async (req, res) => {
  const {id} = req.params;
  try {
    const oneCountry = await Country.findByPk(id, {
      include: Activity
    });
    if (!oneCountry) {return res.status(404).json({error: "Country not found"})
    };
  return res.status(200).json({success: oneCountry})
  }
  catch (error) {return res.status(500).json({error: error.message})}
};

module.exports = getCountriesById;
