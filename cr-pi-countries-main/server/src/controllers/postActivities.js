const { Activity, Country } = require("../db")


const postActivity = async(name, difficulty, duration, season, Countries, id) => {

    try {

        if(!name || !difficulty || !duration || !season || !Countries || !rating){
            throw new Error('Some data is missing')
        }

        const assignedCountries = await Country.findAll({
            where: {
                name: Countries
            }
        })

        console.log(id, typeof id)

        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
            rating
        })

       /*  await newActivity.addCountries(assignedCountries)
 */
        return newActivity
        
    } catch (error) {
        throw error
    }

}

module.exports = postActivity