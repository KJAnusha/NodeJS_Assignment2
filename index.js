const fs = require("fs");
const readfile = "C:/Users/Anu/Desktop/Node_Assignment2/readfile.json";
const writefile = "C:/Users/Anu/Desktop/Node_Assignment2/writefile.json";
const file = require(readfile);
file.name = "Wipro Ltd";
fs.writeFileSync(writefile, JSON.stringify(file));