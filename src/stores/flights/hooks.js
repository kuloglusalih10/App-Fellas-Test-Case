import { useSelector } from "react-redux";

export const useFlights = () => useSelector(state => state.flights.flights);
export const useIsLoading= () => useSelector(state => state.flights.isLoading);
export const useIsSuccess = () => useSelector(state => state.flights.isSuccess);
export const useIsError = () => useSelector(state => state.flights.isError);



