const { Router } = require("express");
const getCountriesHandler = require("../handlers/getCountrieshandler");
const getByIdHandler = require("../handlers/getCountryByIdHandler")


const countryRouter = Router();

countryRouter.get('/', getCountriesHandler)
countryRouter.get('/:id', getByIdHandler)

module.exports = countryRouter;