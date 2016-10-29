import express from 'express'
import { Server } from 'http'
const app = express(),
      http = Server(app),
      io = require('socket.io')(http),
      port = process.env.PORT || 4444

// import { Server as server } from 'ws'
// const socket = new server({ port: 5000 })
app.get('/', (req, res) => res.sendFile(`${__dirname}/chat-app.html`))

io.on('connection', socket => {
  console.log('Someone connected! :D')
  socket.emit('Hello')

  socket.on('chat message', message => console.log(`Chat message: ${message}`))

  socket.on('disconnect', () => console.log('Somebody left! D:'))
})

http.listen(port, () => console.log('Listening on 4444'))
