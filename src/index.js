import express from 'express';
import { createServer } from 'node:http';
import path from 'path';
import { fileURLToPath } from 'url';
import { Server } from 'socket.io';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', ({user , message}) => {
        console.log('message: ' + user + ' ' + message);
        io.emit('chat message', {user , message});

      });

    
    socket.on('disconnect', () => {
        console.log('user disconnected');
      })
});
  

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
