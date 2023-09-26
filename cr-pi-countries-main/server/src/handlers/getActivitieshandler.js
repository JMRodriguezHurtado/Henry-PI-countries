const getActivities = require("../controllers/getActivities")
const axios = require("axios");
const Sequelize = require('sequelize');
const {Country, Activity} = require("../db")

const handleActivities = async (req, res) => {
    try {
      const getAllActivities = await getActivities();
      res.status(200).send(getAllActivities);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  module.exports = handleActivities;