let isJoin = /chat.whatsapp.com/i
let fs = require('fs')

let handler = m => m
handler.before = async function (m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin, isOwner }) {

    if (m.isBaileys && m.fromMe)
        return !0
    let namabot = 'NdikzOne'
    let chat = global.db.data.chats[m.chat]
    let dann = `Terdeteksi ${namabot} telah bergabung sendiri menggunakan tautan!`
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAutoJoin = isJoin.exec(m.text)

    if (chat.autoJoin && isAutoJoin) {
        await m.reply(dann)
            }
    return !0
}

module.exports = handler