const axios = require("axios");
const Sequelize = require('sequelize');
const {Country, Activity} = require("../db")

const getActivities = async (req, res) => {
  const {name} = req.query;

  try {
    if(name) {
      const activitiesFind = await Activity.findAll({
        where: {
          name: {
            [Sequelize.Op.iLike]: `%${name}%`
          }
        }
      });
      if(!activitiesFind.length) return res.status(404).json({activity: "Not found"});
      return res.status(200).json({success: countriesFind});
    } else {
      const activities = await Activity.findAll();
      if(!countries){return res.status(404).json({error: "Not found"})}
      return res.status(200).json({success: activities})
    }
  }
  catch (error) {return res.status(500).json({error: error.message})}
};

module.exports = getActivities;