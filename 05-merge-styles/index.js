const fs = require('fs');
const path = require('path');

let sourceDir =  path.resolve(__dirname, "styles");
let incomingDir = path.resolve(__dirname, "project-dist", "bundle.css");


fs.unlink(incomingDir, () => {});

fs.readdir(sourceDir, {withFileTypes: true}, function(err, files) {
    if (err) console.log(err);
    let arr = [];
    for (let i = 0; i<files.length; i++) {
        if (files[i].isFile() === true && path.extname(files[i].name) == '.css') {
            const file = path.resolve(sourceDir, files[i].name);
            fs.readFile(file, 'utf-8', (error, data) => {
            arr.push(data);
            fs.appendFile(incomingDir, data, err => {
                if (err) throw err;
            });
        });
        }  
    }
});