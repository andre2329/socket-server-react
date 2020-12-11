// //servidor express
// const express = require('express');
// const app = express();
// //servidor de sockets
// const server = require('http').createServer(app);
// //configuracion del socket server
// const io = require('socket.io')(server);
// //Desplegar el directorio publico


require('dotenv').config();



const Server = require("./models/server");
const server = new Server()
server.execute()