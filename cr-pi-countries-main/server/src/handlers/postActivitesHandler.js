const postActivities = require("../controllers/postActivities")
const axios = require("axios");
const Sequelize = require('sequelize');
const {Country, Activity} = require("../db")

const postActivityHandler = async (req, res) => {
    const { nombre, dificultad, duracion, temporada, countries } = req.body;
    if (!nombre || !dificultad || !temporada) {
      return res.status(400).send("Un nombre, una difucultad y una temporada son necesarios");
    }
    try {
      const newActivity = await postActivities(
        nombre,
        dificultad,
        duracion,
        temporada,
        countries
      );
      res.status(201).send("Se creo la actividad");
    } catch (error) {
      if (
        error.message === "La actividad ya existe" ||
        error.message === "La actividad debe estar relacionada al menos a un pais"
      ) {
        res.status(409).send(error.message);
      } else {
        res.status(500).send(error);
      }
    }
  };

  module.exports = postActivityHandler;