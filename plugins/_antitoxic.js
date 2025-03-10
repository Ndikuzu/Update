const isToxic = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i;


let handler = m => m

handler.before = function (m, { conn, args, text, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiToxic = isToxic.exec(m.text)

    if (chat.antiToxic && isAntiToxic) {
    user.warn += 1
    m.reply(`${user.warn >= 10 ? 'Warn Kamu Sudah 10, Kamu Akan Di Keluarkan Dari Group ><' : 'Kata Toxic Terdeteksi +1 Warn Jika Sudah Mencapai 10 warn akan di kick🗿😂'}`)
    if (user.warn >= 10) {
    user.warn = 0
    global.db.data.users[m.sender].banned = true
    conn.updateBlockStatus(m.sender, "block")
    conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }
    }
    return !0
}

module.exports = handler