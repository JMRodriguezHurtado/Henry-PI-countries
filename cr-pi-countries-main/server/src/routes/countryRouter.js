const { Router } = require("express");
const getCountriesHandler = require("../handlers/getCountrieshandler");
const getByIdHandler = require("../handlers/getCountryByIdHandler")
const getByNameHandler = require("../handlers/getCountryByNameHandler")

const countryRouter = Router();

countryRouter.get("/", getCountriesHandler);

countryRouter.get("/:id", getByIdHandler);

countryRouter.get("/:name", getByNameHandler);

module.exports = countryRouter;