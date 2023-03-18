const path = require('path');
const fs = require('fs');


module.exports = {
    visiteds: JSON.parse(fs.readFileSync(path.join(__dirname, "/index.json"), "utf-8")),
    readJSON : (json)=>{
        return JSON.parse(fs.readFileSync(path.resolve(__dirname, json)))
    },
    writeJSON: (json, array)=>{
       return fs.writeFileSync(path.resolve(__dirname, json), JSON.stringify(array), 'utf-8')
    },
    
}