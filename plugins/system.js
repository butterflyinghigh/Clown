const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "system",
    alias: ["status"],
    desc: "Check system informations",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await m.react("🔁")
let status = `
*「 🤡 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 𝗦𝗬𝗦𝗧𝗘𝗠 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡𝗦 🤡 」*

*╭─💻 System Informations 💻─◦•◦❥•*
*╎*
*╎* *⏰ Uᴘᴛɪᴍᴇ :* ${runtime(process.uptime())}
*╎* *💳 Rᴀᴍ :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╎* *💻 Pʟᴀᴛꜰᴏʀᴍ :* ${os.hostname()}
*╎* *👑 Oᴡɴᴇʀ :* Mʀ.Uɴᴋɴᴏᴡɴ ♡
*╎* *🤖 Bᴏᴛ Nᴀᴍᴇ :* Clown-MD
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await conn.sendMessage(from,{image:{url:`https://od.lk/d/NTdfOTMyMjc0ODlf/20240823_101729.jpg`},caption:status},{quoted:mek});
await m.react("✅")
}catch(e){
console.log(e)
reply(`${e}`)
}
})
