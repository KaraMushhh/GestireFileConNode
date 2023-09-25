const {convertCsv} = require('./managing-files-with-nodejs/csv.parse'); //convertire csv in oggetti

const {readFile} = require("fs"); //read file function 

module.exports.read =() => {
readFile("./managing-files-with-nodejs/data/pulitzer-circulation-data.csv", "utf8", (err, data) => { //metodo, primo parametro nome file, secondo il formato, callback err e data
    if(err){
        console.log(`There was a problem with the file: ${err}`);
        return;
    }

    const vals = convertCsv(data); //converte in oggetti

    console.table(vals); //stampa oggetti
});
}