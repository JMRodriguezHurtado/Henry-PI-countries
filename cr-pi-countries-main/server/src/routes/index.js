const { Router } = require("express");

const getCountriesHandler = require('../handlers/getCountriesHandler');
const getByIdHandler = require('../handlers/getCountryByIdHandler');
const getByNameHandler = require("../handlers/getCountryByNameHandler");
const postActivityHandler = require("../handlers/postActivitesHandler");
const getActivitiesHandler = require("../handlers/getActivitiesHandler");
const deleteActivity = require("../handlers/deleteActivityHandler");



const router = Router();

router.get('/countries', getCountriesHandler)
router.get('/countries/:id', getByIdHandler)
router.get('/country', getByNameHandler)
router.post('/activities/:id', postActivityHandler)
router.get('/activities', getActivitiesHandler)
router.delete('/activities/:id', deleteActivity)


module.exports = router;