import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const _fetchFlights = createAsyncThunk(
    'flights/_fetchFlights',

    async (_, {rejectWithValue}) => {

        try{
            console.log('burada')
            var options = {
                "method": "GET",
                "url": "http://localhost:3000/api/flights",
                "headers": {
                    'Accept': 'application/json',
                }
              };
            
            const response  = await axios.request(options);
            
            if(response.data){
                return (response.data)
            }
            else{
                return rejectWithValue('reject hata');
            } 
        }
        catch(error){
            console.log('Error', error)
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

  // Search

  'flightDirection' : 'D',
  'startDate' : new Date(),   // Default olarak bir günlük uçuşlar listelenecek
  'endDate' : new Date(),
  'departureLocation' : '',
  'arrivalLocation' : '',


  // Filter

  'sortBy' : '+scheduleTime',
  'arrivalTime' : '1',          // 1 : öğleden önce  2: öğleden sonra
  'stops' : 0,
  'airline' : 'Alitalia'  // Airline kodu gelecek

}


const flights = createSlice({
  name: 'flights',
  initialState,
  reducers: {

    _setFlights : (state, action) => {
        state.flights = action.payload;
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
    },

    _setArrivalTime : (state, action) => {
        state.arrivalTime = action.payload;
    },

    _setStops : (state, action) => {
        state.stops = action.payload;
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

        console.log(action.payload);

        state.flights = action.payload;

        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false
    })
   
}})

export const { _setAirline, _setArrivalLocation, _setArrivalTime, _setDepartureLocation, _setEndDate, _setFlightDirection, _setFlights, _setSortBy, _setStartDate, _setStops  } = flights.actions
export default flights.reducer