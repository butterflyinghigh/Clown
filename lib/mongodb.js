const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'OWNER_NUMBER', value: '94755845165' },
    { key: 'ALIVE_IMG', value: 'https://od.lk/d/NTdfOTMyMjc0ODZf/20240823_100838.jpg' },
    { key: 'ALIVE_MSG', value: 'ﾠﾠ *⟡━⟪ 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 ⟫━⟡*\n\n*╭─「  Hᴇʟʟᴏ 👋 」*\n*╎ﾠI ᴀᴍ Cʟᴏᴡɴ-MD Wʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ. 🤡*\n*╎ﾠI ᴀᴍ Aʟɪᴠᴇ Nᴏᴡ. ✅*\n*╎ﾠCʀᴇᴀᴛᴇᴅ Bʏ Mʀ.Uɴᴋɴᴏᴡɴ. 👤*\n*╎ﾠSᴇɴᴅ .menu Tᴏ Gᴇᴛ Cᴏᴍᴍᴀɴᴅ Lɪꜱᴛ. 📋*\n*╰───────────────┈*' },
    { key: 'ALIVE_AUDIO', value: 'https://od.lk/d/NTdfOTMyMjc0Nzlf/1724385453784cr6l5t5-voicemaker.in-speech.mp3' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'MODE', value: 'private' }, // public,private,inbox,groups
    { key: 'O_REACT', value: 'false' }, // true,false
    { key: 'OWNER_REACT', value: '✅' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
