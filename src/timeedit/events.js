// Use casual with locale set to Swedish
const casual = require('casual').sv_SE
const uuidv4 = require('uuid').v4;

module.exports = () => {
    casual.define('events', function(i) {
        
        return {
           event_code: uuidv4(),
           title: "no title",
           schedule_code: "", // set externally 
           datetime: Date,
           timeslot: 2, // 1 to 5, and only one per event-uuid.
           rooms: ["room1"],
           equipment: ["equiment1"],
           teachers: ["teacher1"]
        }
    })

    const data = {
        events: [],
    }
    
    for (let i = 0; i < 2; i++) { // 85 lessons
        data.events.push(casual.events(i))
    }

    return data
}
