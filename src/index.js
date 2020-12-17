const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const port = process.env.NODEMOCK_PORT || 8282;
const artificialDelay = 700; // miliseconds

const ladokFaker = require('./ladok/results');
const epokFaker = require('./epok/index');
const timeeditFaker = require('./timeedit/index');
const studentitsFaker = require('./studentits/students');
const canvasFaker = require('./canvas/assignments');

// Make the student data
studentitsDb = studentitsFaker();
// Make the course, occasion and module data
epokDb = epokFaker();
// Extract the cc and mc tuples needed for other databases
const epokDataArr = epokDb.modules.map(mod => {return {cc: mod.course_code, mc: mod.module_code}})

// Use student and epok data to build Canvas results
const studentIdArr = studentitsDb.students.map(student => student.student_id);
canvasDb = canvasFaker(studentIdArr, epokDataArr);

// Use the student and epok data to build Ladok results
const ssnArr = studentitsDb.students.map(student => student.ssn);
ladokDb = ladokFaker(ssnArr, epokDataArr);

// Use epok occasion data to build schedules
const epokOccasionCodes = epokDb.occasions.map(occ => occ.occasion_code)
timeeditDb = timeeditFaker(epokOccasionCodes);

// Shallow merge using the spread operator all into one happy fake db
let db = {...ladokDb, ...epokDb, ...studentitsDb, ...canvasDb, ...timeeditDb};
//console.log(db);

// Auto-create the routes for json-server from the db
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

server.listen(port, "0.0.0.0", () => { 
    console.log("Using artificial delay (ms): " + artificialDelay);
    console.log("JSON Server is running on port: " + port);
})
//console.log("Server address: " + server.address());



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
