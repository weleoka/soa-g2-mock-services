// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = () => {
    casual.define('modules', function(i) {
        const code_arr = ["module01", "module02", "module03", "module04",  "module05", "module06", "module07", "module08", "module09", "module10"];
        const description_arr = ["Inlämningsuppgifter", "Tentamen", "Muntlig tentamen"];
        const status_arr = ["aktiv", "inaktiv_avslutad", "inaktiv_framtida"];

        const code = code_arr[i];
        const description = description_arr[Math.floor(Math.random() * description_arr.length)];
        const status = status_arr[Math.floor(Math.random() * status_arr.length)];

        return {
            code: code,
            description: description,
            status: status,
        }
    })

    const data = {
        modules: [],
    }

    // Create 10 results
    for (let i = 0; i < 10; i++) {
        data.modules.push(casual.modules(i))
    }

    return data
}
