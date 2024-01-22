 const fs = require('fs'); 
 const path = require("path");
 const filedir = path.join(__dirname,"secret-folder");

 fs.readdir(filedir, (err, files) => { 
    if (err) 
      console.log(err); 
    else { 
        files.forEach(file => {
            fs.stat(path.join(filedir, file), (error, stats) => { 
                if (error) { 
                  console.log(error); 
                } 
                else {
                    if(stats.isFile()){
                        console.log( path.parse(file).name +
                        "-" +
                        path.parse(file).ext.slice(1) +
                        "-" +
                        stats.size.toString()/1024 + "kb")
                    } 
                } 
              });              
        });
    }
  }) 




