var { fg } = require('api-dylux')
let fetch = require('node-fetch')
let handler = async (m, { conn, args, code, text, isPrems, isOwner, usedPrefix, command }) => {
if (!m.quoted) throw `Reply Code Js!`
			let rasat = await(await fetch(`${api.xterm.url}/api/tools/js-protector?code=${encodeURIComponent(code)}&key=${api.xterm.key}`)).json()
    
conn.sendMessage(m.chat, { document: Buffer.from(rasat.data), mimetype:"application/javascript", fileName:"encrypt.js" }, { quoted:m })
    }
handler.command = handler.help = ['enc','encjs'];
handler.tags = ['tools'];
handler.limit = 5
handler.premium = false
module.exports = handler;