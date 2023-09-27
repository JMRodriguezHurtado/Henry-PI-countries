const { Router } = require("express");
const postActivity = require("../handlers/postActivitesHandler");
const getActivities = require("../handlers/getActivitieshandler")

const activityRouter = Router();

activityRouter.post("/", postActivity);

activityRouter.get("/", getActivities);

module.exports = activityRouter;