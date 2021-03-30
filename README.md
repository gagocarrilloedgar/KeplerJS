# KeplerJS
Kepler solver to compute a celestial body position over the surface of the earth.

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

const {body2longlat} = require("keplerjs");

/**
 * @param {body} //Celesitial body object
 */

body2longlat(body);

```

# Outputs

```javascript

posistion:{
    long:{type:Number} // Longitude [grad]
    lat:{type:Number} // latitude [grad]
}

```







