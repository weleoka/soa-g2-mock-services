// USe casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('resultat', function() {
        const pnr_arr = [ "19890812-1234", "19900912-4321", "19911012-7890"];
        const kurskod_arr = [ "D0021E", "D0022E", "D0023E"];
        const modul_arr = [ "modul1", "modul2", "modul3"];
        const betyg_arr = [ "U", "G", "VG"];
        const pnr = pnr_arr[Math.floor(Math.random() * pnr_arr.length)];
        const kurskod = kurskod_arr[Math.floor(Math.random() * kurskod_arr.length)];
        const modul = modul_arr[Math.floor(Math.random() * modul_arr.length)];
        const betyg = betyg_arr[Math.floor(Math.random() * betyg_arr.length)];

        return {
            pnr: pnr,
            kurskod: kurskod,
            modul: modul,
            datum: casual.date(format = 'YYYY-MM-DD'),
            betyg: betyg
        }
    })

        
    const data = {
        resultat: [],
    }

    // Create 10 results
    for (let i = 0; i < 10; i++) {
        data.resultat.push(casual.resultat)
    }

    return data
}
