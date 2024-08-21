const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "2Ms1zbaA#wP2T5Cxnu2lCuz65SQ5KFs8BK6C-JPWJkcbDDiMO5VI",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/9e0a59ba5c8cd8c292741.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾\n*Hi 👋*\n╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾\n*I'm Clown-MD Whatsapp Bot 🤡*\n*I'm Alive Now! ✅*\n*How Can I Help You? 🤔*\n╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾\n\n\n",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true"
};
