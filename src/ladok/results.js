// USe casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('results', function() {
        const ssnArr = [ "19890812-1234", "19900912-4321", "19911012-7890"];
        const courseCodeArr = [ "D0021E", "D0022E", "D0023E"];
        const moduleIdArr = [ "module01", "module02", "module03"];
        const gradeArr = [ "U", "G", "VG"];

        const ssn = ssnArr[Math.floor(Math.random() * ssnArr.length)];
        const courseCode = courseCodeArr[Math.floor(Math.random() * courseCodeArr.length)];
        const modul = moduleIdArr[Math.floor(Math.random() * moduleIdArr.length)];
        const grade = gradeArr[Math.floor(Math.random() * gradeArr.length)];

        return {
            ssn: ssn,
            course_code: courseCode,
            module: modul,
            date: casual.date(format = 'YYYY-MM-DD'),
            grade: grade
        }
    })

        
    const data = {
        results: [],
    }

    // Create 10 results
    for (let i = 0; i < 10; i++) {
        data.results.push(casual.results)
    }

    return data
}
