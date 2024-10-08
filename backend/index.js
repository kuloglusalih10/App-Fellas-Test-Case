var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
require('dotenv').config();


// mongo DB

const mongoose = require('mongoose')
const connectionString = process.env.MONGO_URL

// Routes

const flightsRouter = require("./routes/flightsRoutes");
const booksRouter = require("./routes/bookRoutes")

const app = express();


// Swagger

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Parametre parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


app.use("/api/flights", flightsRouter);
app.use("/api/books", booksRouter)


app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.use("*", (req,res)=> {
    res.send("404 Not Found")
})




// Connect

mongoose.connect(connectionString).then((result)=>{

    app.listen(3000, ()=>{
        console.log('server çalışıyor')
    });

}).catch(err => console.log(err));