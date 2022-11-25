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

/************************************* Process argv  */
// utilisée pour obtenir les arguments transmis au processus node.js lorsqu'il est exécuté dans la ligne de commande.
// cette propriété renvoie un tableau contenant les arguments passés au processus lors de son exécution dans la ligne de commande.
//  Le premier élément est le chemin d'exécution du processus et le deuxième élément est le chemin du fichier js




 //file system
 const fs =require("fs")

//  Le module de système de fichiers Node.js 
//  intégré nous aide à stocker, accéder et gérer les données sur notre système d'exploitation.
//////////////========================>>>
// Les fonctionnalités couramment utilisées du fs module incluent fs.readFile
//  la lecture de données à partir d'un fichier, fs.writeFilel'écriture de données
//   dans un fichier et le remplacement du fichier 
// s'il existe déjà,  fs.appendFile l'ajout de données à un fichier.
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

      