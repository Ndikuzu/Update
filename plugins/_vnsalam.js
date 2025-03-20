let handler = async (m, { conn }) => {
let thumb = 'https://telegra.ph/file/d59776ea4b0efb0879167.jpg'
let caption = `*Waalaikummussalam warahmatullahi wabarokatuh*`
// FAKE KONTAK
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${global.namaowner}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Zenss,;;;\nFN:ZenssCuyy\nitem1.TEL;waid=${global.nomorowner}:62895604670507\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}

await conn.reply(m.chat, `${caption}`, fkontak)
await conn.sendFile(m.chat, './mp3/salam.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 8873})
       }
       
handler.customPrefix = /^(assalamualaikum|Assalamu'alaikum)/i
handler.limit = false
handler.command = new RegExp
module.exports = handler