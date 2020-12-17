// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = (epokOccasionCodes) => {
    casual.define('schedules', function(i, epokOccasionCodes) {
        const scheduleCodeArr = [ "schedule-code1", "schedule-code2", "schedule-code3"];
        const scheduleCode = scheduleCodeArr[Math.floor(Math.random() * scheduleCodeArr.length)]
        const occasionCode = epokOccasionCodes[i];

        return {
           schedule_code: scheduleCode,
           occasion_code: occasionCode,
        }
    })

    const data = {
        schedules: [],
    }
    
    for (let i = 0; i < epokOccasionCodes.length; i++) {
        data.schedules.push(casual.schedules(i, epokOccasionCodes))
    }

    return data
}
