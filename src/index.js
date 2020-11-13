const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

const ladok_db = require('./ladok/resultat');
const epok_db = require('./epok/modul');
const studentits_db = require('./studentits/student');

// Shallow merge using the spread operator all into one fake db.
let db = {...ladok_db(), ...epok_db(), ...studentits_db()};
// debug the loaded data
//console.log(db);
// Auto-create the routes for json-server from our db.
const router = jsonServer.router(db);

// https://github.com/typicode/json-server/#rewriter-example
server.use(jsonServer.rewriter({
    "/ladok/*": "/$1",
    "/epok/*": "/$1",
    "/studentits/*": "/$1"
}))

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);


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
