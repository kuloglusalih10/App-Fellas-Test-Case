import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router';




export const _fetchBooks = createAsyncThunk(
    'books/_fetchBooks',

    async (data, thunkApi) => {

        try{
            var options = {
                "method": "GET",
                "url": new URL(`http://localhost:3000/api/books`),
                "headers": {
                    'Accept': 'application/json',
                }
              };
            
            const response  = await axios.request(options);
            
            if(response.data.res){

                return response.data.data
               
            }
            else{
                return thunkApi.rejectWithValue('Veritabanı hatası');

            } 
        }
        catch(error){
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const _addBook = createAsyncThunk(
    'books/_addBook',

    async (data, thunkApi) => {

        const {id, logo, departureTime , arrivalTime, airlineName, stops, duration, fromLocation, toLocation, airlineIATA, airlineCode} = data

        try{
            var options = {
                "method": "POST",
                "url": new URL(`http://localhost:3000/api/books/add-book`),
                "headers": {
                    'Accept': 'application/json',
                },
                data: data
              };
            
            const response  = await axios.request(options);
       
            if(response.data.res){

                if(response.data.data){    // Verinin boş olup olmadığını kontrol ettik , uçuş yoksa boş gelebilir

                    return response.data.data
                }
                else{
                    return [];
                }

            }
            else{
                return thunkApi.rejectWithValue(response.data.message);
            } 
        }
        catch(error){
            console.log('error : ', error);

            return thunkApi.rejectWithValue(error);
        }
    }
)

const initialState = {

  // Fetch State

  'isLoading' : false,
  'isError' : false,
  'isSuccess' : true,

    // Books

   'books' : []

}


const books = createSlice({

  name: 'books',
  initialState,
  reducers: {

    _setBooks : (state, action) => {
        state.books = action.payload;
    },
    
  },
  extraReducers: (builder)=>{

    builder.addCase(_fetchBooks.rejected, (state,action)=>{

        toast('Bağlantı hatası', {type: 'error'})
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // sadece satus değeri ile yönetilebilir
    }),
    builder.addCase(_fetchBooks.pending, (state, action)=>{


        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;

        
    }),

    builder.addCase(_fetchBooks.fulfilled, (state,action)=>{

        state.books = action.payload;

        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false
    })

    builder.addCase(_addBook.rejected, (state,action)=>{

        toast(action.payload, {type: 'error'});
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // sadece satus değeri ile yönetilebilir
    }),

    builder.addCase(_addBook.pending, (state, action)=>{

        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        
    }),

    builder.addCase(_addBook.fulfilled, (state,action)=>{

        toast('Rezervasyon oluşturuldu', {type: 'success'});
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false
    })
   
}})

export const {  _setBooks } = books.actions
export default books.reducer