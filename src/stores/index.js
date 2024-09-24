import { configureStore } from "@reduxjs/toolkit";
import flights from "./flights";
import books from "./books";

const store = configureStore({
  reducer: {
    flights,
    books
  }
})

export default store