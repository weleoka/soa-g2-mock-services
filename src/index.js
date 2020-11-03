const jsonServer = require('json-server')
const server = jsonServer.create()
const db = require('./ladok/resultat')
const router = jsonServer.router(db());
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 8080

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

//console.log(db());


/* // The following are custom implementations of routes as examples.
server.get('/ladok', (request, response) => {
    if (request.method === 'GET') {
        const users = require('./ladok/user')
        response.status(200).jsonp(users())
    }
})


server.get('/resultat', (request, response) => {
    if (request.method === 'GET') {
    	const db = require('./ladok/resultat')
    	const resultat = db().resultat;
		let pnr = request.query['pnr'];

    	// debug the generated fake data
    	//console.log(pnr);
    	//console.log(db());

    	if (pnr != null) {
    	  //let res = db().resultat.filter(isMatchingPnr);
    	  let res = resultat.filter(el => el.pnr === pnr);

    	  if (res) {
    	    response.status(200).jsonp(res);
    	  } else {
    	    response.status(400).jsonp({
    	      error: "Bad pnr"
    	    })
    	  }

    	} else {
    	  response.status(400).jsonp({
    	    error: "No valid pnr"
    	  });
    	}

        // Return all items in db
        //response.status(200).jsonp(db())
    }
})


server.post('/resultat', (request, response) => {
    if (request.method === 'POST') {
        response.status(200)
    }
})*/


server.listen(port, () => {
    console.log('JSON Server is running')
})
