// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('occasions', function(i) {
        const occasionCodeArr = [ "tillfälle01", "tillfälle02", "tillfälle03"];
        const periodCodeArr = ["HT2020LP1", "HT2020LP2", "VT2021LP4"];
        const locationArr = ["distans", "campus", "campus"];

        const occasionCode = occasionCodeArr[i];
        const periodCode = periodCodeArr[Math.floor(Math.random() * periodCodeArr.length)];
        const location = locationArr[Math.floor(Math.random() * locationArr.length)];

        return {
            occasion_code: occasionCode,
            course_code: String, // set externally
            period_code: periodCode,
            location: location,
            
        }
    })

    const data = {
        occasions: [],
    }

    // Create 6 results
    for (let i = 0; i < 6; i++) {
        data.occasions.push(casual.occasions(i))
    }

    return data
}
