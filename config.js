const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "2Ms1zbaA#wP2T5Cxnu2lCuz65SQ5KFs8BK6C-JPWJkcbDDiMO5VI",
OWNER_NUMBER: process.env.OWNER_NUMBER || "94755845165",
CONNECT_MSG: process.env.CONNECT_MSG || "> *🤖 Clown-MD Whatsapp Bot Connected ✅*\n\n*PREFIX:* ${prefix}\n*OWNER NUMBER:* ${ownerNumber}\n*WORK TYPE:* config.MODE\n*ALIVE IMG:* ${ALIVE_IMG}\n*ALIVE AUDIO:* ${ALIVE_AUDIO}\n*AUTO READ STATUS:* ${AUTO_READ_STATUS}\n*WORK TYPE:* ${MODE}\n*O REACT:* ${O_REACT}\n*OWNER REACT:* ${OWNER_REACT}",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/9e0a59ba5c8cd8c292741.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾\n*Hi 👋*\n╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾\n*I'm Clown-MD Whatsapp Bot 🤡*\n*I'm Alive Now! ✅*\n*How Can I Help You? 🤔*\n╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾\n\n\n",
ALIVE_AUDIO: process.env.ALIVE_AUDIO || "https://od.lk/d/NTdfOTMxMzEyOTlf/Hi.%20i%20am%20clown%20md%20whatsapp%20user%20bot%20created%20by%20mr%20unknown.mp3",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private", // public,private,inbox,groups
O_REACT: process.env.O_REACT || "false", // true,false
OWNER_REACT: process.env.OWNER_REACT || "✅",
};
