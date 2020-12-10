// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('occasions', function(i) {
        const occasionCodeArr = ["tillfälle01", "tillfälle02", "tillfälle03", "tillfälle04", "tillfälle05", "tillfälle06"];
        const periodCodeArr = ["HT2020LP1", "HT2020LP2", "VT2021LP3", "VT2021LP4"];
        const locationCodeArr = ["distans", "campus", "campus"];

        const occasionCode = occasionCodeArr[i];
        const periodCode = periodCodeArr[Math.floor(Math.random() * periodCodeArr.length)];
        const location = locationCodeArr[Math.floor(Math.random() * locationCodeArr.length)];

        return {
            occasion_code: occasionCode,
            course_code: String, // set externally
            period_code: periodCode,
            location_code: locationCode,
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
