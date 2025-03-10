const fetch = require('node-fetch');
const axios = require('axios');


let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .aibocchi Siapa presiden Indonesia?`, m)
  
  let name = m.sender
  await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

  let res = await fetch(`${alyaNdikz}api/cai?msg=${text}&chara_id=UiEImbXX0oE5j_zIFvHMq-Od60TMInhTzgWg3OEnRkI&single_reply=false&apikey=${alyaapi}`)
  let vas = await res.json()
  let v = vas.data
  
  await conn.sendMessage(m.chat, { react: { text: `🌸`, key: m.key }});
  
  let hasil = `${v.content}`;
  await m.reply(hasil)
  
};

handler.help = ['yamada (text)']
handler.command = /^(yamada)$/i
handler.tags = ['Cai'];
handler.limit = 4
handler.premium = false
module.exports = handler;