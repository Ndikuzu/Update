const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada media yang ditemukan'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let sections = []
  let fileSizeLimit = 26 * 1024 * 1024 
  if (media.length > fileSizeLimit) {
    throw 'Ukuran media tidak boleh melebihi 26MB'
  }
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let caption = `${link}
${media.length} Byte(s)
${isTele ? '(Tidak Ada Tanggal Kedaluwarsa)' : '(Expired 24 hours)'}`
const buttons = [{
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                     title: 'Tap Here!',
                     sections
                  })
               }]
               conn.sendMessage(m.chat, buttons, m, {
                  header: '',
                  content: caption,
                  footer: namabot,
                  media: thumb
               })
               }
handler.help = ['tourl <reply image>']
handler.tags = ['sticker']
handler.command = /^(upload|tourl)$/i
handler.limit = 5


module.exports = handler