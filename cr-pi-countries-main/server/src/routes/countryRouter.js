const { Router } = require("express");
const getCountriesHandler = require("../handlers/getCountrieshandler");
const getCountryByIdHandler = require("../handlers/getCountryByIdHandler")
const getCountryByNameHandler = require("../handlers/getCountryByNameHandler")

const countryRouter = Router();

countryRouter.get("/", getCountriesHandler);

countryRouter.get("/:idPais", getCountryByIdHandler);

countryRouter.get("/:name", getCountryByNameHandler);

module.exports = countryRouter;