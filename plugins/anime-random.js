let fetch = require('node-fetch')
const nsfwlist = [
    'akira', 
    'akiyama', 
    'anna', 
    'ayuzawa', 
    'boruto', 
    'chitanda', 
    'chitoge', 
    'deidara', 
    'doraemon', 
    'elaina', 
    'emilia', 
    'erza', 
    'gremory', 
    'hestia', 
    'hinata', 
    'inori', 
    'itachi', 
    'isuzu', 
    'itori', 
    'kaga', 
    'kagura', 
    'kakasih', 
    'kaori', 
    'kaneki', 
    'kosaki', 
    'kotori', 
    'kuriyama', 
    'kuroha',
    'madara', 
    'mikasa', 
    'miku', 
    'minato', 
    'naruto', 
    'natsukawa', 
    'neko2', 
    'nekohime', 
    'nezuko', 
    'nishimiya', 
    'onepiece', 
    'pokemon',
    'rem', 
    'rize',
    'sagiri',
    'sakura', 
    'sasuke',
    'shina',
    'shinka',
    'shizuka',
    'shota',
    'tomori',
    'toukachan',
    'tsunade',
    'yatogami',
    'yuki'
]
let handler = async (m, { conn, text, isPrems, usedPrefix, command }) => {
if (command == 'akira') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/akira.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'akiyama') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/akiyama.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'anna') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/ana.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'asuna') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/asuna.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'ayuzawa') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/ayuzawa.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'boruto') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/boruto.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'chitanda') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/chitanda.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'chitoge') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/chitoge.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'deidara') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/deidara.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'doraemon') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/doraemon.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'elaina') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/elaina.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'emilia') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/emilia.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'asuna') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/asuna.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'erza') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/erza.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'gremory') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/gremory.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'hestia') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/hestia.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'hinata') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/hinata.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'inori') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/inori.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'isuzu') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/isuzu.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'itachi') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/itachi.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'itori') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/itori.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'kaga') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kaga.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'kagura') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kagura.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'kakasih') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kakasih.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'kaori') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kaori.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'kosaki') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kosaki.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'kotori') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kotori.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'kuriyama') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kuriyama.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'kuroha') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kuroha.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'kurumi') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kurumi.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'loli') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/loli.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'madara') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/madara.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'mikasa') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/mikasa.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'miku') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/miku.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'minato') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/minato.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'naruto') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/naruto.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'natsukawa') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/natsukawa.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'neko2') {
    if(!isPrems) throw 'Khusus Member Premium'
let res = await (await fetch(`https://api.waifu.pics/nsfw/neko`)).json()
let cita = res.url
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'nsfw') {
    if(!isPrems) throw 'Khusus Member Premium'
    let animensfw = pickRandom(nsfwlist)
    let am = await(await fetch('https://raw.githubusercontent.com/IchanZX1/ChanZX/master/apaloh.json')).json()
let atr = am.result
let res = await (await fetch(`https://api.lolhuman.xyz/api/pixiv?apikey=${atr}&query=${animensfw}`)).json()
await conn.sendFile(m.chat, res.result[0].image, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'nekohime') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/nekohime.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'nezuko') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/nezuko.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'nishimiya') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/nishimiya.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'onepiece') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/onepiece.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'pokemon') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/pokemon.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'rem') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/rem.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'rize') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/rize.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'sagiri') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/sagiri.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'sakura') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/sakura.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'sasuke') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/sasuke.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'shina') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/shina.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'shinka') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/shinka.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'shizuka') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/shizuka.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'shota') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/shota.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'tomori') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/tomori.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'toukachan') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/toukachan.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'tsunade') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/tsunade.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'yatogami') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/yatogami.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
if (command == 'yuki') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/yuki.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'anime.jpg', `Nih Animek nya🌺`, m,)
}
}
handler.command = handler.help = [
'akira', 
'akiyama', 
'anna', 
'ayuzawa', 
'boruto', 
'chitanda', 
'chitoge', 
'deidara', 
'doraemon', 
'elaina', 
'emilia', 
'erza', 
'gremory', 
'hestia', 
'hinata', 
'inori', 
'itachi', 
'isuzu', 
'itori', 
'kaga', 
'kagura', 
'kakasih', 
'kaori', 
'kaneki', 
'kosaki', 
'kotori', 
'kuriyama', 
'kuroha', 
'madara', 
'mikasa', 
'miku', 
'minato', 
'naruto', 
'natsukawa', 
'neko2', 
'nsfw',
'nekohime', 
'nezuko', 
'nishimiya', 
'onepiece', 
'pokemon',
'rem', 
'rize',
'sagiri',
'sakura', 
'sasuke',
'shina',
'shinka',
'shizuka',
'shota',
'tomori',
'toukachan',
'tsunade',
'yatogami',
'yuki'
]
handler.tags = ['anime']
handler.limit = 5
module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
  }