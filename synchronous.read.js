const {convertCsv} = require('./managing-files-with-nodejs/csv.parse');

const {readFileSync} = require("fs");

module.exports.read =() => {
try {
    const data = readFileSync("./managing-files-with-nodejs/data/pulitzer-circulation-data.csv", "utf8");
    console.table(convertCsv(data));
} catch (err) {
    console.log(`Error with file: ${err}`);
}
}