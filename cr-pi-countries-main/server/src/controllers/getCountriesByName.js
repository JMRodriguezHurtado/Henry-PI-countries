const axios = require("axios");
const Sequelize = require('sequelize');
const {Country, Activity} = require("../db")

const getCountriesByName = async (req, res) => {
  const {name} = req.query
  try {
    const countryName = await Country.findOne({
      where: {name},
      include : Activity
    });
    if (!countryName) {return res.status(404).json({error: "Country not found"})}
    return res.status(200).json({success: name})
  }
  catch (error) {return res.status(500).json({error: error.message})}
};

module.exports = getCountriesByName;
