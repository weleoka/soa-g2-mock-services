module.exports = () => {

    const coursesFaker = require('./courses');
    const occasionsFaker = require('./occasions');
    const modulesFaker = require('./modules');

//    for (let i = 0; i < 3; i++) {
    const coursesDb = coursesFaker();
    const occasionsDb = occasionsFaker();
    const modulesDb = modulesFaker();


    // Set course_code in occasions
    for (let i = 0; i < occasionsDb.length; i++) {
        occasionsDb[i].course_code = coursesDb[Math.floor(Math.random() * coursesDb.length)].course_code;
    }

    // Set occasion_code in modules
    for (let i = 0; i < occasionsDb.length; i++) {
        modulesDb[i].occasions_code = oasionsDb[Math.floor(Math.random() * oasionsDb.length)].occasions_code;
    }

    console.log(coursesDb);

    const data = {
        ...coursesDb,
        ...occasionsDb,
        ...modulesDb
    }

    console.log(data);

    return data
}
