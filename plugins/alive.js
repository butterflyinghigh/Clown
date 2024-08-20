const config = require('../config')
const {cmd , commands} = require('../command')
const { botwatermark } = require('./botwatermark')

cmd({
    pattern: "alive",
    desc: "Check bot online or offline",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG + botwatermark},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
