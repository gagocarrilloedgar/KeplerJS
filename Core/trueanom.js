/**
 * Astrodynamics | Kepler Solver
 * Author: Edgar Gago Carrillo
 * Date 16/03/2021
 * 
 * Description
 * Computation of the true anomally 
 *
 * Inputs
 * ibt: orbital elements {}
 * E: eccentric anomaly [rad]
 * 
 * Ouputs
 * theta: true anomaly [rad]
 * 
 */

function trueanom(obt, E) {
    const e = obt.e;

    var c1 = (1 - e) / (1 + e);
    c1 = Math.sqrt(c1);

    const c1 = Math.tan(E / 2);

    const theta = 2 * Math.atan(c2 / c1);

    return theta;

}
