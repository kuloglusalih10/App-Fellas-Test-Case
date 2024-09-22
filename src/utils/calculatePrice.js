export const calculatePrice = (time) => {

    if (!time || time.includes('-') ) return 0;   // eksi ve tanımsız değerler için 0
  
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    const timeRegex = /(?:(\d+)h)?\s*(?:(\d+)m)?\s*(?:(\d+)s)?/;
    const match = time.match(timeRegex);
  
    if (match) {
      hours = match[1] ? parseInt(match[1]) : 0;
      minutes = match[2] ? parseInt(match[2]) : 0;
      seconds = match[3] ? parseInt(match[3]) : 0;
    }
    else{
        return 0
    }

    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

    return totalSeconds;
  }
  