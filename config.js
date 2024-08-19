const fs = require('fs');
const {botwatermark} = "_ᴄʟᴏᴡɴ-ᴍᴅ ʙᴏᴛ_"
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
const botwatermark = "_ᴄʟᴏᴡɴ-ᴍᴅ ʙᴏᴛ_"
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "2Ms1zbaA#wP2T5Cxnu2lCuz65SQ5KFs8BK6C-JPWJkcbDDiMO5VI",
ALIVE_IMG: process.env.ALIVE_IMG || "https://drive.google.com/file/d/1a316EIunEEAOkvvd3_bkZQIfxqg2fs6U/view?usp=sharing",
ALIVE_MSG: process.env.ALIVE_MSG || "> *👋 Hi*\n\n> *✅ I am Alive Now!*\n\n\n" + botwatermark,
};
