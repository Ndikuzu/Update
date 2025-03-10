let fs = require('fs');

let handler = async (m, { conn, text }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
    else who = m.chat;
    if (!who || !text) throw `Tag orangnya!\nAtau: .addowner 6285xxxxx`;
    const prem = JSON.parse(fs.readFileSync("./database/ndikzowner.json"))
    try {
        global.owner.push(who.split`@`[0] || text)
        prem.push(who.split`@`[0] || text)
  fs.writeFileSync("./database/ndikzowner.json", JSON.stringify(prem))
m.reply(`${who || text} Telah Menjadi Bagian Ndikz`)
    } catch (e) {
        console.error(e);
        m.reply('Terjadi kesalahan saat menambah bagian Ndikz');
    }
};

handler.help = ['addndikz [@user]'];
handler.tags = ['owner'];
handler.command = /^addndikz$/i;
handler.nd = true;
handler.owner = false;

module.exports = handler;