const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "2Ms1zbaA#wP2T5Cxnu2lCuz65SQ5KFs8BK6C-JPWJkcbDDiMO5VI",
OWNER_NUMBER: process.env.OWNER_NUMBER || "94755845165",
ALIVE_IMG: process.env.ALIVE_IMG || "https://od.lk/d/NTdfOTMyMjc0ODZf/20240823_100838.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "ﾠﾠ *⟡━⟪ 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 ⟫━⟡*\n\n*╭─「  Hᴇʟʟᴏ ${pushname} 👋 」*\n*╎ﾠI ᴀᴍ Cʟᴏᴡɴ-MD Wʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ. 🤡*\n*╎ﾠI ᴀᴍ Aʟɪᴠᴇ Nᴏᴡ. ✅*\n*╎ﾠCʀᴇᴀᴛᴇᴅ Bʏ Mʀ.Uɴᴋɴᴏᴡɴ. 👤*\n*╎ﾠSᴇɴᴅ .menu Tᴏ Gᴇᴛ Cᴏᴍᴍᴀɴᴅ Lɪꜱᴛ. 📋*\n*╰───────────────┈*",
ALIVE_AUDIO: process.env.ALIVE_AUDIO || "https://od.lk/d/NTdfOTMyMjc0Nzlf/1724385453784cr6l5t5-voicemaker.in-speech.mp3",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private", // public,private,inbox,groups
O_REACT: process.env.O_REACT || "false", // true,false
OWNER_REACT: process.env.OWNER_REACT || "✅",
};
