var getData = require("./app");
// console.log(getData)
var fs = require('fs')
fs.writeFileSync("UserData.js",JSON.stringify(getData)) 
fs.readFileSync("UserData.js")
fs.rename("UserData.js", "StdData.json",(err)=>{
    if (err) throw err;
    console.log('File Renamed!');
})
// fs.unlinkSync("UserData.js")
