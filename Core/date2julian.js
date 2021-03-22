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
    } else if (Object.keys(date).length !== 6) {
        return Error("Falta uno o más parámetros en el objeto date")
    }


    const a = Math.floor((14 - date.month) / 12);
    const y = checkKey(date, "year") + 4800 - a;
    const m = checkKey(date, "month") + 12 * a - 3;



    // Compute Julian Day Number
    const JDN = checkKey(date, "day") + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - 32083;

    // Find Julian Date
    const JD = JDN + (checkKey(date, "hour") - 12) / 24 + checkKey(date, "minute") / 1440 + checkKey(date, "second") / 86400;

    return JD;
}

const checkKey = (date, param) => {
    if (date[param] === undefined) {
        return Error(`${param} no se ha pasado dentro del objecto date`)
    } else {
        return 0
    }

}
