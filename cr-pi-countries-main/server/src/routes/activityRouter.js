const { Router } = require("express");
const postActivityHandler = require("../handlers/postActivitesHandler");
const getActivitiesHandler = require("../handlers/getActivitieshandler");
const deleteActivity = require("../handlers/deleteActivityhandler");


const activityRouter = Router();

activityRouter.post("/", postActivityHandler);

activityRouter.get("/", getActivitiesHandler);

activityRouter.delete("/", deleteActivity)

module.exports = activityRouter;