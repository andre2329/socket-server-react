//servidor express
const express = require('express');

const app = express();
const http = require('http');

//configuracion del socket server
const socketio = require('socket.io');

const path = require('path');
const Sockets = require('./socket');

class Server{
    constructor(){
        this.app = app;
        this.port = process.env.PORT;
        this.server = http.createServer(this.app);
        this.io = socketio(this.server);
    }
    
    middleWares(){

    this.app.use(express.static(path.resolve(__dirname,"../public") ))
    }
    configurarSockets(){
        new Sockets(this.io)
    }
    execute(){
        this.middleWares();
        this.server.listen(this.port,()=>{
            console.log('server running on port' ,this.port);
            });
        this.configurarSockets();
    }
    
}

module.exports = Server;