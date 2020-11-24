// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('students', function(i) {
        const ssnArr = [ "19890812-1234", "19900912-4321", "19911012-7890"];
        //const studentIdArr = ["ingand-4", "tompet-8", "amwi-7"];
        //const firstNameArr = ["Ingvar", "Tom", "Amy"];
        //const lastNameArr = ["Andromeda", "Petty", "Winner"];

        const ssn = ssnArr[i];
        //const studentId = studentIdArr[i];
        const firstName = casual.first_name;
        const lastName = casual.last_name
        const studentId = firstName.slice(0, 2).concat(
            lastName.slice(0, 2), "-", Math.floor(Math.random() * 10));

        return {
            ssn: ssn,
            // username is legacy: replaced by student_id
            username: studentId.toLowerCase(),
            student_id: studentId.toLowerCase(),
            first_name: firstName,
            last_name: lastName
        }
    })

    const data = {
        students: [],
    }
    
    for (let i = 0; i < 9; i++) {
        data.students.push(casual.students(i))
    }

    return data
}
