const express = require("express");
const Router = express.Router();
const bookController = require("../controllers/bookController")

const {  addNewBook, deleteBookById, getAllBooks, getBookById} = bookController

Router.get("/", getAllBooks);
Router.post("/add-book", addNewBook);
Router.post("/delete-book", deleteBookById);
Router.post("/get-book", getBookById);


module.exports = Router