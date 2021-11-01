// const http = require('http');
// let moment = require('moment');
// const PORT = 3001;

// // let server = http.createServer((req, res) => {
// //     res.end('Mi primer servidor');
// // })
// // server.listen(PORT, ()=>{
// //     console.log(`Estamos conectados a la URL http://localhost:${PORT}`);
// // })

// //*Abajo echo con la forma anaidada/acortada

// // http.createServer((req, res) => {
// //     res.end('Mi primer servidor anidando funciones');
// // }).listen(PORT, ()=>{
// //     console.log(`Estamos conectados a la URL http://localhost:${PORT}`);
// // })

// //Ejercio clase

// let server = http.createServer((req, res) => {
//     let currentTime = moment().format('HH');
//     let response = "";

//     if (currentTime >= 6 && currentTime <= 12) {
//         response = "Buenos Dias";
//     } else if(currentTime >= 13 && currentTime <= 19){
//         response = "Buenas Tardes"
//     }else{
//         response = "Buenas Noches"
//     }

//     res.end(response);
// })
// server.listen(PORT, ()=>{
//     console.log(`Estamos conectados a la URL http://localhost:${PORT}`);
// })

//? Desde aquí la parte de la clase con Express

