const { Activity } = require("../db.js");
const { Country } = require("../db.js");


const controllerDeleteActivity = async (idActivity) => {
    const activity = await Activity.findByPk(idActivity);
    if (!activity) {
      throw new Error("The activity does not exist");
    }
    await activity.destroy();
    return activity;
  };
  
  module.exports = controllerDeleteActivity;