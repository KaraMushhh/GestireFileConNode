const fs = require("fs");
const {convertCsv} = require('./managing-files-with-nodejs/csv.parse');

module.exports.read =() => {
fs.open("./managing-files-with-nodejs/data/pulitzer-circulation-data.csv", (err, fd) => {
  const buffer = Buffer.alloc(200);

  fs.read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
    console.table(convertCsv(buff.toString()));
  });
});
}