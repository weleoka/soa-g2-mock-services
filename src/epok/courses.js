// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('courses', function(i) {
        const courseCodeArr = [ "D0021E", "D0022E", "D0023E"];
        const descriptionArr = ["Inlämningsuppgifter", "Tentamen", "Muntlig tentamen"];
        const statusArr = ["aktiv", "inaktiv_avslutad", "inaktiv_framtida"];

        const courseCode = courseCodeArr[Math.floor(Math.random() * courseCodeArr.length)];
        const description = descriptionArr[Math.floor(Math.random() * descriptionArr.length)];
        const status = statusArr[Math.floor(Math.random() * statusArr.length)];

        return {
            course_code: courseCode,
            module_code: String,  // set externally.
            module_id: String, // set externally. Also: module_id is legacy and is now called moduleCode.
            description: description,
            status: status,
        }
    })

    const data = {
        courses: [],
    }

    // Create 6 results
    for (let i = 0; i < 3; i++) {
        data.courses.push(casual.courses(i))
    }

    return data
}
