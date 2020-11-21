// USe casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('results', function() {
        const ssn_arr = [ "19890812-1234", "19900912-4321", "19911012-7890"];
        const course_code_arr = [ "D0021E", "D0022E", "D0023E"];
        const module_arr = [ "module01", "module02", "module03"];
        const grade_arr = [ "U", "G", "VG"];
        const ssn = ssn_arr[Math.floor(Math.random() * ssn_arr.length)];
        const course_code = course_code_arr[Math.floor(Math.random() * course_code_arr.length)];
        const modul = module_arr[Math.floor(Math.random() * module_arr.length)];
        const grade = grade_arr[Math.floor(Math.random() * grade_arr.length)];

        return {
            ssn: ssn,
            course_code: course_code,
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
