const fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Kirim/Reply Gambar dengan caption ${command}`
m.reply(`💀`)
let media = await q.download()
let url = await uploadImage(media)
let hasil = `https://api.lolhuman.xyz/api/creator1/wanted?apikey=${apichan}&img=${url}`
await conn.sendFile(m.chat, hasil, '', `${global.wm}`, m)
}

handler.help = ['wanted']
handler.tags = ['fun']
handler.command = /^(wanted)$/i
handler.limit = 15
handler.premium = false
module.exports = handler