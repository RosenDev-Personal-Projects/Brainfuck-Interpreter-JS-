const startloopSymbol ='[';
const endLoopSymbol =']';
const maxCells= 100;
const arr = new Array(maxCells);
arr.fill(0)
let currentIndex = 0;

let commands={
    ">":function(){
     
    if(currentIndex+1>maxCells){
        throw new Error("You've reached maximum count of allowed cells.");
    }
       currentIndex++;
},
"<":function(){

    if(currentIndex-1<0){
        throw new Error("Error negative index!")
    }
    currentIndex--;
},
"+":function()
{
arr[currentIndex]++;
},
"-":function()
{
arr[currentIndex]--;
},
",":function(){
    console.log(String.fromCharCode(arr[currentIndex]))
}
}

function interpretExpression(code)
{
for (let i = 0; i <code.length; i++) {
    
 if(typeof commands[code[i]]=== 'function'){
     commands[code[i]]();
 }

 if(code[i]===startloopSymbol)
 {
     interpretLoop(code.substring(i+1,code.indexOf(endLoopSymbol)));
    i=code.indexOf(endLoopSymbol);
 }
}
}
function interpretLoop(loopCode) {
    do {
        console.log(arr[currentIndex]);
        for (let i = 0; i < loopCode.length; i++) {
            commands[loopCode[i]]();
        }
    } while (arr[currentIndex] !== 0);
}

module.exports.startInterpret = interpretExpression;

