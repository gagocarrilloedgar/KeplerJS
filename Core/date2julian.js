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

exports.date2julian = (year, month, day, hour, minute, second) => {

    const a = Math.floor((14 - month) / 12);
    const y = year + 4800 - a;
    const m = month + 12 * a - 3;

    // Compute Julian Day Number
    const JDN = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - 32083;

    // Find Julian Date
    const JD = JDN + (hour - 12) / 24 + minute / 1440 + second / 86400;

    return JD;
}

