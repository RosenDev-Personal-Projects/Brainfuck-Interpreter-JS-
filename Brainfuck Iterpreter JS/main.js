 
 const loadFile= require("./fileLoader").loadFile;
 const runCode = require("./interpreter").startInterpret
const commands={
    "brainfuck":(file)=>{
        var code = loadFile(file)
        console.log(code.toString())
         runCode(code.toString())
    },
    "exit":()=>{return process.exit(0)}
}
const readLine = require("readline");
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
rl.on('line', (input) => {
    if(typeof commands[input]==='function'&& input ==='exit')
    {
        commands[input]();
    }else if(input.includes("brainfuck")){
        let [cmd,file] = input.split(" ");
        commands[cmd](file);
    }
    
    
  });

