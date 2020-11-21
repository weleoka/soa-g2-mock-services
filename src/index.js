const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;
const artificialDelay = 700; // miliseconds

const ladokDb = require('./ladok/results');
const epokDb = require('./epok/modules');
const studentitsDb = require('./studentits/students');
const canvasDb = require('./canvas/assignments');

// Shallow merge using the spread operator all into one happy fake db.
let db = {...ladokDb(), ...epokDb(), ...studentitsDb(), ...canvasDb()};
// debug the loaded data
//console.log(canvasDb());
// Auto-create the routes for json-server from our db.
const router = jsonServer.router(db);

server.use(function(req, res, next){
  setTimeout(next, artificialDelay);
});

// https://github.com/typicode/json-server/#rewriter-example
server.use(jsonServer.rewriter({
    "/ladok/*": "/$1",
    "/epok/*": "/$1",
    "/studentits/*": "/$1",
    "/canvas/*": "/$1"
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
    console.log("Using artificial delay (ms): " + artificialDelay);
    console.log("JSON Server is running");
})
