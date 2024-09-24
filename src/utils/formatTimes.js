import { DateTime } from 'luxon';
import { format, parse } from 'date-fns';



export const formatTimes = (flight) => {

    //  beklenen varış zamanı yoksa gerçek varış zamanı oda yoksa planlanan kalkış zamanı

    let arrivalTime = DateTime.fromISO(flight.estimatedLandingTime ?? flight.actualLandingTime ??  flight.scheduleDateTime,{ setZone: true }).toFormat('HH:mm');
    let departureTime = DateTime.fromISO(flight.scheduleDateTime,{ setZone: true }).toFormat('HH:mm');   // planlanan kalkış saati


    return {
        'arrivalTime' : format(parse(arrivalTime, 'HH:mm', new Date), 'HH:mm a') ,
        'departureTime' : format(parse(departureTime, 'HH:mm', new Date), 'HH:mm a')
    }
    

}