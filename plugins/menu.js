const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const platform = require('process')
const os = require('os')
let levelling = require('../lib/levelling')
let ucpn = `${ucapan()}`

let tags = {
  'store': '𝐌𝐄𝐍𝐔 𝐒𝐓𝐎𝐑𝐄',
  'Cai': '𝐌𝐄𝐍𝐔 𝐂𝐀𝐈',
  'rpgabsen': '𝐑𝐏𝐆 𝐀𝐁𝐒𝐄𝐍',
  'rpg': '𝐌𝐄𝐍𝐔 𝐑𝐏𝐆',
  'game': '𝐌𝐄𝐍𝐔 𝐆𝐀𝐌𝐄',
  'xp': '𝐄𝐗𝐏, 𝐋𝐈𝐌𝐈𝐓 & 𝐏𝐀𝐘',
  'sticker': '𝐌𝐄𝐍𝐔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑',
  'anime': '𝐌𝐄𝐍𝐔 𝐀𝐍𝐈𝐌𝐄',
  'main': '𝐌𝐄𝐍𝐔 𝐌𝐀𝐈𝐍',
  'kerang': '𝐊𝐄𝐑𝐀𝐍𝐆 𝐀𝐉𝐀𝐈𝐁',
  'quotes': '𝐌𝐄𝐍𝐔 𝐐𝐔𝐎𝐓𝐄𝐒',
  'admin': '𝐌𝐄𝐍𝐔 𝐀𝐃𝐌𝐈𝐍',
  'group': '𝐌𝐄𝐍𝐔 𝐆𝐑𝐎𝐔𝐏',
  'internet': '𝐌𝐄𝐍𝐔 𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓',
  'anonymous': '𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒 𝐂𝐇𝐀𝐓',
  'downloader': '𝐌𝐄𝐍𝐔 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃',
  'berita': '𝐌𝐄𝐍𝐔 𝐁𝐄𝐑𝐈𝐓𝐀',
  'tools': '𝐌𝐄𝐍𝐔 𝐓𝐎𝐎𝐋𝐒',
  'fun': '𝐌𝐄𝐍𝐔 𝐅𝐔𝐍',
  'database': '𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄', 
  'vote': '𝐕𝐎𝐓𝐈𝐍𝐆',
  'absen': '𝐀𝐁𝐒𝐄𝐍',
  'catatan': '𝐌𝐄𝐍𝐔 𝐂𝐀𝐓𝐀𝐓𝐀𝐍',
  'jadian': '𝐉𝐀𝐃𝐈𝐀𝐍',
  'besftriend': '𝐁𝐄𝐒𝐓𝐅𝐑𝐈𝐄𝐍𝐃',
  'islami': '𝐌𝐄𝐍𝐔 𝐈𝐒𝐋𝐀𝐌𝐈',
  'owner': '𝐌𝐄𝐍𝐔 𝐎𝐖𝐍𝐄𝐑',
  'advanced': '𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃',
  'info': '𝐈𝐍𝐅𝐎',
  'audio': '𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎',
  'maker': '𝐌𝐄𝐍𝐔 𝐌𝐀𝐊𝐄𝐑',
  'nocategory': '𝐍𝐎𝐂𝐀𝐓𝐄𝐆𝐎𝐑𝐘',
  'NdikzOne Menu': '𝐍𝐃𝐈𝐊𝐙 𝐌𝐄𝐍𝐔',
}
const defaultMenu = {
  before: `こんにちは、お姉さん %name 🍁.
私は、何かをしたり、検索したり、データ/情報を取得したりするのに役立つ自動システム (whatsapp ボット) ですが、whatsapp です。
─────────────

⌬〡 _ʜᴀʟᴏ_ *%name*
⌬〡 ʟᴇᴠᴇʟ : *%level* 
⌬〡 ᴛᴏᴛᴀʟ ᴜꜱᴇʀ : %totalreg
⌬〡 ᴛᴏᴛᴀʟ ғɪᴛᴜʀ : %totalf
⌬〡 ᴜᴘᴛɪᴍᴇ : %muptime 
⌬〡 ʟɪʙʀᴀʀʏ : *Baileys*
⌬〡 ᴛʏᴘᴇ : *NodeJS*
⌬〡 ᴘʟᴀᴛғᴏʀᴍ : *%platform*
⌬〡 ᴠᴇʀsɪᴏɴ : *%version*
⌬〡 ʜᴏᴍᴇᴘᴀɢᴇ : *${namabot}*

*pesan* jangan lupa sholat
─────────────
エラーを見つけた場合、またはプレミアム プランをアップグレードしたい場合は、所有者に連絡してください。
%readmore
`.trimStart(),
  header: '─₍🍁₎❝┊ *%category* 〕',
  body: '┊✧𓂃𓏸   %cmd %isPremium %islimit',
  footer: '└ ─ ─ ─ ─ ─〢',
  after: `Copyright : @WhatsApp
${wm}
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    let tag = `@${m.sender.split('@')[0]}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }

      
const zxcoder = [
    { text: "ʟᴏᴀᴅɪɴɢ...", timeout: 100 },
    { text: "《 □■■■■■■■■■》10%", timeout: 100 },
    { text: "《 □□□■■■■■■■》30%", timeout: 100 },
    { text: "《 □□□□□■■■■■》50%", timeout: 100 },
    { text: "《 □□□□□□□□■■》80%", timeout: 100 },
    { text: "《 □□□□□□□□□□》100%", timeout: 100 },
    { text: "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...", timeout: 100 }
  ];

  const lolichan = await conn.sendMessage(m.chat, { text: wait }, { quoted: m });
     let vigif = await downloadAndBuffer(thumb2)
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag

  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
  const poto = await fs.readFileSync('./thumbnail.jpg')
  
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, wib, wit, wita, time, totalreg, rtotalreg, role, _p, money, prems, platform, totalf, tag,
      readmore: readMore,
      namabot: namabot,
      namaowner: namaowner,
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
      let images = pickRandom(waifu)
      conn.sendPresenceUpdate("recording", m.chat)
        for (let i = 0; i < zxcoder.length; i++) {
    await new Promise(resolve => setTimeout(resolve, zxcoder[i].timeout));
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: lolichan,
        type: 14,
        editedMessage: {
          conversation: zxcoder[i].text
        }
      }
    }, { quoted: m });
  }
   //   await loading(1000)
conn.sendMessage(m.chat, {
video: vigif,
mimetype: 'video/mp4',
fileLength: 1000000,
caption: text,
gifPlayback: true,
gifAttribution: 5,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
forwardingScore: 2023,
title: wm,
thumbnailUrl: 'https://telegra.ph/file/62afed496f1f221ae26e9.jpg',
sourceUrl: sgc, 
mediaType: 1,
renderLargerThumbnail: true,
mentionedJid: [m.sender]
}}}, { quoted: m })
  conn.sendFile(m.chat, './mp3/menu.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 8873})
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(allmenu|menuall|help|\?)$/i
handler.register = true
handler.exp = 3
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(10001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Pagi kak'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi kak'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Siang kak'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Sore kak'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Petang kak'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam kak'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }	
        return ucapanWaktu
}
function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Pagi kak'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi kak'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Siang kak'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Sore kak'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Petang kak'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam kak'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }	
        return ucapanWaktu
}
async function downloadAndBuffer(url) {
    try {
        // Unduh file menggunakan Axios
        const response = await axios.get(url, {
            responseType: 'arraybuffer' // Tentukan tipe respons sebagai array buffer
        });

        // Buat buffer dari data yang diunduh
        const buffer = Buffer.from(response.data);

        return buffer;
    } catch (error) {
        console.error('Gagal mengunduh dan membuat buffer:', error);
        return null;
    }
}