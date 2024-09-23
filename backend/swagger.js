const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'AppFellas Api',
    description: 'Basic Api for AppFellas test case'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger-output.json';
const routes = ['./index.js'];



swaggerAutogen(outputFile, routes, doc).then(()=>{
    require("./index.js")
});