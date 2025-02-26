const {readEnv} = require('../lib/database')
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
const config = await readEnv();
    
await m.react("👋")
       await conn.sendMessage(from,{audio:{url: config.ALIVE_AUDIO},mimetype:"audio/mpeg",ptt:true},{quoted: mek})
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG + "\n\n\n" + botwatermark})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
