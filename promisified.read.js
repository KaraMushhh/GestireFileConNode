const {convertCsv} = require("./managing-files-with-nodejs/csv.parse");
const fs = require('fs');
const {promisify} = require('util');

module.exports.read =() => {
const readFile = promisify(fs.readFile); //convert in a non require function

const read = async () => {
    const data = await readFile("./managing-files-with-nodejs/data/pulitzer-circulation-data.csv", "utf8");
    console.table(convertCsv(data));
};

read();
}