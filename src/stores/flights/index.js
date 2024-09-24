import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { formatDuration } from "../../utils/formatDuration";
import { calculatePrice } from "../../utils/calculatePrice";
import { formatTimes } from "../../utils/formatTimes";
import { toast } from "react-toastify";


export const _fetchFlights = createAsyncThunk(
    'flights/_fetchFlights',

    async (data, thunkApi) => {

        const {flightDirection, departureLocation, arrivalLocation , startDate, endDate} = thunkApi.getState().flights

        try{
            var options = {
                "method": "GET",
                "url": new URL(`http://localhost:3000/api/flights?flightDirection=${flightDirection}&departureLocation=${departureLocation}&arrivalLocation=${arrivalLocation}&startDate=${startDate}&endDate=${endDate}`),
                "headers": {
                    'Accept': 'application/json',
                }
              };
            
            const response  = await axios.request(options);
            
            if(response.data.res){

                if(response.data.data){    // Verinin boş olup olmadığını kontrol ettik , uçuş yoksa boş gelebilir

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
    
                    return response.data.data
                }
                else{

                    return [];
                }

            }
            else{
                return thunkApi.rejectWithValue('reject hata');
            } 
        }
        catch(error){
            return thunkApi.rejectWithValue(error);
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
  'departureLocation' : 'IST',
  'arrivalLocation' : 'AMS',


  // Filter

  'sortBy' : 'newest',
  'arrivalTime' : '',          // forenoon : öğleden önce  afternoon: öğleden sonra
  'stops' : -1,
  'airline' : ''  // Airline kodu gelecek

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
        state.arrivalLocation = action.payload;
    },

    _setSortBy : (state, action) => {
        state.sortBy = action.payload
    },

    _setArrivalTime : (state, action) => {

        state.arrivalTime = action.payload

    },

    _setStops : (state, action) => {

        state.stops = action.payload 


    },

    _setAirline : (state, action) => {

        state.airline = action.payload 

    },

    
  },
  extraReducers: (builder)=>{

    builder.addCase(_fetchFlights.rejected, (state,action)=>{  // istek başarısız olursa

        toast('Bağlantı hatası', {type: 'error'})
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // sadece satus değeri ile yönetilebilir
    }),
    builder.addCase(_fetchFlights.pending, (state, action)=>{   // isteğin işlendiği süreç


        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        
    }),

    builder.addCase(_fetchFlights.fulfilled, (state,action)=>{   // istek olumlu sonuçlandıysa

        state.flights = action.payload;
        state.filteredFlights = action.payload

        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false
    })
   
}})

export const { _setAirline, _setArrivalLocation, _setArrivalTime, _setDepartureLocation, _setEndDate, _setFlightDirection, _setFlights, _setSortBy, _setStartDate, _setStops, _setFilteredFlights  } = flights.actions
export default flights.reducer