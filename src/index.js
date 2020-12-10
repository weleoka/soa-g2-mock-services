const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const port = process.env.NODEMOCK_PORT || 8282;
const artificialDelay = 700; // miliseconds

const ladokFaker = require('./ladok/results');
const epokFaker = require('./epok/index');
const studentitsFaker = require('./studentits/students');
const canvasFaker = require('./canvas/assignments');

// Make the student data:
studentitsDb = studentitsFaker();
// Extract only valid ssn and student_id from StudentITSdb
const ssnArr = studentitsDb.students.map(student => student.ssn);
const studentIdArr = studentitsDb.students.map(student => student.student_id);
// Build other databases with relevant info
ladokDb = ladokFaker(ssnArr);
canvasDb = canvasFaker(studentIdArr);
// Courses, occasions and modules: see epok/index.js
epokDb = epokFaker();


// Shallow merge using the spread operator all into one happy fake db.
let db = {...ladokDb, ...epokDb.courses, ...epokDb.occasions, ...epokDb.modules, ...studentitsDb, ...canvasDb};
// debug the loaded data
//console.log(db);
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


server.listen(port, "0.0.0.0", () => { 
    console.log("Using artificial delay (ms): " + artificialDelay);
    console.log("JSON Server is running on port: " + port);
})

//console.log("ASDFASFA" + server.address());
