const { Router } = require("express");
const postActivity = require("../handlers/postActivitesHandler");
const getActivities = require("../handlers/getActivitieshandler")

const activityRouter = Router();

activityRouter.post("/activities", postActivity);

activityRouter.get("/activities", getActivities);

module.exports = activityRouter;