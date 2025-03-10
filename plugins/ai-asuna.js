const fetch = require('node-fetch');
const axios = require('axios');


let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .aibocchi Siapa presiden Indonesia?`, m)
  
  let name = conn.getName(m.sender);
  await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
  let tio = await fetch(`https://api.lolhuman.xyz/api/pinterest2?apikey=${apichan}&query=asuna+yuuki+icon`)
let p = await tio.json()
let url = p.result[Math.floor(Math.random()  *p.result.length)]

  let res = await fetch(`${alyaNdikz}api/cai?msg=${text}&chara_id=DDdpp6CIKNNlrqbvTfQtYpjaEUTuKQsLpHf6rFaso0o&single_reply=false&apikey=${alyaapi}`)
  let vas = await res.json()
  let v = vas.data
  
  await conn.sendMessage(m.chat, { react: { text: `🌸`, key: m.key }});
  
  let hasil = `${v.content}`;
  await conn.sendFile(m.chat, url, '', hasil, m);
  
};

handler.command = handler.help = ['asunaai'];
handler.tags = ['internet'];
handler.limit = 4
handler.premium = false
module.exports = handler;