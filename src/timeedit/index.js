module.exports = (epokOccasionCodes) => {
    const schedulesFaker = require('./schedules');
    const eventsFaker = require('./events');

    const schedulesDb = schedulesFaker(epokOccasionCodes);
    const eventsDb = eventsFaker(); // just using the first code for now.
    

    // Set schedule_code in events
    for (let i = 0; i < eventsDb.events.length; i++) {
        let rInt = Math.floor(Math.random() * schedulesDb.schedules.length);
        eventsDb.events[i].schedule_code = schedulesDb.schedules[rInt].schedule_code;
    }

    const data = {
        ...schedulesDb,
        ...eventsDb,
    }

    return data
}
