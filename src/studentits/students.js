// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('students', function(i) {
        const ssn_arr = [ "19890812-1234", "19900912-4321", "19911012-7890"];
        const username_arr = ["ingand-4", "tompet-8", "amwi-7"];

        const ssn = ssn_arr[i];
        const username = username_arr[i];

        return {
            ssn: ssn,
            username: username,
        }
    })

    const data = {
        students: [],
    }
    
    for (let i = 0; i < 3; i++) {
        data.students.push(casual.students(i))
    }

    return data
}
