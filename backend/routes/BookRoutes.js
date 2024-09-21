const express = require("express");
const Router = express.Router();
const commentController = require("../controllers/flightsController")

const {  } = commentController

Router.get("/", getAllComment);


module.exports = Router