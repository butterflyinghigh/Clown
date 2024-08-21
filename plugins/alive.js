const config = require('../config')
const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "alive",
    desc: "Check bot online or offline",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
       await conn.sendMessage(from,{audio:{url: `https://od.lk/d/NTdfOTMxMzEyOTlf/Hi.%20i%20am%20clown%20md%20whatsapp%20user%20bot%20created%20by%20mr%20unknown.mp3`},mimetype:"audio/mpeg"},{quoted: mek})
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG + botwatermark})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
