// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('students', function(i) {
        const ssnArr = [ "19890812-1234", "19900912-4321", "19911012-7890"];
        const ssn = ssnArr[i];
        const firstName = casual.first_name;
        const lastName = casual.last_name
        const studentId = firstName.slice(0, 2).concat(
            lastName.slice(0, 2), "-", Math.floor(Math.random() * 10));

        return {
            ssn: ssn,
            username: studentId.toLowerCase(), // username is legacy: replaced by student_id
            student_id: studentId.toLowerCase(),
            first_name: firstName,
            last_name: lastName
        }
    })

    const data = {
        students: [],
    }
    
    for (let i = 0; i < 3; i++) { // there's only three students!!
        data.students.push(casual.students(i))
    }

    return data
}
