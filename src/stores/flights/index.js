import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { compareAsc, parseISO, compareDesc } from "date-fns";
import { formatDuration } from "../../utils/formatDuration";
import { calculatePrice } from "../../utils/calculatePrice";
import { formatTimes } from "../../utils/formatTimes";



export const _fetchFlights = createAsyncThunk(
    'flights/_fetchFlights',

    async (_, {rejectWithValue}) => {

        try{
            var options = {
                "method": "GET",
                "url": "http://localhost:3000/api/flights",
                "headers": {
                    'Accept': 'application/json',
                }
              };
            
            const response  = await axios.request(options);
            
            if(response.data.res){

                response.data.data.map((flight)=>{

                    // Uçuş süresini hesaplama

                    const formattedDuration = formatDuration(flight);
                    flight['duration']= formattedDuration;

                    // Fiyat değerini hesaplama

                    const price = calculatePrice(formattedDuration);
                    flight['price']= price;
                    


                    // Kalkış ve iniş zamanlarını hesaplama

                    const formattedTimes = formatTimes(flight);
                    flight['arrivalTime']= formattedTimes.arrivalTime;
                    flight['departureTime']= formattedTimes.departureTime;


                })

                return response.data
            }
            else{
                return rejectWithValue('reject hata');
            } 
        }
        catch(error){
            return rejectWithValue(error);
        }
    }
)

const initialState = {

  // Fetch State

  'isLoading' : false,
  'isError' : false,
  'isSuccess' : true,

  // Flights

  'flights' : [],
  'filteredFlights' : [],

  // Search

  'flightDirection' : 'D',
  'startDate' : '',   // Default olarak bir günlük uçuşlar listelenecek
  'endDate' : '',
  'departureLocation' : '',
  'arrivalLocation' : '',


  // Filter

  'sortBy' : '',
  'arrivalTime' : '',          // forenoon : öğleden önce  afternoon: öğleden sonra
  'stops' : -1,
  'airline' : 'Alitalia'  // Airline kodu gelecek

}


const flights = createSlice({
  name: 'flights',
  initialState,
  reducers: {

    _setFlights : (state, action) => {
        state.flights = action.payload;
    },

    _setFilteredFlights : (state, action) => {
     
        state.filteredFlights = action.payload;
    },

    _setFlightDirection : (state, action) => {
        state.flightDirection = action.payload;
    },

    _setStartDate : (state, action) => {
        state.startDate = action.payload;
    },

    _setEndDate : (state, action) => {
        state.endDate = action.payload;
    },

    _setDepartureLocation : (state, action) => {
        state.departureLocation = action.payload;
    },

    _setArrivalLocation : (state, action) => {
        state.departureLocation = action.payload;
        
    },

    _setSortBy : (state, action) => {
        
        state.sortBy = action.payload;

        // if(action.payload == 'oldest'){

        //     state.filteredFlights = state.filteredFlights.sort((a, b) => 
        //         compareDesc(parseISO(a.scheduleDateTime), parseISO(b.scheduleDateTime))
        //     );

        // }
        // else if(action.payload == 'newest'){

        //     state.filteredFlights = state.filteredFlights.sort((a, b) => 
        //         compareAsc(parseISO(a.scheduleDateTime), parseISO(b.scheduleDateTime))
        //     );
        // }
        // else if(action.payload == 'highPrice'){

        //     state.filteredFlights = state.filteredFlights.sort((a, b) => b.price - a.price);
        // }
        // else {

        //     state.filteredFlights = state.filteredFlights.sort((a, b) => a.price - b.price);
        // }
        
    },

    _setArrivalTime : (state, action) => {
        state.arrivalTime = action.payload;

        // if(action.payload == 'forenoon'){    // sabah
        //     state.filteredFlights = state.filteredFlights.filter(flight => flight.arrivalTime.includes('AM'));
        // }
        // else{
        //     state.filteredFlights = state.filteredFlights.filter(flight => flight.arrivalTime.includes('PM'));
        // }
    },

    _setStops : (state, action) => {

        state.stops = action.payload;

        // if(action.payload == 1){
        //     state.filteredFlights = state.filteredFlights.filter(flight => flight.route.destinations.length == 1);
        // }
        // else if(action.payload == 2){
        //     state.filteredFlights = state.filteredFlights.filter(flight => flight.route.destinations.length == 2);
        // }
        // else{
        //     state.filteredFlights = state.filteredFlights.filter(flight => flight.route.destinations.length >= 3);
        // }

    },

    _setAirline : (state, action) => {
        state.airline = action.payload;
    },

    
  },
  extraReducers: (builder)=>{

    builder.addCase(_fetchFlights.rejected, (state,action)=>{

       
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // sadece satus değeri ile yönetilebilir
    }),
    builder.addCase(_fetchFlights.pending, (state, action)=>{


        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;

        
    }),

    builder.addCase(_fetchFlights.fulfilled, (state,action)=>{

        state.flights = action.payload.data;
        state.filteredFlights = action.payload.data

        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false
    })
   
}})

export const { _setAirline, _setArrivalLocation, _setArrivalTime, _setDepartureLocation, _setEndDate, _setFlightDirection, _setFlights, _setSortBy, _setStartDate, _setStops, _setFilteredFlights  } = flights.actions
export default flights.reducer