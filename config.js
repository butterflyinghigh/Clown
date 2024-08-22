const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "2Ms1zbaA#wP2T5Cxnu2lCuz65SQ5KFs8BK6C-JPWJkcbDDiMO5VI",
OWNER_NUMBER: process.env.OWNER_NUMBER || "94755845165",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/9e0a59ba5c8cd8c292741.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾\n*Hi 👋*\n╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾\n*I'm Clown-MD Whatsapp Bot 🤡*\n*I'm Alive Now! ✅*\n*How Can I Help You? 🤔*\n╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾\n\n\n",
ALIVE_AUDIO: process.env.ALIVE_AUDIO || "https://od.lk/d/NTdfOTMyMjU4NTBf/this%20is%20Clown%20md%20whatsapp%20user%20bot.%20created%20by%20mr%20unknown.%20send%20.menu%20to%20get%20bot%20command%20list..wav",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private", // public,private,inbox,groups
O_REACT: process.env.O_REACT || "false", // true,false
OWNER_REACT: process.env.OWNER_REACT || "✅",
};
