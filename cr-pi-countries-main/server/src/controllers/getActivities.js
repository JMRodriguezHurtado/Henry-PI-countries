const axios = require("axios");
const Sequelize = require('sequelize');
const formatActivities = require("../utils/generalFunctions")
const {Country, Activity} = require("../db")

  const getActivities = async () => {
    const activities = await Activity.findAll({
      include: {
        model: Country,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    return formatActivities(activities);
  };
  
module.exports = getActivities;