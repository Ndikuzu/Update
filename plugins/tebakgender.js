var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!text) throw `Contoh: ${usedPrefix + command} NAMA BAPAK MU`
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
  let cap = `${htki}  *GENDER* ${htka}
  
▢ *💫 NAMA* : ${text}
▢ *💫 GENDER* : ${pickRandom(['Lanang','Cwek','Banci'])}
▢ *💫 KlAMIN* :${pickRandom(['Kontol','Memek','Kontol Sama Memek'])}
${dmenuf}
`
    
await m.reply(cap)
}

handler.help = ['tebakgender']
handler.tags = ['fun']

handler.command = /^(tebakgender|cekgender)$/i

module.exports = handler