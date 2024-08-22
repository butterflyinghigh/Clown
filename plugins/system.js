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

let status = `
*Uptime:*  ${runtime(process.uptime())}
*Ram:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*Platform:* ${os.hostname()}
*Owner:* Mr.Unknown
*Bot Name:* Clown-MD\n\n\n${botwatermark}`

await conn.sendMessage(from,{image:{url:`https://telegra.ph/file/70222cf39588987d83f51.png`},caption:status},{quoted:mek});
m.react("✅")
}catch(e){
console.log(e)
reply(`${e}`)
}
})
