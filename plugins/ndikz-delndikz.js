let fs = require('fs');

let handler = async (m, { conn, text }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
    else who = m.chat;
    if (!who || !text) throw `Tag orangnya!\nAtau: .delowner 6285xxxxx`;
    const prem = JSON.parse(fs.readFileSync("./database/ndikzowner.json"))
    try {
        let unp = prem.indexOf(who.split`@`[0] || text)
     prem.splice(unp, 1)
fs.writeFileSync("./database/ndikzowner.json", JSON.stringify(prem))
        const indexToRemove = global.owner.indexOf(who.split`@`[0] || text); // Menemukan indeks data yang ingin dihapus
if (indexToRemove !== -1) { // Memeriksa apakah data ditemukan
    global.owner.splice(indexToRemove, 1); // Menghapus data dengan indeks tersebut dari array
}
m.reply(`${who || text} Telah Tidak Menjadi Owner`)
    } catch (e) {
        console.error(e);
        m.reply('Terjadi kesalahan saat menghapus owner');
    }
};
handler.help = ['delmdikz [@user]']
handler.tags = ['owner']
handler.command = /^(del|hapus|\-)ndikz$/i

handler.owner = false
handler.nd = true

module.exports = handler