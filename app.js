
const fs=require("fs");
fs.writeFileSync("file.txt","My name is gazal");
console.log("gazal")


const func=(req,res)=>{
    res.write("<h1>This is gazal rafi<h1/>")
    res.end();
}
const http=require("http");
http.createServer(func).listen(4000);