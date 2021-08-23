# KeplerJS

Kepler solver to compute a celestial body position over the surface of the earth.

![npm](https://img.shields.io/npm/dw/keplerjs?logo=NPM) ![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/gagocarrilloedgar/keplerjs?logo=codefactor) ![GitHub repo size](https://img.shields.io/github/repo-size/gagocarrilloedgar/keplerjs?logo=github) ![NPM](https://img.shields.io/npm/l/keplerjs)


## Usage

```javascript

const {body2latlong} = require("keplerjs");

/**
 * @param {body} //Celesitial body object
 */

body2latlong(body);

```

```javascript

posistion:{
    long:{type:Number} // Longitude [grad]
    lat:{type:Number} // latitude [grad]
}

```


## API

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

## Install

```shell
npm i keplerjs

```

## See more

[API Documentation with swagger](https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do)


## Contribution 

Para contribuir simplemente puedes:

1. Clone the repo
2. Create a branch with the name of the feature you want to add
3. Pull to your branch
4. Create a pull request to dev so it can be checked and merged


## Contact info 

You can contact me on LinkedIn

[Edgar Gago Carrillo](https://www.linkedin.com/in/edgargagocarrillo/)

or at:

> edgargc.upc@gmail.com

## License 

[MIT](https://opensource.org/licenses/MIT)
