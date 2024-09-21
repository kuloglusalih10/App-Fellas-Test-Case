const express = require("express");
const Router = express.Router();
const flightsController = require("../controllers/flightsController")

const { getFlights } = flightsController

Router.get("/", getFlights);


module.exports = Router