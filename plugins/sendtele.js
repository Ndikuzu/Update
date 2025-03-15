let fetch = require('node-fetch')
let handler = async (m, { conn, text, args, usedPrefix }) => {
if (!text) throw 'Masukan Pesan Dan Id Telegram contoh Hello Sayang|5585327044'
let [teks1,teks2] = text.split('|')
   const token = '7527510891:AAHZmbHqSwTjIJQNMd8wvUJct1F3u1g2NUU';

const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    chat_id: teks2,
    text: teks1,
  }),
})
  .then(response => response.json())
  .then(data => {
    console.log('Message sent successfully:', data);
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });
}
handler.help = ['sendtele']
handler.tags = ['sticker']
handler.command = /^(sendtele)$/i
handler.limit = true
handler.premium = true

module.exports = handler