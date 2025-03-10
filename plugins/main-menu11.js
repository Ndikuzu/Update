let fetch = require('node-fetch')
let moment = require('moment-timezone')
let fs = require('fs')
Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
let handler = async (m, { conn, usedPrefix, command, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let user = global.db.data.users[who];
let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
let uptime = clockString(_uptime)
let version = require('../package.json').version
let d = new Date(new Date + 3600000) 
   let locale = 'id' 
let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Jakarta'})
let time = new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Jakarta', hour: 'numeric', minute: 'numeric', hour12: true})
let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/65c43c76b126a2e1a8409.png");
  let limit = user.premium ? '∞' : user.limit;
  let balance = user.money > 9999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.money;
  let level = user.level > 9999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.level;
  let status = user.owner ? 'Owner' : user.premium ? 'Premium' : 'Free User';
  let age = user.age > 4000 ? 'Unknown' : user.age;
  let exp = user.exp > 999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.exp;
  let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "Not Found";
  let pp = await (await fetch(ppUrl)).buffer();
  let name = await conn.getName(m.sender)
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let ucpn = `${ucapan()}`
    readmore: readMore
  let menyu = `
*${namabot}* ᴀᴅᴀʟᴀʜ ᴘʀᴏɢʀᴀᴍ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ꜱɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴅᴀʟᴀᴍ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʙᴇʀʙᴀɢᴀɪ ᴛɪɴᴅᴀᴋᴀɴ, ᴍᴇɴᴄᴀʀɪ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛꜱᴀᴘᴘ.
─────────────
ʜᴀʟᴏ *${name}* ᴀᴅᴀ ʏᴀɴɢ ʙɪꜱᴀ ꜱᴀʏᴀ ʙᴀɴᴛᴜ?
ᴋᴇᴛɪᴋ *.ᴏᴡɴᴇʀ* ᴜɴᴛᴜᴋ ᴍᴇɴʏᴇᴡᴀ ʙᴏᴛ ᴀᴛᴀᴜ ᴋᴇᴘᴇʀʟᴜᴀɴ ʟᴀɪɴɴʏᴀ, ᴛᴇʀɪᴍᴀ ᴋᴀꜱɪʜ
─────────────

${htjava}  ◈ ━━━━━ *INFO BOTZ* ━━━━━ ◈

◦ Name : ${name}
◦ Age : ${age}
◦ Limit : ${limit}
◦ Balance : ${balance}
◦ Exp : ${exp}
◦ Level : ${level}
◦ Status : ${status}
◦ Expired : ${premiumExpired}
◦ Date : ${week}, ${date}
◦ Time : ${time}

${htjava}

┌─〔 *𝗠𝗲𝗻𝘂 𝗢𝘄𝗻𝗲𝗿* 〕
┇ ⫹⫺ .backup (Ⓟ)
┇ ⫹⫺ .addtojadwal
┇ ⫹⫺ .prem *@tag|days*
┇ ⫹⫺ .promoted *@tag|days*
┇ ⫹⫺ .demoted *@tag|days*
┇ ⫹⫺ .promoted *@tag|days*
┇ ⫹⫺ .promoted *@tag|days*
┇ ⫹⫺ .promoted *@tag|days*
┇ ⫹⫺ .backup (Ⓟ)
┇ ⫹⫺ .backupme
┇ ⫹⫺ .backup
┇ ⫹⫺ .banchat
┇ ⫹⫺ .bannedwa (Ⓟ)
┇ ⫹⫺ .bans *@tag|days*
┇ ⫹⫺ .ban *@tag|days*
┇ ⫹⫺ .block <@user>
┇ ⫹⫺ .blocklist
┇ ⫹⫺ .boost
┇ ⫹⫺ .broadcast <teks>
┇ ⫹⫺ .bc <teks>
┇ ⫹⫺ .broadcastchats <teks>
┇ ⫹⫺ .bcchats <teks>
┇ ⫹⫺ .broadcastgroup <teks>
┇ ⫹⫺ .bcgc <teks>
┇ ⫹⫺ .call
┇ ⫹⫺ .debounce
┇ ⫹⫺ .unprem
┇ ⫹⫺ .enable <option>
┇ ⫹⫺ .disable <option>
┇ ⫹⫺ .delexpired
┇ ⫹⫺ .expired <hari>
┇ ⫹⫺ .getconfig
┇ ⫹⫺ .getdatabase
┇ ⫹⫺ .gethandler
┇ ⫹⫺ .getplugin <teks>
┇ ⫹⫺ .getsessi
┇ ⫹⫺ .email
┇ ⫹⫺ .email
┇ ⫹⫺ .email
┇ ⫹⫺ .unwarn @mention
┇ ⫹⫺ .warn @tag
┇ ⫹⫺ .joins <chat.whatsapp.com> <day>
┇ ⫹⫺ .join <link group>
┇ ⫹⫺ .backup (Ⓟ)
┇ ⫹⫺ .df
┇ ⫹⫺ .deletefitur
┇ ⫹⫺ .delfitur
┇ ⫹⫺ .addndikz [@user]
┇ ⫹⫺ .delmdikz [@user]
┇ ⫹⫺ .cheat <type> <jumlah> @user
┇ ⫹⫺ .cleartmp
┇ ⫹⫺ .botgc <open/close>
┇ ⫹⫺ .addowner [@user]
┇ ⫹⫺ .addsaldo
┇ ⫹⫺ .delowner [@user]
┇ ⫹⫺ .listowner
┇ ⫹⫺ .minsaldo
┇ ⫹⫺ .restart
┇ ⫹⫺ .pckick *@tag|days*
┇ ⫹⫺ .reset
┇ ⫹⫺ .resetexp
┇ ⫹⫺ .resetgrup
┇ ⫹⫺ .resetlimit
┇ ⫹⫺ .resetlimit
┇ ⫹⫺ .reset
┇ ⫹⫺ .resetwarn
┇ ⫹⫺ .savefile <path>
┇ ⫹⫺ .sf <path>
┇ ⫹⫺ .email
┇ ⫹⫺ .email
┇ ⫹⫺ .setmenu <teks>
┇ ⫹⫺ .setmenubefore <teks>
┇ ⫹⫺ .setmenuheader <teks>
┇ ⫹⫺ .setmenubody <teks>
┇ ⫹⫺ .setmenufooter <teks>
┇ ⫹⫺ .setmenuafter <teks>
┇ ⫹⫺ .setppbot
┇ ⫹⫺ .simulate <event> [@mention]
┇ ⫹⫺ .otransfer
┇ ⫹⫺ .unbanchat
┇ ⫹⫺ .unbannedwa
┇ ⫹⫺ .unbannedwa
┇ ⫹⫺ .unban
┇ ⫹⫺ .unblock <@user>
└ ─ ─ ─ ─ ─〢
`
conn.sendPresenceUpdate("recording", m.chat)
  conn.sendMessage(m.chat, {
text: menyu,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namabot,
body: namaowner,
thumbnailUrl: ppUrl,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['menuowner']
handler.tags = ['main']
handler.customPrefix = /^(menuowner|.menuowner)$/i
handler.command = new RegExp
handler.register = false;
handler.limit = true;

module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Good morning"
  if (time >= 4) {
    res = "Good morning"
  }
  if (time >= 10) {
    res = "Good afternoon"
  }
  if (time >= 15) {
    res = "Good afternoon"
  }
  if (time >= 18) {
    res = "Good night"
  }
  return res
}