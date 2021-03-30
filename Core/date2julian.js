/**
 * Astrodynamics | Kepler Solver
 * Author: Edgar Gago Carrillo
 * Date 16/03/2021
 * 
 * Inputs:
 * Calendar date format: year, month, day, hour, minute, second
 
 * Outputs:
 * JD: Julian Day
 * 
 * Description:
 * Function that generates the Julian date from a traditional date time format
 * more info about Juñian dates:
 * 
 * 
 */


exports.date2julian = (date) => {


    if (date === undefined) {
        return 0
    } else if (Object.keys(date).length < 6) {
        return Error("Falta uno o más parámetros en el objeto date")
    }

    // Keys check

    for (i = 0; i <= Object.keys(date).length; ++i) {

    }
    const resp = Object.keys(date).map(param => {
        if (date[param] === undefined) {
            return 0;
        }

    })

    console.log(resp);

    const a = Math.floor((14 - date.month) / 12);
    const y = date.year + 4800 - a;
    const m = date.month + 12 * a - 3;


    // Compute Julian Day Number
    const JDN = date.day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - 32083;

    // Find Julian Date
    const JD = JDN + (date.hour - 12) / 24 + date.minute / 1440 + date.second / 86400;

    return JD;
}



