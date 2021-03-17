





import matrix from "mathjs"

function statevector(elemnts, theta, mu) {

    const e = elemnts.e;
    const i = elemnts.inc;
    const w = elemnts.omega;
    const argp = elemnts.w_;
    const a = elemnts.a;

    if (e !== 1) {
        p = a * (1 - e ^ 2); // Ellipse, Hyperbola
    } else {
        p = a; // Parabola (arbitrary convention)
    }

    // Calculate position and vel (norm)
    var r = p / (1 + e * Math.cos(theta));

    var v = Math.sqrt(mu / p);

    // Position  vect
    const r_v = r * [cos(theta), sin(theta), 0];

    // Velocity vector
    const v_v = v * [-sin(theta), e + cos(theta), 0];

    //Rotation ma
    const R313 = rotz(w) * rotx(argp) * rotz(i);

    // Rotate vectors to ICF (xyz) 
    r_ = (R313 * r_v);
    v_ = (R313 * v_v);

    const state = {
        r: r_,
        v: v_
    }

    return state;
}

export default statevector;

function rotx(i) {
    return matrix([1, 0, 0], [0, Math.cos(i), Math.sin(i)], [0, -Math.sin(i), Math.cos(i)]);
}

function rotz(w) {
    return matrix([Math.cos(w), -Math.sin(w), 0], [Math.sin(W), Math.cos(w), 0], [0, 0, 1]);
}

