const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "song",
    desc: "Download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await m.react("🎶")

if(!q) return reply("Please give me a song name or url")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*「 🤡 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 𝗦𝗢𝗡𝗚 𝗗𝗟 🤡 」*

*╭──🎶 Song Details 🎶──◦•◦❥•*
*╎*
*╎* *📝 Tɪᴛʟᴇ :* ${data.title}
*╎* *⏰ Dᴜʀᴀᴛɪᴏɴ :* ${data.timestamp}
*╎* *📆 Aɢᴏ :* ${data.ago}
*╎* *📊 Vɪᴇᴡꜱ :* ${data.views}
*╎* *🗓️ Dᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${data.description}
*╎*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await conn.sendMessage(from,{image:{url:data.thumbnail},caption:desc},{quoted:mek});

//===Download Audio===

await m.react("📥")
let down = await fg.yta(url)
let downloadUrl = down.dl_url

//===Send Audio===

await m.react("📤")
await conn.sendMessage(from,{audio:{url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:botwatermark},{quoted:mek})
await m.react("✅")
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "video",
    desc: "Download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await m.react("🎬")

if(!q) return reply("Please give me a video name or url")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*「 🤡 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 𝗩𝗜𝗗𝗘𝗢 𝗗𝗟 🤡 」*

*╭──🎶 Song Details 🎶──◦•◦❥•*
*╎*
*╎* *📝 Tɪᴛʟᴇ :* ${data.title}
*╎* *⏰ Dᴜʀᴀᴛɪᴏɴ :* ${data.timestamp}
*╎* *📆 Aɢᴏ :* ${data.ago}
*╎* *📊 Vɪᴇᴡꜱ :* ${data.views}
*╎* *🗓️ Dᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${data.description}
*╎*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await conn.sendMessage(from,{image:{url:data.thumbnail},caption:desc},{quoted:mek});

//===Download Video===

await m.react("📥")
let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//===Send Video===

await m.react("📤")
await conn.sendMessage(from,{video:{url:downloadUrl},mimetype:"video/mp4",caption:botwatermark},{quoted:mek})
await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:botwatermark},{quoted:mek})
await m.react("✅")
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
