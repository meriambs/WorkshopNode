// Do a quick console.log(process.argv) and you'll immediately spot the problem.

// It starts on 2 because process.argv contains the whole command-line invocation:

// process.argv = ['node', 'yourscript.js', ...]
// Elements 0 and 1 are not "arguments" from the script's point of view, but they are for the shell that invoked the script.

let t = process.argv[2] ;
let z = process.argv[3] ;
let sum =(a,b)=>{
return parseFloat(a) + parseFloat(b) 
}
console.log( process.argv[2],process.argv[3])
console.log( "resultata d la function", sum(t,z))
console.log(process.argv)

module.exports = {sum}



// 3- NodeJS Third Party Module
const uuid = require('uuid');
function createUser(name, age) {
  return {
    name,
    age,
    id: uuid.v4(),
  };
}
//Process.argv = ["Path" , "path" , "name" , "age",......]
console.log(process.argv);
const name = process.argv[2];
const age = process.argv[3];

const user = createUser(name, age);
console.log(user); //return an user object
//ou generateur de password qui est dans votre checkpoint 



// 5- Creating Server
const http = require('http');

const server = http.createServer(function (req, res) {
  res.write('<h1>Introducion to Node Js</h1>');
  res.end();
});

server.listen(5000, (err) => {
  err ? console.log(err) : console.log('The Server is Running on port 5000');
});