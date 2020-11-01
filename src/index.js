const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 8080

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.listen(port, () => {
    console.log('JSON Server is running')
})
