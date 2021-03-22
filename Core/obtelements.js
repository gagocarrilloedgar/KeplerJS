/**
 * Astrodynamics | Kepler Solver
 * Author: Edgar Gago Carrillo
 * Date 16/03/2021
 * 
 * Description
 * Passes the introduced celstial body to the int units and ensures that all the parameters
 * are correctlty encapsuled
 *
 * Inputs
 * body: orbital elements {}
 * 
 * Ouputs
 * a: semi-major 
 * e: eccentricity
 * inc: inclination to 
 * true anomaly
 * omega: argument of 
 * w_: right ascension 
 * M: mean anomaly
 * 
 */

const { deg2rad } = require("./deg2rad");
const { mod } = require("./mod");

exports.obtelements = (body) => {

    if (body == undefined) {
        return Error("El objeto celeste introducido es undefined");
    } else if (Object.keys(body).length < 6) {
        return Error("Faltan uno o más parámetros del objeto")
    }

    const AU = 149597871; // Astronomical Unit
    const pi = Math.PI;

    // Computing the elements
    const obt = {
        a: body.a === undefined ? 1 * AU : body.a, //Km
        e: body.e === undefined ? 0 : body.e, // adim
        i: body.i === undefined ? 0 : deg2rad(body.i),
        om: body.om === undefined ? 0 : mod(deg2rad(body.om), 2 * pi),
        w: body.w === undefined ? 0 : mod(deg2rad(body.w), 2 * pi),
        ma: body.ma === undefined ? 0 : mod(deg2rad(body.ma), 2 * pi)
    }

    return obt;

}

