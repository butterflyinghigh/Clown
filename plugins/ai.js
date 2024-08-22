const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "gpt",
    alias: ["ai,chatgpt"],
    desc: "Chat with ai",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await m.react("🤖")
data = await fetchJson(`https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}`)
    return reply(`${data.data}\n\n\n` + botwatermark)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
