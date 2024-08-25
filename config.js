const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "2Ms1zbaA#wP2T5Cxnu2lCuz65SQ5KFs8BK6C-JPWJkcbDDiMO5VI",
MONGODB: process.env.MONGODB || "mongodb://mongo:RMYcniUHUPYteTeoeoOLJguaPmLniaOz@autorack.proxy.rlwy.net:27654",
};
