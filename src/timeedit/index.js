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
        15: {
          "course_id": 0,
          "course_occasion_id": 0,
          "time_edit_object_id": 0,
          "reservations": [
            {
              "location": "Zoom, A211",
              "user_id": 0,
              "contact_name": "Ingemar Andersson",
              "distance_url": "https://ltu-se.zoom.us/j/518490809",
              "event_url": "https://cloud.timeedit.net/ltu/web/schedule1/ri.json?h=t&sid=3&objects=659258.28&ox=0&types=0&fe=0",
              "title": "Lektion",
              "description": "D0031N. Enterprise Architecture och SOA, D0031N. Enterprise Architecture och SOA",
              "start_time": "2020-10-20T13:00:00",
              "end_time": "2020-10-20T14:30:00",
              "session": null
            },
            {
              "location": "Zoom, A211",
              "user_id": 0,
              "contact_name": "Svante Edzen",
              "distance_url": "https://ltu-se.zoom.us/j/983246455",
              "event_url": "https://cloud.timeedit.net/ltu/web/schedule1/ri.json?h=t&sid=3&objects=659256.28&ox=0&types=0&fe=0",
              "title": "Lektion",
              "description": "D0031N. Enterprise Architecture och SOA, D0031N. Enterprise Architecture och SOA",
              "start_time": "2020-10-13T13:00:00",
              "end_time": "2020-10-13T14:30:00",
              "session": null
            },
            {
              "location": "Zoom, A211",
              "user_id": 0,
              "contact_name": "Ingemar Andersson",
              "distance_url": "https://ltu-se.zoom.us/j/518490809",
              "event_url": "https://cloud.timeedit.net/ltu/web/schedule1/ri.json?h=t&sid=3&objects=659257.28&ox=0&types=0&fe=0",
              "title": "Lektion",
              "description": "D0031N. Enterprise Architecture och SOA, D0031N. Enterprise Architecture och SOA",
              "start_time": "2020-10-15T13:00:00",
              "end_time": "2020-10-15T14:30:00",
              "session": null
            }
          ],
          "course_code": "D0031"
        }

    }

    return data
}
