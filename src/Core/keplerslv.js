/**
 * Astrodynamics | Kepler Solver
 * Author: Edgar Gago Carrillo
 * Date 16/03/2021
 *
 * Inputs:
 * obtj: {} object containing the celstial body main parameteres

 * Outputs:
 * JD: Julian Day
 *
 * Description:
 * Euler iterative method to solve the kepler's equation
 *
 */
const { deg2rad } = require('./deg2rad')

exports.keplerslv = (obt) => {
  // Inits
  const M = deg2rad(obt.ma) // Mean anomaly
  const e = obt.e // eccensitricty

  const delta = 10e-7 // Error
  let t = 1 // While initialization
  let i = 1 // Variable to count the numer of iterations
  let E = M // Initialization
  const max = 50 // Maximum iterations

  while (Math.abs(t) > delta) {
    const F = E - e * Math.sin(E) - M // function to solve F(M) = E - e*sin(E) - M = 0
    const dF = 1.0 - e * Math.cos(E) // derivative of F(M)

    if (Math.abs(dF) < delta) {
      break
    } else {
      t = F / dF
      E = E - t
      i = i + 1

      if (i > max) {
        console.log(`no convergence after ${max} iterations`)
        break
      }
    }
  }

  return E
}
