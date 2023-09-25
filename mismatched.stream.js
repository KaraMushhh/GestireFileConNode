const { createReadStream, createWriteStream } = require('fs');

const stream = createReadStream('./managing-files-with-nodejs/data/stream.log', {
    encoding: "utf8"
});

const writer = createWriteStream("./managing-files-with-nodejs/data/output.log");

stream.pipe(writer);