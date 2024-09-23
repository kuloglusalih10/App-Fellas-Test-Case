const express = require("express");
const axios = require('axios');
const { format, addDays,parse } = require('date-fns');


const getFlights = async (req, res) => {
    
    try {


        const {flightDirection, departureLocation, arrivalLocation , startDate, endDate} = req.query
        
        const route = flightDirection == 'A' ? arrivalLocation : departureLocation;

        const fromDate = startDate == '' ? format(new Date(), 'yyyy-MM-dd') : startDate   // Default olarak bugünün değerini verdik

        const parsedDate = parse(fromDate, 'yyyy-MM-dd', new Date());

        const parsedTomorrow = addDays(parsedDate, 1);

        const tomorrow = format(parsedTomorrow, 'yyyy-MM-dd');

        const toDate = endDate == '' ? format(tomorrow, 'yyyy-MM-dd') : endDate    // Default olarak yarının değerini verdik

        let config = {

            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api.schiphol.nl/public-flights/flights?flightDirection=${flightDirection}&route=${route}&fromScheduleDate=${fromDate}&toScheduleDate=${toDate}`,
            headers: { 
                'app_id': process.env.SCHIPHOL_APP_ID, 
                'app_key': process.env.SCHIPHOL_APP_KEY, 
                'resourceversion': 'v4', 
        }};

        axios.request(config).then((response) => {

            return res.json({
                res : true, 
                status: 200,
                data : response.data.flights
    
            })

        })
        
    } catch (error) {

        console.log(error)
        return res.json({
            res: false,
            status : 500,
            message : error.message
        })
    }
}

module.exports = { getFlights }