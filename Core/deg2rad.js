
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


function deg2rad(x) {
    return (x * Math.PI / 180)
}

export default deg2rad  ;