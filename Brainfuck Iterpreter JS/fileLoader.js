const fs = require("fs");
function loadFile(path){
    if(!validatePath(path)){
      throw new Error("This file is not valid Brainfuck code file!");
    }
    var result
    try{
  result = fs.readFileSync(path,"utf-8");
    }catch(e){
      console.log(e)
    }
    return result;
}

function validatePath(path){
    return path.includes(".bfk")
}

module.exports.loadFile = loadFile;