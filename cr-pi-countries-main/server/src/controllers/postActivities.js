const { Activity, Country } = require("../db")


const postActivity = async(name, difficulty, duration, season, rating, image, Countries, id) => {

    try {

        if(!name || !difficulty || !duration || !season || !rating || !image || !Countries ){
            console.log("Missing data:", { name, difficulty, duration, season, rating, image, Countries });
            throw new Error('Some data is missing')
        }

        const assignedCountries = await Country.findAll({
            where: {
                name: Countries
            }
        })

        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
            rating,
            image
        })

       await newActivity.addCountries(assignedCountries)
 
        return newActivity
        
    } catch (error) {
        throw error
    }

}

module.exports = postActivity