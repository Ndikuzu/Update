var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`${neNdikz}api/quotesnime?apikey=${neoapi}`)
  let vas = await res.json()
  let v = vas.data
  
  let cap = `${htki}  *QUOTES ANIME* ${htka}
  
▢ *QUOTES* : ${v.quotes}
▢ *CHARACTER* : ${v.character}
▢ *ANIME* : ${v.anime}
${dmenuf}
`
    
conn.sendFile(m.chat, v.image, null, cap, m)
    }

handler.help = ['quotesanime']
handler.tags = ['quotes']
handler.command = /^(quotesanime|animequotes|kataanime)$/i
handler.limit = 5

module.exports = handler