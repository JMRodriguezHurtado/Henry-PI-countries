const axios = require("axios");
const Sequelize = require('sequelize');
const {Country, Activity} = require("../db")

const getCountries = async (req, res) => {
  const {name} = req.query;

  try {
    if(name) {
      const countriesFind = await Country.findAll({
        where: {
          name: {
            [Sequelize.Op.iLike]: `%${name}%`
          }
        }
      });
      if(!countriesFind.length) return res.status(404).json({country: "Not found"});
      return res.status(200).json({success: countriesFind});
    } else {
      const countries = await Country.findAll();
      if(!countries){return res.status(404).json({error: "Not found"})}
      return res.status(200).json({success: countries})
    }
  }
  catch (error) {return res.status(500).json({error: error.message})}
};

module.exports = getCountries;