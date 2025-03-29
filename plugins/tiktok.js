let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://www.tiktok.com/xxxxx`
    if (!(args[0].includes('https://') || args[0].includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!args[0].includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
 //   if (!args[0]) throw `*• Example:* ${usedPrefix + command} https://youtu.be/xxxx`
    m.reply(wait)
let data = await(await fetch(`${api.xterm.url}/api/downloader/tiktok?url=${args[0]}&key=${api.xterm.key}`)).json()
let php = data.data
  let type = php.type
        if (type == 'image') {
            for (let image of php.media) {
                await conn.sendMessage(m.chat, { image: { url: image.url } }, { quoted: m })
            }
        } else if (type == 'video') {
            await conn.sendMessage(m.chat, { video: { url: php.media[0].url } }, { quoted: m })
        }
         await conn.sendMessage(m.chat, { audio: { url: php.audio.url }, mimetype: "audio/mpeg"}, { quoted: m })
}
//conn.sendFile(m.chat, hasil, '', wm, m)
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = 5
handler.command = /^(tt|tiktok)$/i


module.exports = handler