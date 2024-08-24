const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "menu",
    desc: "Get bot command pannel.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
  let menu = {
    main: '',
    download: '',
    group: '',
    owner: '',
    convert: '',
    search: '',
    prank: '',
    ai: ''
  };

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += ` *● ${config.PREFIX}${commands[i].pattern}*\n*╎*`;
 }
}

let madeMenu = `*「 🤡 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 𝗠𝗘𝗡𝗨 🤡 」*

*╭─📥 Dᴏᴡɴʟᴏᴀᴅ Cᴏᴍᴍᴀɴᴅꜱ──◦•◦❥•*
*╎*${menu.download}
*╰────────────────────◦•◦❥•*

*╭─👤 Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅꜱ──◦•◦❥•*
*╎*${menu.owner}
*╎*
*╰────────────────────◦•◦❥•*

*╭─🎯 Mᴀɪɴ Cᴏᴍᴍᴀɴᴅꜱ──◦•◦❥•*
*╎*${menu.main}
*╎*
*╰────────────────────◦•◦❥•*

*╭─🤖 Aɪ Cᴏᴍᴍᴀɴᴅꜱ──◦•◦❥•*
*╎*${menu.ai}
*╎*
*╰────────────────────◦•◦❥•*

*╭─🪀 Gʀᴏᴜᴘ Cᴏᴍᴍᴀɴᴅꜱ──◦•◦❥•*
*╎*${menu.group}
*╎*
*╰────────────────────◦•◦❥•*

*╭─🔎 Sᴇᴀʀᴄʜ Cᴏᴍᴍᴀɴᴅꜱ──◦•◦❥•*
*╎*${menu.search}
*╎*
*╰────────────────────◦•◦❥•*

*╭─💫 Cᴏɴᴠᴇʀᴛ Cᴏᴍᴍᴀɴᴅꜱ──◦•◦❥•*
*╎*${menu.convert}
*╎*
*╰────────────────────◦•◦❥•*

*╭─👻 Pʀᴀɴᴋ Cᴏᴍᴍᴀɴᴅꜱ──◦•◦❥•*
*╎*${menu.prank}
*╎*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await m.react("📋")
await conn.sendMessage(from,{audio: {url: `https://od.lk/d/NTdfOTMyMjg0OTVf/1724426628423rgwzdzcho-voicemaker.in-speech.mp3`},mimetype:"audio/mpeg",ptt:true},{quoted:mek})
await conn.sendMessage(from,{image: {url: `https://od.lk/d/NTdfOTMyMjc0ODhf/20240823_101032.jpg`},caption: madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
