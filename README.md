# LambertJS
Kepler solver to compute a celestial body position over the surface of the earth.

## Inputs

```javascript

data:{
    y: {type: Number} //year
    m:{type: Number} // month
    d:{type: Number} // day
    h: {type: Number} //hour
    min:{type: Number} // minuts
    sec:{type: Number} // seconds
}

celbody:{
    a: Semi major axis UA
    e: Eccentricity (adim)
    i: Inclination to the ecliptic plane
    omega: Right ascension of the ascending nod (from sun)
    w_: Longitude of perihelion
    L: Mean longitude
}

```

# Outputs

```javascript

posistion:{
    long:{type:Number} // Longitude [grad]
    lat:{type:Number} // latitude [grad]
}

```







