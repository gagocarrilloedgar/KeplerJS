/**
 * Astrodynamics | Kepler Solver
 * Author: Edgar Gago Carrillo
 * Date 16/03/2021
 * 
 * Description
 * Computation of the true anomally 
 *
 * Inputs
 * body: orbital elements {}
 * JD: days from J2000
 * 
 * Ouputs
 * a: semi-major 
 * e: eccentricity
 * inc: inclination to 
 * true anomaly
 * omega: argument of 
 * w_: right ascension 
 * 
 */

const { deg2rad } = require("./deg2rad");
const { mod } = require("./mod");

exports.obtelements = (body, JD) => {

    const AU = 149597871; // Astronomical Unit
    const pi = Math.PI;

    // Compute T reference time (number of centuries past J2000)
    const T = JD / 36525;

    // Adjusting obt elements

    const obt_ = body.map(element => element.val + element.inc);

    // Computing the elements

    const obt = {
        a: obt_[1] * AU,
        e: obt_[2],
        inc: deg2rad(obt_[3]),
        omega: mod(deg2rad(obt_[6]), 2 * pi),
        w_: mod(deg2rad(obt_[5] - obt_[6]), 2 * pi),
        M: mod(mod(deg2rad(obt_[4] - obt_[5]), 2 * pi), 2 * pi),
    }

    return obt;

}

