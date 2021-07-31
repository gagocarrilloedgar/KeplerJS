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

exports.trueanom = (obt, E) => {
  const e = obt.e

  let c1 = (1 - e) / (1 + e)
  c1 = Math.sqrt(c1)

  const c2 = Math.tan(E / 2)

  return 2 * Math.atan(c2 / c1)
}
