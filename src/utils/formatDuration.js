import {  intervalToDuration, parseISO } from 'date-fns';


export const formatDuration = (flight) => {

    // stringe parse ediyoruz

    const scheduledTime = parseISO(flight.scheduleDateTime);
    const actualTime = parseISO(flight.estimatedLandingTime ?? flight.actualLandingTime ??  flight.scheduleDateTime);

    // iki zaman arasındaki süreyi hesaplıyoruz

    const duration = intervalToDuration({
        start: scheduledTime,
        end: actualTime,
    });

    // saatleri kısaltarak formatlıyoruz
    
    const formattedDuration = `${duration.hours ? duration.hours + 'h ' : ''}${
        duration.minutes ? duration.minutes + 'm ' : ''
        }${duration.seconds ? duration.seconds + 's' : ''}`;

    return formattedDuration
    

}