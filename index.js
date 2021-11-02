const http = require('http');
let moment = require('moment');
const PORT = 3001;

let server = http.createServer((req, res) => {
    res.end('Mi primer servidor');
})
server.listen(PORT, ()=>{
    console.log(`Estamos conectados a la URL http://localhost:${PORT}`);
})

//*Abajo echo con la forma anaidada/acortada

http.createServer((req, res) => {
    res.end('Mi primer servidor anidando funciones');
}).listen(PORT, ()=>{
    console.log(`Estamos conectados a la URL http://localhost:${PORT}`);
})

// Ejercio clase

let server = http.createServer((req, res) => {
    let currentTime = moment().format('HH');
    let response = "";

    if (currentTime >= 6 && currentTime <= 12) {
        response = "Buenos Dias";
    } else if(currentTime >= 13 && currentTime <= 19){
        response = "Buenas Tardes"
    }else{
        response = "Buenas Noches"
    }

    res.end(response);
})
server.listen(PORT, ()=>{
    console.log(`Estamos conectados a la URL http://localhost:${PORT}`);
})

//? Desde aquí la parte de la clase con Express

const express = require('express');
const app = express();
const PORT = 8080;

app.get("/",(req, res)=>{
    res.send("Mi primer servidor con Express")
})

app.listen(PORT, () => {
    console.log(`Estamos conectados a la URL http://localhost:${PORT}`)
})
app.on("Error",err => console.log(`Falló njuestra conección al servidor`,err)); 
//Ver más sobre .on() en NodeJS

//* Ejercicio 2

const express = require('express');
const app = express();
const PORT = 8080;
let counter_page =0;

app.get("/",(req, res)=>{
    
    let response = `<h1 style="color:blue;">Bienvenidos al servidor express</h1>`
    
    res.send(response)
})
app.get("/visitas",(req, res)=>{
    counter_page++;
    res.send(`Esta pagina hoy ha tenido ${counter_page}`)
})
app.get("/fyh",(req, res) =>{
    res.json({"fyh": moment().format('L').toString()})
})

app.listen(PORT, () => {
    console.log(`Estamos conectados a la URL http://localhost:${PORT}`)
})
app.on("Error",err => console.log(`Falló njuestra conección al servidor`,err)); 

