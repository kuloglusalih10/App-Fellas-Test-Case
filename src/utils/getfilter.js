import { compareAsc, parseISO, compareDesc } from "date-fns";

export const getFilter = (sortBy, arrivalTime, stops, airline, flights ) => {



    let newFilteredFlights = [...flights];

    // SortBy

    switch (sortBy) {
        case 'oldest':
            newFilteredFlights = newFilteredFlights.sort((a, b) =>
                compareDesc(parseISO(a.scheduleDateTime), parseISO(b.scheduleDateTime))
            );
            break;
    
        case 'newest':
            newFilteredFlights = newFilteredFlights.sort((a, b) =>
                compareAsc(parseISO(a.scheduleDateTime), parseISO(b.scheduleDateTime))
            );
            break;
    
        case 'highPrice':
            newFilteredFlights = newFilteredFlights.sort((a, b) => b.price - a.price);
            break;
    
        case 'lowPrice':
            newFilteredFlights = newFilteredFlights.sort((a, b) => a.price - b.price);
            break;
    
        default:
            break;
    }
    


    // Arrival Time


    switch (arrivalTime) {
        case 'forenoon':   // sabah
            newFilteredFlights = newFilteredFlights.filter(flight => flight.arrivalTime.includes('AM'));
            break;
    
        case 'afternoon':  // öğleden sonra
            newFilteredFlights = newFilteredFlights.filter(flight => flight.arrivalTime.includes('PM'));
            break;
    
        default:
            break;
    }

    // Stops

    switch (stops) {
        case 1:
            newFilteredFlights = newFilteredFlights.filter(flight => flight.route.destinations.length === 1);
            break;
    
        case 2:
            newFilteredFlights = newFilteredFlights.filter(flight => flight.route.destinations.length === 2);
            break;
    
        case 3:
            newFilteredFlights = newFilteredFlights.filter(flight => flight.route.destinations.length >= 3);
            break;
    
        default:
            break;
    }
    

    // Airline

    console.log('Ariline : ', airline);

    if(airline != ''){

        newFilteredFlights = newFilteredFlights.filter(flight => flight.prefixIATA == airline);
    }

    return newFilteredFlights
}