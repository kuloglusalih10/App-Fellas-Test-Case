import {  intervalToDuration, parseISO } from 'date-fns';


export const formatDuration = (flight) => {

    const scheduledTime = parseISO(flight.scheduleDateTime);
    const actualTime = parseISO(flight.estimatedLandingTime ?? flight.actualLandingTime ??  flight.scheduleDateTime);


    const duration = intervalToDuration({
        start: scheduledTime,
        end: actualTime,
    });

    const formattedDuration = `${duration.hours ? duration.hours + 'h ' : ''}${
        duration.minutes ? duration.minutes + 'm ' : ''
        }${duration.seconds ? duration.seconds + 's' : ''}`;

    return formattedDuration
    

}