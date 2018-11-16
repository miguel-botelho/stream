const http = require('http')
const app = require('../app')

const port = normalizePort(process.env.PORT || '3000')

app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('listening', onListening)

function normalizePort(val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) return val

  if (port >= 0) return port

  return false
}

function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  console.info('Server currently listening on ' + bind)
}