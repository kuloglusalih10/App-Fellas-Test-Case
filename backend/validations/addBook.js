const joi  = require("joi");

const schema = joi.object({
    id: joi.string().required().min(5),
    logo : joi.string().required().min(8),
    departureTime : joi.string().required().min(4),
    arrivalTime : joi.string().required().min(4),
    airlineName : joi.string().required().min(5),
    stops : joi.number().required(),
    price : joi.number().required(),
    duration : joi.string().allow('').default(''),
    fromLocation : joi.string().required().min(2),
    toLocation : joi.string().required().min(2),
    airlineIATA : joi.string().required().min(2),
    airlineCode : joi.number().required(),

});

module.exports = schema;