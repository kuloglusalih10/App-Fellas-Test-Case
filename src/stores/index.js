import { configureStore } from "@reduxjs/toolkit";
import flights from "./flights";

const store = configureStore({
  reducer: {
    flights
  }
})

export default store