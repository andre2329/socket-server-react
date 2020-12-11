
class Sockets{

    constructor(io){
        this.io = io;
        this.socketsEvents();
    }
    socketsEvents(){
        //on conection
        this.io.on('connection', (socket) => { 
            console.log(socket.id)
            socket.emit('mensaje-bienvenida',{
                msg:'Bienvenido al server',
                fecha: new Date()
            })
            socket.on('respuesta',(data)=>{
                console.log(data)
                this.io.emit('mensaje-nuevo',data)
            })
        });
    }
}

module.exports = Sockets;