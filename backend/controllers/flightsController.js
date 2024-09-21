const express = require("express");
const axios = require('axios');


const getFlights = async (req, res) => {
    
    try {


        let config = {

            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.schiphol.nl/public-flights/flights',
            headers: { 
                'app_id': process.env.SCHIPHOL_APP_ID, 
                'app_key': process.env.SCHIPHOL_APP_KEY, 
                'resourceversion': 'v4', 
                // 'Accept': 'application/json',
        }};

        axios.request(config).then((response) => {

            return res.json({
                res : true, 
                status: 200,
                data : response.data.flights
    
            })

        })
        
    } catch (error) {

        return res.json({
            res: false,
            status : 500,
            message : error.message
        })
    }
}

module.exports = { getFlights }