const fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Kirim/Reply Gambar dengan caption ${command}`
m.reply(`Proses`)
let media = await q.download()
let url = await uploadImage(media)
let hasil = `https://api.lolhuman.xyz/api/facedetect?apikey=82389ffbed5cd3ab5e3bdd81&img=${url}`
await conn.sendFile(m.chat, hasil, '', `${global.wm}`, m)
}

handler.help = ['facedetect']
handler.tags = ['fun']
handler.command = /^(facedetect)$/i
handler.premium = false
handler.limit = 5
module.exports = handler