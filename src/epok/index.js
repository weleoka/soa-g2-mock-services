module.exports = () => {
    const coursesFaker = require('./courses');
    const occasionsFaker = require('./occasions');
    const modulesFaker = require('./modules');

    const coursesDb = coursesFaker();
    const occasionsDb = occasionsFaker();
    const modulesDb = modulesFaker();

    // Set course_code in occasions
    for (let i = 0; i < occasionsDb.occasions.length; i++) {
        let rInt = Math.floor(Math.random() * coursesDb.courses.length);
        occasionsDb.occasions[i].course_code = coursesDb.courses[rInt].course_code;
    }

    // Set occasion_code and course_code in modules
    for (let i = 0; i < modulesDb.modules.length; i++) {
        let rInt = Math.floor(Math.random() * occasionsDb.occasions.length);
        modulesDb.modules[i].occasion_code = occasionsDb.occasions[rInt].occasion_code;
        modulesDb.modules[i].course_code = occasionsDb.occasions[rInt].course_code;
    }

    const data = {
        ...coursesDb,
        ...occasionsDb,
        ...modulesDb
    }

    return data
}
