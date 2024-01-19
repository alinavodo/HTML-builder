const path = require("path");

const dir = path.dirname(__filename);

const fs = require("fs");

const stream = fs.createReadStream(dir+"/text.txt", "utf-8");

let data = "";

stream.on("data", (chunk) => (data += chunk));
stream.on("end", () => console.log("End", data));
stream.on("error", (error) => console.log("Error", error.message));


