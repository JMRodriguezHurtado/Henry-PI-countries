const { Activity, Country } = require("../db"); 

    const postActivities = async (
        nombre,
        dificultad,
        duracion,
        temporada,
        rating,
        countries
      ) => {
        const existingActivity = await Activity.findOne({ where: { nombre } });
        if (existingActivity) {
          throw new Error("Esta actividad ya existe");
        }
        if (!countries || countries.length === 0) {
          throw new Error("Toda actividad debe tener almenos un pais");
        }
        const newActivity = await Activity.create({
          nombre,
          dificultad,
          duracion,
          temporada,
          rating
        });
        await newActivity.setCountries(countries);
        return newActivity;
      };
    

module.exports = postActivities;