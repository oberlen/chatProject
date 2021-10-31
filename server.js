const express = require('express');
const http = require('http');

const port=4001

const app = express()

const server=http.createServer(app)

// const socketio = require('socket.io');
// const io=socketio(server)

const io = require("socket.io")(server,
     {cors : {origin: ["http://localhost:3000"]}});


let userCount=1

io.on("connection", socket=>{
    
    userCount++

    const username=`Guest ${userCount}`

    socket.emit("SET_USERNAME",username)

    io.sockets.emit("CREATE_MESSAGE",{
        content:`${username} connected`
    })
    
    socket.on("SEND_MESSAGE",messageObject => {

        io.sockets.emit("CREATE_MESSAGE",messageObject)
    })

    socket.on('disconnect', () => {
        io.sockets.emit("CREATE_MESSAGE",{
            content:`${username} disconnected`

        })
    })



})
server.listen(port, () => {
    console.log('Server listening at port %d', port);
  });



// const io = require("socket.io")(httpServer, {
//     cors: {
//       origin: "http://localhost:3000",
//     }
//   });




