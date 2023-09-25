const { createReadStream } = require('fs');

const stream = createReadStream('./managing-files-with-nodejs/data/app.log', {
    highWaterMark: 9550, //byte you want to handle 
    encoding: "utf8"});

stream.on('data', data =>{
    stream.pause();
    console.log(data)

    setTimeout(() => {
        stream.resume();
    }, 2000);
});