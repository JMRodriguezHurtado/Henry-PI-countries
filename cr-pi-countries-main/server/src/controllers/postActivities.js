const { Activity, Country } = require("../db"); 

const postActivities = async (req, res) => {
    try {
        const { countryName, activityName } = req.body; 
        
        const country = await Country.findOne({
            where: { name: countryName },
        });

        if (!country) {
            return res.status(404).json({ error: "Country not found" });
        }

        const newActivity = await Activity.create({
            nombre: activityName,
            duracion: req.body.duracion,
            dificultad: req.body.dificultad, 
            temporada: req.body.temporada, 
            rating: req.body.rating,
        });

        await newActivity.setCountry(country);

        res.status(200).json(newActivity);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Error while creating activity" });
    }
};

module.exports = postActivities;