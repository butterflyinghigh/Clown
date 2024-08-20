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

if(!q) return reply("Please give me a song name or url")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
> *🤡 CLOWN-MD SONG DOWNLOADER 🤡*

> *TITLE:* ${data.title}
> *DURATION :* ${data.timestamp}
> *AGO:* ${data.ago}
> *VIEWS:* ${data.views}
> *DESCRIPTION:* ${data.description}


${botwatermark}
`

await conn.sendMessage(from,{image:{url:data.thumbnail},caption:desc},{quoted:mek});

//===Download Audio===

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//===Send Audio===

await conn.sendMessage(from,{audio:{url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
