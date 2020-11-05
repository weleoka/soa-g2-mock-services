// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('student', function(i) {
        const pnr_arr = [ "19890812-1234", "19900912-4321", "19911012-7890"];
        const username_arr = ["ingand-4", "tompet-8", "amwi-7"];

        const pnr = pnr_arr[i];
        const username = username_arr[i];

        return {
            pnr: pnr,
            username: username,
        }
    })

    const data = {
        student: [],
    }
    
    for (let i = 0; i < 3; i++) {
        data.student.push(casual.student(i))
    }

    return data
}
