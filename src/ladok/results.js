// USe casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = (ssnArr, epokDataArr) => {
    casual.define('results', function(ssnArr, epokDataArr) {
        const gradeArr = [ "U", "G", "VG"];
        const id = Math.floor(Math.random() * 1000);
        const ssn = ssnArr[Math.floor(Math.random() * ssnArr.length)];
        const grade = gradeArr[Math.floor(Math.random() * gradeArr.length)];
        const epokData = epokDataArr[Math.floor(Math.random() * epokDataArr.length)];

        return {
            id: id,
            ssn: ssn,
            course_code: epokData.cc,
            module: epokData.mc, // module is legacy, use module_code
            module_code: epokData.mc,
            date: casual.date(format = 'YYYY-MM-DD'),
            grade: grade
        }
    })

    const data = {
        results: [],
    }

    // Create 10 results
    for (let i = 0; i < 10; i++) {
        data.results.push(casual.results(ssnArr, epokDataArr))
    }

    return data
}
