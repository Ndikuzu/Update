let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
m.reply('Akan Di Kirim Di Priv Chat') 
  let res = await fetch('https://api.waifu.pics/nsfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.sender, json.url, '', 'Istri kartun', m)
}
handler.help = ['nwaifu']
handler.tags = ['internet']
handler.command = /^(nwaifu)$/i
handler.limit = 50
handler.limit = true

//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler