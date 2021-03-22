/**
 * Astrodynamics | Kepler Solver
 * Author: Edgar Gago Carrillo
 * Date 16/03/2021
 * 
 * Description
 * Position vector to longitude and latitude
 *
 * Inputs
 * r: position vector [m]
 * r_: radius [m]
 * 
 * Ouputs
 * beta: latitude [rad]
 * lamda: longitude [rad]
 * 
 */

exports.r2longlat = (r, r_) => {

    // Allocation for clearer code
    const x = r[0];
    const y = r[1];
    const z = r[2];


    var beta = Math.asin(z / r_);


    // Quadran check
    if (z < 0) {
        beta = 2 * Math.PI + beta;
    }

    let lamda = Math.asin(y / (r_ * Math.cos(beta)));

    //Quadran check
    if (x < 0) {
        lamda = Math.PI - lamda;
    }

    const pos = {
        lat: beta,
        long: lamda
    }

    return pos;

}
