import { useSelector } from "react-redux";

export const useFlights = () => useSelector(state => state.flights.flights);
export const useIsLoading= () => useSelector(state => state.flights.isLoading);
export const useIsSuccess = () => useSelector(state => state.flights.isSuccess);
export const useIsError = () => useSelector(state => state.flights.isError);
export const useSortBy = () => useSelector(state => state.flights.sortBy);
export const useArrivalTime = () => useSelector(state => state.flights.arrivalTime);
export const useStops = () => useSelector(state => state.flights.stops);
export const useAirline = () => useSelector(state => state.flights.airline);
export const useFilteredFlights = () => useSelector(state => state.flights.filteredFlights);
export const useFlightDirection = () => useSelector(state => state.flights.flightDirection);
export const useStartDate = () => useSelector(state => state.flights.startDate);
export const useEndDate = () => useSelector(state => state.flights.endDate);
export const useDepartureLocation = () => useSelector(state => state.flights.departureLocation);
export const useArrivalLocation = () => useSelector(state => state.flights.arrivalLocation);

