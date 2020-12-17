// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('occasions', function(i) {
        const occasionCodeArr = ["tillfalle01", "tillfalle02", "tillfalle03", "tillfalle04", "tillfalle05", "tillfalle06"];
        const periodCodeArr = ["HT2020LP1", "HT2020LP2", "VT2021LP3", "VT2021LP4"];
        const locationCodeArr = ["distans", "campus-p", "campus-l"];

        const occasionCode = occasionCodeArr[i];
        const periodCode = periodCodeArr[Math.floor(Math.random() * periodCodeArr.length)];
        const locationCode = locationCodeArr[Math.floor(Math.random() * locationCodeArr.length)];

        return {
            occasion_code: occasionCode,
            course_code: String, // set externally
            course_admin: String, // set externally
            period_code: periodCode,
            location_code: locationCode,
            parallel_occasions: "none", // this would be specified during schedule creation.
            student_count: Math.floor(Math.random() * 42), // Probably handled by NyA as a service.
            study_rate: "100%" // studietakt 25%, 50%, 75% and 100%
        }
    })

    const data = {
        occasions: [],
    }

    for (let i = 0; i < 6; i++) {
        data.occasions.push(casual.occasions(i))
    }

    return data
}
