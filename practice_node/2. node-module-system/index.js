//module.exports similar to export
//require similar to import 
const firstModule = require('./first-module');

console.log(firstModule.add(10,20));

try{
    console.log("trying to divide by zero");
    let result = firstModule.divide(0, 10);
    console.log(result);
}catch(error){
    console.log("caught an error",error.message);
}


//module wrapper
// (
//     function (exports, require, module, _filtename, _dirname) {
//         //your module code goes here
//     }
// )
