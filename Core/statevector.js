/**
 * Astrodynamics | Kepler Solver
 * Author: Edgar Gago Carrillo
 * Date 16/03/2021
 * 
 * Inputs:
 * elemnts:{} objet containg the converted keplerian elements of the celestial body
 * theta: [rad] true anomally
 * mu: Sun gravitaional constant
 * 
 * Outputs:
 * state {r,v} contains the position vector and velocity of a celestial body
 * 
 * Description:
 * Creates the state vector of any celestial body when passing its true anomally and its
 * keplerian elements
 * 
 */

const { matrix, multiply } = require("mathjs");

// rotational matrix around the x direction
function rotx(i) {
    return matrix([[1, 0, 0], [0, Math.cos(i), Math.sin(i)], [0, -Math.sin(i), Math.cos(i)]])._data;
}

// rotational matrix around the x direction
function rotz(w) {
    return matrix([[Math.cos(w), -Math.sin(w), 0], [Math.sin(w), Math.cos(w), 0], [0, 0, 1]])._data;
}


exports.statevector = (elemnts, theta, mu) => {

    const e = elemnts.e;
    const i = elemnts.i;
    const w = elemnts.om;
    const argp = elemnts.w;
    const a = elemnts.a;

    if (e !== 1) {
        const p = a * (1 - e ^ 2); // Ellipse, Hyperbola
    } else {
        const p = a; // Parabola (arbitrary convention)
    }

    // Calculate position and vel (norm)
    let r = p / (1 + e * Math.cos(theta));

    let v = Math.sqrt(mu / p);


    // Position  vect
    const r_v = multiply(r, [Math.cos(theta), Math.sin(theta), 0]);

    // Velocity vector
    const k = parseInt(e) + Math.cos(theta);
    const v_v = multiply(v, [-Math.sin(theta), k, 0]);


    //Rotation ma
    const R313 = multiply(multiply(rotz(w), rotx(argp)), rotz(i));

    // Rotate vectors to ICF (xyz) 
    const r_ = multiply(R313, r_v);
    const v_ = multiply(R313, v_v);

    const state = {
        r: r_,
        v: v_
    }

    return state;
}

