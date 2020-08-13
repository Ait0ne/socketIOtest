const express = require('express');
const http = require('http');
const SocketIo = require('socket.io');

const router = require('./router');

const port =  process.env.PORT || 5000;
const app = express();


const server = http.createServer(app);
const io = SocketIo(server);

io.on('connection', (socket) => {
    console.log('new connection')
    
    socket.on('join', ({name, room}) => {
        console.log(name, room)
    })
    
    socket.on('disconnect', () => {
        console.log('diconnected')
    })
})




app.use(router);

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});