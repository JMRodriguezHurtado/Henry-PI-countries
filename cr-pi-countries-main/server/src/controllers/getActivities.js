const axios = require("axios");

async function getActivities(req, res) {
  const URL = require ("../models/Activity");

  try {
    
    const {data} = await axios.get(`${URL}`);

    const activity = {
      id: data.cca3,
      nombre: data.nombre,
      dificultad: data.dificultad,
      temporada: data.temporada,
      duracion: data.duracion,
      rating: data.rating, 
    };

    activity.nombre
      ? res.status(200).json(activity)
      : res.status(404).json({message: "No hay tal"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

module.exports = getActivities;