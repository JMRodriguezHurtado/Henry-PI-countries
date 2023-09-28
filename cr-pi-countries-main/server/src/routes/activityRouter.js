const { Router } = require("express");
const postActivity = require("../handlers/postActivitesHandler");
const getActivities = require("../handlers/getActivitieshandler");
const deleteActivity = require("../handlers/deleteActivityhandler");

const activityRouter = Router();

activityRouter.post("/", postActivity);

activityRouter.get("/", getActivities);

activityRouter.delete("/", deleteActivity)

module.exports = activityRouter;