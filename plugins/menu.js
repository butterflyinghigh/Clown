const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "menu",
    desc: "Get main menu.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
  let menu = {
    mainmenu: ''
  };

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += ` *● ${config.PREFIX}${commands[i].pattern}*\n*╎*`;
 }
}

let madeMenu = `*「 🤡 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 🤡 」*

*╭─📋 Mᴀɪɴ Mᴇɴᴜ◦•◦❥•*
*╎*${menu.mainmenu}
*╰────────────────────◦•◦❥•*

*😘 Sᴇɴᴅ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʀᴇʟᴀᴛᴇᴅ ᴛᴏ ᴛʜᴀᴛ ᴍᴇɴᴜ ᴛᴏ ɢᴇᴛ ᴛʜᴇ ᴍᴇɴᴜ ʏᴏᴜ ᴡᴀɴᴛ. 👇*\n\n\n${botwatermark}`

await m.react("📋")
await conn.sendMessage(from,{audio: {url: `https://od.lk/d/NTdfOTMyMjg0OTVf/1724426628423rgwzdzcho-voicemaker.in-speech.mp3`},mimetype:"audio/mpeg",ptt:true},{quoted:mek})
await conn.sendMessage(from,{image: {url: `https://od.lk/d/NTdfOTMyMjc0ODhf/20240823_101032.jpg`},caption: madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//===================================================

cmd({
    pattern: "downmenu",
    desc: "Get bot command pannel.",
    category: "mainmenu",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
  let menu = {
    download: ''
  };

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += ` *● ${config.PREFIX}${commands[i].pattern}*\n*╎*`;
 }
}

let madeMenu = `*「 🤡 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 🤡 」*

*╭─📥 Dᴏᴡɴʟᴏᴀᴅ Cᴏᴍᴍᴀɴᴅꜱ──◦•◦❥•*
*╎*${menu.download}
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await m.react("📋")
await conn.sendMessage(from,{image: {url: `https://od.lk/d/NTdfOTMyMjc0ODhf/20240823_101032.jpg`},caption: madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//===================================================

cmd({
    pattern: "ownermenu",
    desc: "Get bot command pannel.",
    category: "mainmenu",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
  let menu = {
    owner: ''
  };

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += ` *● ${config.PREFIX}${commands[i].pattern}*\n*╎*`;
 }
}

let madeMenu = `*「 🤡 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 🤡 」*

*╭─👤 Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅꜱ──◦•◦❥•*
*╎*${menu.owner}
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await m.react("📋")
await conn.sendMessage(from,{image: {url: `https://od.lk/d/NTdfOTMyMjc0ODhf/20240823_101032.jpg`},caption: madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//===================================================

cmd({
    pattern: "mainmenu",
    desc: "Get bot command pannel.",
    category: "mainmenu",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
  let menu = {
    main: ''
  };

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += ` *● ${config.PREFIX}${commands[i].pattern}*\n*╎*`;
 }
}

let madeMenu = `*「 🤡 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 🤡 」*

*╭─🎯 Mᴀɪɴ Cᴏᴍᴍᴀɴᴅꜱ──◦•◦❥•*
*╎*${menu.main}
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await m.react("📋")
await conn.sendMessage(from,{image: {url: `https://od.lk/d/NTdfOTMyMjc0ODhf/20240823_101032.jpg`},caption: madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//===================================================

cmd({
    pattern: "aimenu",
    desc: "Get bot command pannel.",
    category: "mainmenu",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
  let menu = {
    ai: ''
  };

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += ` *● ${config.PREFIX}${commands[i].pattern}*\n*╎*`;
 }
}

let madeMenu = `*「 🤡 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 𝗔𝗜 𝗠𝗘𝗡𝗨 🤡 」*

*╭─🤖 Aɪ Cᴏᴍᴍᴀɴᴅꜱ──◦•◦❥•*
*╎*${menu.ai}
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await m.react("📋")
await conn.sendMessage(from,{image: {url: `https://od.lk/d/NTdfOTMyMjc0ODhf/20240823_101032.jpg`},caption: madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//===================================================

cmd({
    pattern: "groupmenu",
    desc: "Get bot command pannel.",
    category: "mainmenu",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
  let menu = {
    group: ''
  };

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += ` *● ${config.PREFIX}${commands[i].pattern}*\n*╎*`;
 }
}

let madeMenu = `*「 🤡 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 𝗔𝗜 𝗠𝗘𝗡𝗨 🤡 」*

*╭─🪀 Gʀᴏᴜᴘ Cᴏᴍᴍᴀɴᴅꜱ──◦•◦❥•*
*╎*${menu.group}
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await m.react("📋")
await conn.sendMessage(from,{image: {url: `https://od.lk/d/NTdfOTMyMjc0ODhf/20240823_101032.jpg`},caption: madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//===================================================

cmd({
    pattern: "searchmenu",
    desc: "Get bot command pannel.",
    category: "mainmenu",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
  let menu = {
    search: ''
  };

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += ` *● ${config.PREFIX}${commands[i].pattern}*\n*╎*`;
 }
}

let madeMenu = `*「 🤡 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 🤡 」*

*╭─🔎 Sᴇᴀʀᴄʜ Cᴏᴍᴍᴀɴᴅꜱ──◦•◦❥•*
*╎*${menu.search}
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await m.react("📋")
await conn.sendMessage(from,{image: {url: `https://od.lk/d/NTdfOTMyMjc0ODhf/20240823_101032.jpg`},caption: madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//===================================================

cmd({
    pattern: "convertmenu",
    desc: "Get bot command pannel.",
    category: "mainmenu",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
  let menu = {
    convert: ''
  };

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += ` *● ${config.PREFIX}${commands[i].pattern}*\n*╎*`;
 }
}

let madeMenu = `*「 🤡 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 🤡 」*

*╭─💫 Cᴏɴᴠᴇʀᴛ Cᴏᴍᴍᴀɴᴅꜱ──◦•◦❥•*
*╎*${menu.convert}
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await m.react("📋")
await conn.sendMessage(from,{image: {url: `https://od.lk/d/NTdfOTMyMjc0ODhf/20240823_101032.jpg`},caption: madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//===================================================

cmd({
    pattern: "prankmenu",
    desc: "Get bot command pannel.",
    category: "mainmenu",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
  let menu = {
    prank: ''
  };

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += ` *● ${config.PREFIX}${commands[i].pattern}*\n*╎*`;
 }
}

let madeMenu = `*「 🤡 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 𝗣𝗥𝗔𝗡𝗞 𝗠𝗘𝗡𝗨 🤡 」*

*╭─👻 Pʀᴀɴᴋ Cᴏᴍᴍᴀɴᴅꜱ──◦•◦❥•*
*╎*${menu.prank}
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await m.react("📋")
await conn.sendMessage(from,{image: {url: `https://od.lk/d/NTdfOTMyMjc0ODhf/20240823_101032.jpg`},caption: madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//===================================================
