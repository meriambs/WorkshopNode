//ici nous avons les modules et les utilisations : 
console.log('Starting Node Js Introduction');

// 1- Creating a simple JavaScript Function
// function sum(a, b) {
//   return a + b;
// }
// let input1 = Number(process.argv[2]);
// let input2 = Number(process.argv[3]);

// console.log(process.argv);
// console.log('the result is', sum(input1, input2));

// 2- NodeJS Core Module
// let fs = require('fs');
// console.log(fs);




 //file system
 const fs =require("fs")
 // =========================
 
     //create a file
    //  fs.writeFile("exemp.txt","this is an exmeple",err=>{
    //      if(err){console.log(err)}  else{
    //          console.log("created with success")
    //          // ------
    //          fs.readFile("exempla.txt",(err,file)=>{
    //              if(err){
    //                  console.log(err)
    //              }else{
    //                  console.log(file)
    //              }
    //          })
             
    //      } 
             
             
    //  })

// =========================    
    //  rename file

// fs.rename('exemple.txt',"test.txt",err=>{
//     err?console.log(err):console.log("renamed succefuly")
// })

// =========================
    //append file
    // fs.appendFile("test.txt","new data added",err=>{
    //     err?console.log(err) : console.log("succesfully added") 
    // })

    // =========================
    //delete file 
    // fs.unlink("exemple.txt",err=>{
    //     err? console.log(err): console.log("deleted success") 
    // })

      