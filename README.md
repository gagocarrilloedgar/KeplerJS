# KeplerJS
Kepler solver to compute a celestial body position over the surface of the earth.


![npm](https://img.shields.io/npm/dw/keplerjs?logo=NPM) ![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/gagocarrilloedgar/keplerjs?logo=codefactor) ![GitHub repo size](https://img.shields.io/github/repo-size/gagocarrilloedgar/keplerjs?logo=github) ![NPM](https://img.shields.io/npm/l/keplerjs) 


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







