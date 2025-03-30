// jangan lupa npm i @google/generative-ai

const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Case
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || "";
 if (!text) {
 return m.reply("Harap masukkan prompt custom!\n\nContoh: aiedit buatkan foto itu lebih estetik.");
 }
 if (!mime) {
 return m.reply("Tidak ada gambar yang direply! Silakan reply gambar dengan format jpg/png.");
 }
 if (!/image\/(jpe?g|png)/.test(mime)) {
 return m.reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png.`);
 }
 m.reply("Otw diedit sesuai permintaan...");
 try {
 let imgData = await q.download();
 let genAI = new GoogleGenerativeAI("AIzaSyDWxXKqqaz3Ypv7rW2j9Fhn2TNYazTOUCI");
 const base64Image = imgData.toString("base64");
 const contents = [
 { text: text }, 
 {
 inlineData: {
 mimeType: mime,
 data: base64Image
 }
 }
 ];
 const model = genAI.getGenerativeModel({
 model: "gemini-2.0-flash-exp-image-generation",
 generationConfig: {
 responseModalities: ["Text", "Image"]
 },
 });
 const response = await model.generateContent(contents);
 let resultImage;
 let resultText = "";
 for (const part of response.response.candidates[0].content.parts) {
 if (part.text) {
 resultText += part.text;
 } else if (part.inlineData) {
 const imageData = part.inlineData.data;
 resultImage = Buffer.from(imageData, "base64");
 }
 }
 if (resultImage) {
 const tmpDir = path.join(process.cwd(), "tmp");
 if (!fs.existsSync(tmpDir)) {
 fs.mkdirSync(tmpDir, { recursive: true });
 }
 let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
 fs.writeFileSync(tempPath, resultImage);
 await conn.sendMessage(m.chat, { 
 image: { url: tempPath },
 caption: `*Edit selesai sesuai permintaan!*`
 }, { quoted: m });

 setTimeout(() => {
 try {
 fs.unlinkSync(tempPath);
 } catch (err) {
 console.error("Gagal menghapus file sementara:", err);
 }
 }, 30000);
 } else {
 m.reply("Gagal memproses gambar.");
 }
 } catch (error) {
 console.error(error);
 m.reply(`Error: ${error.message}`);
 }
 }
handler.command = handler.help = ['aiedit'];
handler.tags = ['tools'];
handler.limit = 5
handler.premium = false
module.exports = handler;