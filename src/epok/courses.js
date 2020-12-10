// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('courses', function(i) {
        const courseCodeArr = [ "D0021E", "D0022E", "D0023E"];
        const descriptionArr = ["Design av IT", "Databaser 1", "Java 2"];
        const statusArr = ["na1", "na2", "na3"];

        const courseCode = courseCodeArr[i];
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

    for (let i = 0; i < 3; i++) {
        data.courses.push(casual.courses(i))
    }

    return data
}
