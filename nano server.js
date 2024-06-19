const express = require('express');
const http = require('http');
const webSocket = require('ws');


const app = express();
const server = http.createServer(app);
const wss = new webSocket.Server({server});


wss.on('connection', (ws) => {
        ws.on('message', (message) => {
         // Broadcast the message to all clients
        wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === webSocket.OPEN) {
               client.send(message);
             }
         });
      });
     });

server.listen(8080, () => {
   console.log('webSocket Server is listening on port 8080');
});
















