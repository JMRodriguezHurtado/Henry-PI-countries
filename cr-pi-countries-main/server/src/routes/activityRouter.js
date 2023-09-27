const { Router } = require("express");
const postActivity = require("../handlers/postActivitesHandler");
const getActivities = require("../handlers/getActivitieshandler")

const activityRouter = Router();

activityRouter.post("/postactivities", postActivity);

activityRouter.get("/allactivities", getActivities);

module.exports = activityRouter;