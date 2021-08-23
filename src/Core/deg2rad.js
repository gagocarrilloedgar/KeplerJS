/**
 * Astrodynamics | Kepler Solver
 * Author: Edgar Gago Carrillo
 * Date 16/03/2021
 *
 * Inputs:
 * variable in degrees
 *
 * Outputs:
 * x but in radiants
 *
 * Description:
 * From rad to degrees
 *
 */

/**
 *
 * @param {*} x
 * @returns {Number}
 * @example
 * // returns 3.14
 * deg2rad(90);
 * @returns {Number} Returns the value of x for the equation.
 */
exports.deg2rad = (x) => (x * Math.PI) / 180
