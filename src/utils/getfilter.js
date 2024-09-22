import { compareAsc, parseISO, compareDesc } from "date-fns";

export const getFilter = (sortBy, arrivalTime, stops, airline, flights ) => {



    let newFilteredFlights = [...flights];
    console.log('sort by : ', sortBy)

    // SortBy

    if(sortBy === 'oldest'){

        newFilteredFlights = newFilteredFlights.sort((a, b) => 
            compareDesc(parseISO(a.scheduleDateTime), parseISO(b.scheduleDateTime))
        );

    }
    else if(sortBy === 'newest'){

        newFilteredFlights = newFilteredFlights.sort((a, b) => 
            compareAsc(parseISO(a.scheduleDateTime), parseISO(b.scheduleDateTime))
        );
    }
    else if(sortBy === 'highPrice'){
        
        newFilteredFlights = newFilteredFlights.sort((a, b) => b.price - a.price);
    }
    else if (sortBy === 'lowPrice'){

        newFilteredFlights = newFilteredFlights.sort((a, b) => a.price - b.price);
    }


    // Arrival Time

    if(arrivalTime === 'forenoon'){    // sabah
        newFilteredFlights = newFilteredFlights.filter(flight => flight.arrivalTime.includes('AM'));
    }
    else if(arrivalTime === 'afternoon'){
        newFilteredFlights= newFilteredFlights.filter(flight => flight.arrivalTime.includes('PM'));
    }

    // Stops

    if(stops === 1){
        newFilteredFlights = newFilteredFlights.filter(flight => flight.route.destinations.length == 1);
    }
    else if(stops === 2){
        newFilteredFlights = newFilteredFlights.filter(flight => flight.route.destinations.length == 2);
    }
    else if(stops === 3){
        newFilteredFlights = newFilteredFlights.filter(flight => flight.route.destinations.length >= 3);
    }

    return newFilteredFlights
}