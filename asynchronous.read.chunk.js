const fs = require("fs");
const {convertCsv} = require('../managing-files-with-nodejs/csv.parse');

module.exports.read =() => {
let totalSize = 0;
fs.stat("./managing-files-with-nodejs/data/app.log", (err, {size}) => totalSize = size);

fs.open("./managing-files-with-nodejs/data/app.log", (err, fd) => {
  const buffer = Buffer.alloc(200);

  for(let i = 0; i <= totalSize / buffer.length; i++){ //total size / induvidual chunk
    fs.read(fd, buffer, 0, buffer.length, i*buffer.length, (err, count, buff) => {
      console.log(buff.toString());
    });
  }
});
}