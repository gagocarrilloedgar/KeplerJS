// MAIN OF THE PROGRAM

const getBodies = async (filename) => {

    const bodies = await csv().fromFile(filename);
    return bodies;
}

const { body2latlong } = require("./Core/body2latlong");
const csvFilePath = "./Assets/PHA.csv";
const csv = require('csvtojson');

// Earth object 
// for the simiplicity of the constant we have supposed 
// the orbital parameters of the earth to be the ones in 0 JD

const main = async () => {

    const earth = {
        a: 1, // UA
        e: 0.01671022, //deg
        i: 0.00005,//deg
        om: 0,//deg
        w: -11.26064, //deg
        ma: 100.46435 - (-11.26064),//deg
    }

    // Get one element to test
    const bodies = await getBodies(csvFilePath);

    bodies.map(body => body2latlong(body, earth));

}

main();


