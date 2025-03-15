let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, 'Ketik Namanya Tolol!', m)
	
  conn.reply(m.chat, `
*––––––『 CEK - KON 』––––––*
• Nama : ${text}
• Kontol : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
• Panjang : ${pickRandom(['7,6 cm','8,5 cm','9,1 cm','12,9 cm','26,3 cm','30 cm','48 cm😋'])}
• True : ${pickRandom(['perjaka','ga perjaka','udah pernah dimasukin','masih ori','jumbo'])}
• Jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
`.trim(), m)
}
handler.help = ['cekkontol <nama>']
handler.tags = ['fun']
handler.command = /^cekkontol/i
handler.premium = false
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}