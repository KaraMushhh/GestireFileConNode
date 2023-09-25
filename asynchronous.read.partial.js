const fs = require("fs"); //fs library
const {convertCsv} = require('./managing-files-with-nodejs/csv.parse');

module.exports.read =() => {
fs.open("./managing-files-with-nodejs/data/pulitzer-circulation-data.csv", (err, fd) => { //fs filedescriptor
  const buffer = Buffer.alloc(200); //200 bytes long

  fs.read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
    console.table(convertCsv(buff.toString()));
  });
});
}