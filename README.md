# KeplerJS
Kepler solver to compute a celestial body position over the surface of the earth.

<<<<<<< HEAD
=======
![npm](https://img.shields.io/npm/dw/keplerjs?logo=NPM)
>>>>>>> 7427f9ec40e134e9348a086106431d7e54f87b57

## Install

```shell
npm i keplerjs

```

## Inputs

```javascript

  const earth = {
        a // Semi major axis [UA]
        e // eccentricity [adim]
        i // inclination [deg]
        om // argument ot the perilelion [deg]
        w // right ascension [deg]
        ma // mean anomaly [deg]
    }

```

## Usage

```javascript

const {body2latlong} = require("keplerjs");

/**
 * @param {body} //Celesitial body object
 */

body2latlong(body);

```

# Outputs

```javascript

posistion:{
    long:{type:Number} // Longitude [grad]
    lat:{type:Number} // latitude [grad]
}

```







