const { Router } = require("express");
const activityRouter = require("./activityRouter");
const countryRouter = require("./countryRouter");
const getByNameHandler = require("../handlers/getCountryByNameHandler")

const router = Router();

router.use('/countries', countryRouter)
router.get('/country', getByNameHandler)
router.use('/activities', activityRouter)



module.exports = router;