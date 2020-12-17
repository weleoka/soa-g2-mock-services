// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('courses', function(i) {
        const courseCodeArr = ["D0021E", "D0022E", "D0023E"];
        const courseAdminArr = ["course-admin1-here", "course-admin2-here", "course-admin3-here"]
        const nameSeArr = ["Design av IT", "Databaser 1", "Java 2"]; // name Swedish
        const nameEnArr = ["Design of IT", "Databases 1", "Java 2"]; // name Swedish
        const statusArr = ["aktiv", "aktiv", "historisk"];

        const courseCode = courseCodeArr[i];
        const courseAdmin = courseAdminArr[Math.floor(Math.random() * courseAdminArr.length)]
        const nameSe = nameSeArr[i];
        const nameEn = nameEnArr[i];
        const status = statusArr[Math.floor(Math.random() * statusArr.length)];

        return {
            course_code: courseCode,
            course_admin: courseAdmin,
            //module_code: String,  // legacy. Not needed here
            //module_id: String, // legacy. Also: module_id is legacy and is now called moduleCode.
            name_se: nameSe,
            name_en: nameEn,
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
