
const { norm } = require("mathjs");
const date2julian = require("./date2julian");
const keplerslv = require("./keplerslv");
const obtelements = require("./obtelements");
const statevector = require("./statevector");

exports.body2latlong = (body, earth, date) => {

    // Standard gravitational parameter of the sun
    const mu = 1.32712440018e11; // [km ^ 3 s ^ -2]

    // Julian Century
    const CY = date2julian(date.year, date.month, date.day, date.hour, date.minute, date.second);

    // Orbital elements of the body and the earth
    const obt_body = obtelements(body, JD);
    const obt_e = obtelements(earth, JD);

    // Solving keplers equation
    const E_e = keplerslv(obt_e);
    const E_body = obtelements(obt_body);

    // True anomaly [rad]
    const theta_e = trueanom(obt_e, E_e);
    const theta_body = trueanom(obt_body, E_body);

    // Angular momentum
    const rv_body = statevector(obt_body, theta_body, mu);
    const rv_e = statevector(obt_e, theta_e, mu);

    const rv = rv_body - rv_e;
    const r_ = norm(rv);

    // Finally compute the longitude and latitude
    const pos = r2longlat(rv, r_);

    return pos;
}