import store from "..";
import {_setAirline, _setArrivalLocation, _setArrivalTime, _setDepartureLocation, _setEndDate, _setFlightDirection, _setFlights, _setSortBy, _setStartDate, _setStops ,_fetchFlights, _setFilteredFlights} from ".";

export const setAirline = data => store.dispatch(_setAirline(data));
export const setArrivalLocation = data => store.dispatch(_setArrivalLocation(data));
export const setArrivalTime = data => store.dispatch(_setArrivalTime(data));
export const setDepartureLocation = data => store.dispatch(_setDepartureLocation(data));
export const setEndDate = data => store.dispatch(_setEndDate(data));
export const setFlightDirection = data => store.dispatch(_setFlightDirection(data));
export const setFlights = data => store.dispatch(_setFlights(data));
export const setSortBy = data => store.dispatch(_setSortBy(data));
export const setStartDate = data => store.dispatch(_setStartDate(data));
export const setStops = data => store.dispatch(_setStops(data));
export const fetchFlights = data => store.dispatch(_fetchFlights(data));
export const setFilteredFlights = data => store.dispatch(_setFilteredFlights(data));