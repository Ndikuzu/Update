let fetch = require('node-fetch')
let { fileIO, api} = require('../lib/uploadFile.js')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .toreal'
m.reply(wait)
let media = await q.download()
let url = await fileIO(media)
let res = await fetch(`${alyaNdikz}api/ai-anime-toreal?image=${url}&apikey=${alyaapi}`)
  let vas = await res.json()
  let v = vas.data
  let Ndikz = await fetch(`${alyaNdikz}api/webp-convert?url=${v.url}&action=webp-to-png&apikey=${alyaapi}`)
  let One = await Ndikz.json()
  let Owh = One.data
    
conn.sendFile(m.chat, Owh.url, null, wm, m)
//conn.sendFile(m.chat, hasil, '', wm, m)
	
}
handler.help = ['toreal']
handler.tags = ['maker']
handler.command = /^(toreal)$/i
handler.limit = 10


module.exports = handler