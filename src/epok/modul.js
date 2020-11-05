// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('modul', function() {
        const kod_arr = ["modul1", "modul2", "modul3"];
        const description_arr = ["Inlämningsuppgifter", "Tentamen", "Muntlig tentamen"];
        const status_arr = ["aktiv", "inaktiv_avslutad", "inaktiv_framtida"];

        const kod = kod_arr[Math.floor(Math.random() * kod_arr.length)];
        const description = description_arr[Math.floor(Math.random() * description_arr.length)];
        const status = status_arr[Math.floor(Math.random() * status_arr.length)];

        return {
            kod: kod,
            description: description,
            status: status,
        }
    })

    const data = {
        modul: [],
    }

    // Create 10 results
    for (let i = 0; i < 10; i++) {
        data.modul.push(casual.modul)
    }

    return data
}
