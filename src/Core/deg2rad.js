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
 * @returns
 */
exports.deg2rad = (x) => (x * Math.PI) / 180
