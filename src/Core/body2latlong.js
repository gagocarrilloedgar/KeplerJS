/* eslint-disable camelcase */
const { norm, subtract } = require('mathjs')
const { keplerslv } = require('./keplerslv')
const { obtelements } = require('./obtelements')
const { r2longlat } = require('./r2longlat')
const { statevector } = require('./statevector')
const { trueanom } = require('./trueanom')

/**
 *
 * @param {*} body
 * @returns {Object}
 */

exports.body2latlong = (body) => {
  // Standard gravitational parameter of the sun
  const mu = 1.32712440018e11 // [km ^ 3 s ^ -2]

  // Earth object fds
  // for the simiplicity of the constant we have supposed
  // the orbital parameters of the earth to be the ones in 0 JD

  const earth = {
    a: 1, // UA
    e: 0.01671022, // deg
    i: 0.00005, // deg
    om: 0, // deg
    w: -11.26064, // deg
    ma: 100.46435 - -11.26064 // deg
  }

  // Orbital elements of the body and the earth
  const obt_body = obtelements(body)
  const obt_e = obtelements(earth)

  // Solving keplers equation
  const E_e = keplerslv(obt_e)
  const E_body = keplerslv(obt_body)

  // True anomaly [rad]
  const theta_e = trueanom(obt_e, E_e)
  const theta_body = trueanom(obt_body, E_body)

  // Angular momentum
  const rv_body = statevector(obt_body, theta_body, mu)
  const rv_e = statevector(obt_e, theta_e, mu)

  const rv = subtract(rv_body.r, rv_e.r)
  const r_ = norm(rv)

  // Finally compute the longitude and latitude
  return r2longlat(rv, r_)
}
