// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('modules', function(i) {
        const moduleIdArr = ["module01", "module02", "module03", "module04",  "module05", "module06"];
        const courseCodeArr = [ "D0021E", "D0022E", "D0023E"];
        const descriptionArr = ["Inlämningsuppgifter", "Tentamen", "Muntlig tentamen"];
        const statusArr = ["aktiv", "inaktiv_avslutad", "inaktiv_framtida"];

        const moduleId = moduleIdArr[i];
        const courseCode = courseCodeArr[Math.floor(Math.random() * courseCodeArr.length)];
        const description = descriptionArr[Math.floor(Math.random() * descriptionArr.length)];
        const status = statusArr[Math.floor(Math.random() * statusArr.length)];

        return {
            code: moduleId, // Legacy: use module_id
            module_id: moduleId,
            course_code: courseCode, 
            description: description,
            status: status,
        }
    })

    const data = {
        modules: [],
    }

    // Create 6 results
    for (let i = 0; i < 6; i++) {
        data.modules.push(casual.modules(i))
    }

    return data
}
