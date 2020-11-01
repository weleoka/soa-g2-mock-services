const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 8080

server.use(jsonServer.bodyParser)
server.use(middlewares)


server.get('/ladok', (request, response) => {
    if (request.method === 'GET') {
        const users = require('./ladok/index')
        response.status(200).jsonp(users())
    }
})


server.listen(port, () => {
    console.log('JSON Server is running')
})
