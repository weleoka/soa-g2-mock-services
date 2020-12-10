// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('modules', function(i) {
        const moduleCodeArr = ["module01", "module02", "module03", "module04",  "module05", "module06"];
        const descriptionArr = ["Inlämningsuppgifter", "Tentamen", "Muntlig tentamen"];
        const statusArr = ["aktiv", "inaktiv_avslutad", "inaktiv_framtida"];

        const moduleCode = moduleCodeArr[i];
        const description = descriptionArr[Math.floor(Math.random() * descriptionArr.length)];
        const status = statusArr[Math.floor(Math.random() * statusArr.length)];

        return {
            module_code: moduleCode, 
            module_id: moduleCode, // Legacy: use module_code
            course_code: String, // set externally
            occasion_code: String, // set externally
            description: description,
            status: status,
        }
    })

    const data = {
        modules: [],
    }

    for (let i = 0; i < 6; i++) {
        data.modules.push(casual.modules(i))
    }

    return data
}
