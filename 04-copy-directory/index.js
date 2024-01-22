
const fs = require('fs');

const path = require('path');

const dir = path.join(__dirname, 'files-copy');

let sourceDir= path.join(__dirname, 'files');
let incomingDir = path.join(__dirname, 'files-copy');

fs.readdir(dir, (err, files) => {
	if (err) {
		fs.mkdir(dir, { recursive: true }, err => {
			if (err) {
				throw new Error;
			}
		});
	} else {
		files.forEach(file => {
			fs.unlink(path.join(dir, file), (err) => {
				if (err) {
                    console.log(err);
				}
			})
		})
	}
})


fs.readdir(sourceDir, (err, files) => {
	if (err) {
		throw new Error;
	} files.forEach(file => {
		fs.copyFile( path.join(sourceDir, file), 
                     path.join(incomingDir, file),
                    err => {
         if (err) {
            console.log(err);
        }
             })
        })
    })