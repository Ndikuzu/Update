let handler = async (m, { conn, usedPrefix, command }) => {
conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  conn.sendFile(m.chat, pickRandom(cosplay), null, wm, m)
}
handler.help = ['cosplay']
handler.tags = ['anime']
handler.command = /^(cosplay)$/i

handler.premium = false

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const cosplay = [

    "https://i.pinimg.com/originals/13/8f/a9/138fa9fab411166bb8c5523bf710ff42.jpg",
    "https://i.pinimg.com/564x/c3/11/9a/c3119aef29726b78b9f0509aa40ccb3b.jpg",
    "https://i.pinimg.com/originals/18/05/40/18054035c2adc989580043b4391e20af.jpg",
    "https://i.pinimg.com/736x/7c/0a/4b/7c0a4bd43596226b6311b8aae2b02408.jpg",
    "https://i.pinimg.com/originals/3d/fe/1d/3dfe1d00cff5b517d4eb56e5297abae9.jpg",
    "https://i.pinimg.com/originals/77/dd/ef/77ddefdd397d0730db97d848781e4df7.jpg",
    "https://i.pinimg.com/736x/43/d9/7d/43d97d69e6552e80da086cd91557c826.jpg",
    "https://i.pinimg.com/originals/e5/f2/86/e5f286ded660f38e8f4db73c8dfafba8.jpg",
    "https://i.pinimg.com/474x/9f/6f/71/9f6f7189691c533cd88ef656ce23bcbb.jpg",
    "https://i.pinimg.com/736x/0d/b8/44/0db844fa29b995dd699bfb9172fad779.jpg",
    "https://i.pinimg.com/736x/41/c3/49/41c349749124411f4b4c0b928eb46207.jpg",
    "https://i.pinimg.com/originals/c6/f7/bf/c6f7bfb44f0c964104ca36c8ee388f71.jpg",
    "https://i.pinimg.com/736x/1e/c5/c3/1ec5c36b3dfa5f1bef5847def89f8df6.jpg",
    "https://i.pinimg.com/originals/76/b6/1a/76b61aebdbc05551c9d8714014d7a30d.jpg",
    "https://i.pinimg.com/originals/3a/3e/fc/3a3efc8f03eb6122b0e04841f4177c2c.jpg",
    "https://i.pinimg.com/originals/77/ae/d7/77aed75e4e9f6bf317f8ca9e872d172a.jpg",
    "https://i.pinimg.com/originals/0d/d5/02/0dd5028b7f3e2e660b78aadb5ee1ecee.jpg",
    "https://i.pinimg.com/474x/9b/b2/d7/9bb2d7e9ca23a61c49c3a9428d6ccb3e.jpg",
    "https://i.pinimg.com/236x/c8/23/40/c82340db05d9ef61411a9d5837eeb2a3.jpg",
    "https://i.pinimg.com/736x/3c/2a/6b/3c2a6b131b6d1377ca31b1cee9eb5e5d.jpg",
    "https://i.pinimg.com/originals/cf/3c/2b/cf3c2bf2ce5ae2555dda6cadf11a67a7.jpg",
    "https://i.pinimg.com/236x/c3/16/e5/c316e5eb1367be33993d2266cc839062.jpg",
    "https://i.pinimg.com/originals/2c/8f/4b/2c8f4bf86a5b05df761cfd0244d37b4d.jpg",
    "https://i.pinimg.com/736x/b4/83/04/b48304a92e85c4eba37b82fdd5d08434.jpg",
    "https://i.pinimg.com/originals/75/b3/99/75b399a50c4ac54e49261dd6e0f81a5b.jpg",
    "https://i.pinimg.com/originals/dd/02/c5/dd02c512af2a70a9840ffab06eb74f4e.jpg",
    "https://i.pinimg.com/originals/53/0a/6d/530a6d47fa85f639587e0c7b54c4457d.jpg",
    "https://i.pinimg.com/originals/1c/eb/aa/1cebaa84d93f590f15933e78efc94f4b.jpg",
    "https://i.pinimg.com/736x/de/e9/68/dee968195b668d1bfd021cedc79cd5ab.jpg",
    "https://i.pinimg.com/originals/20/d9/57/20d957c9ad8d0691768a8968152a311d.jpg",
    "https://i.pinimg.com/originals/7a/f7/7e/7af77ef00a5057a98aedbf86450317f9.jpg",
    "https://i.pinimg.com/originals/25/41/a9/2541a9472e1378998cf5ac0dfcdc82f5.jpg",
    "https://i.pinimg.com/236x/9a/0c/fb/9a0cfbdd161d09e8c200ee5cebbcaac1--male-cosplay-anime-cosplay.jpg",
    "https://i.pinimg.com/564x/79/56/be/7956be00b52b5484c161a50a2ed0e566.jpg",
    "https://i.pinimg.com/236x/21/63/f9/2163f9e0d59f7d10ba237131bc1e6162--cool-cosplay-anime-cosplay.jpg",
    "https://i.pinimg.com/originals/ea/d1/0d/ead10da121a27b4d1801def2505295a5.png",
    "https://i.pinimg.com/564x/6e/15/2b/6e152b90f638d955371cffe615f685fc.jpg",
    "https://i.pinimg.com/originals/25/ef/0d/25ef0d8b101b555d34fc654d3bc8453d.jpg",
    "https://i.pinimg.com/originals/37/5c/55/375c55403d41d13316e6479f7ccbcc8c.jpg",
    "https://i.pinimg.com/474x/7c/1a/0c/7c1a0cf9af72ee41c408e40f36eafd33.jpg",
    "https://i.pinimg.com/originals/cc/b5/a8/ccb5a867547d92b7c9e399e4d71ae2c8.png",
    "https://i.pinimg.com/474x/b4/20/e5/b420e54c70e5ce1f112d400e686a0a0f.jpg",
    "https://i.pinimg.com/originals/a0/6f/c5/a06fc51bffd216199727461115ca6dd0.png",
    "https://i.pinimg.com/originals/47/10/41/471041b7a2d7110f826b4fffda87846a.jpg",
    "https://i.pinimg.com/originals/a4/18/92/a418925f40047be5f00a0c0d3c5dfcb9.jpg",
    "https://i.pinimg.com/474x/6c/a5/d8/6ca5d8d601f19d6f21d6d649e8914489--male-cosplay-cosplay-anime.jpg",
    "https://i.pinimg.com/originals/79/bf/02/79bf0236aaff04bdf052673bfa4d4581.jpg",
    "https://i.pinimg.com/originals/c9/ae/4d/c9ae4d450bbbf2c116d40fcb6644c113.jpg",
    "https://i.pinimg.com/564x/b5/12/46/b5124604bd0cb22c7c384972cb6703af.jpg",
    "https://i.pinimg.com/originals/4f/a4/e5/4fa4e565931db75327a69bd40d399bce.jpg",
    "https://i.pinimg.com/originals/b7/fc/69/b7fc69457cb0bf3fa13b2eb6f66acdc7.jpg",
    "https://i.pinimg.com/originals/98/25/96/98259611cf99d8d94e10477210bfe168.jpg",
    "https://i.pinimg.com/originals/b9/c9/dd/b9c9dd7caa5b471540cde0cab95f0282.jpg",
    "https://i.pinimg.com/736x/82/c9/bd/82c9bd503fbbd8ed8b9b4f385b2ff0c2.jpg",
    "https://i.pinimg.com/originals/f0/36/64/f0366478ffda51f117c87d70cc2611f7.jpg",
    "https://i.pinimg.com/originals/84/d9/71/84d9715428eefcd3224a2d43d0a55328.jpg",
    "https://i.pinimg.com/736x/90/aa/7c/90aa7c57a6ce841f63df0bc25717b6ca.jpg",
    "https://i.pinimg.com/736x/1d/73/b3/1d73b3a0fd9771d5a06e0b1c082b517b.jpg",
    "http://fc02.deviantart.net/fs71/f/2012/053/4/b/4b876ef7cfbeb11f7d8209c2a9764df2-d4qnbzr.jpg",
    "https://i.pinimg.com/236x/69/d7/b8/69d7b8a549b4aa250a63a70301c336b9.jpg",
    "https://i.pinimg.com/originals/80/e5/3b/80e53b084bee9286046c039a32f6dbcd.jpg",
    "https://i.pinimg.com/originals/47/6d/e3/476de320a1b37f67e13d890def8c63fa.jpg",
    "https://i.pinimg.com/originals/1b/2c/21/1b2c216600ddb39eeec825b690bd9d63.jpg",
    "https://i.pinimg.com/originals/ce/aa/52/ceaa528f7bb686b532fa04489ba324bf.jpg",
    "https://i.pinimg.com/736x/79/d8/09/79d8090c156b9bafdedf53da7a5b39d1.jpg",
    "https://i.pinimg.com/originals/1b/90/74/1b90744f3331c8e1b84383319ce2ff8d.jpg",
    "https://i.pinimg.com/736x/81/2a/3f/812a3f8095fccc3a2984a1c91b648a36.jpg",
    "https://i.pinimg.com/originals/b0/d4/65/b0d46575c705adf77d698e33730396c4.jpg",
    "https://i.pinimg.com/736x/99/2c/d3/992cd30f0161b3f158267074a3dd96de.jpg",
    "https://i.pinimg.com/originals/90/41/60/904160fdf5387835c654d61bde2d5812.png",
    "https://i.pinimg.com/564x/56/ab/81/56ab81fd3db3fca26c83df394de4d7ed.jpg",
    "https://i.pinimg.com/originals/74/b6/7b/74b67bae3b11329e471b5b859fc9453e.jpg",
    "https://i.pinimg.com/736x/4e/5c/1a/4e5c1a025aca01393cd6203081620cbe.jpg",
    "https://i.pinimg.com/originals/8a/0f/d0/8a0fd013c39621aa2d7214d79ad112f7.jpg",
    "https://i.pinimg.com/564x/9b/b6/a8/9bb6a81dcc6347e98fcef0da01a93172.jpg",
    "https://i.pinimg.com/736x/19/ae/b2/19aeb2ac7500ded0cf50b7f83f60fb86.jpg",
    "https://i.pinimg.com/736x/78/65/92/7865925fa1addd6679a9ea4b2810591c.jpg",
    "https://i.pinimg.com/550x/5a/5c/f3/5a5cf3e562322f01725cc7c2a07cd69b.jpg",
    "https://i.pinimg.com/originals/9c/af/a7/9cafa7fc58286d10e14b73141ff8f5f3.jpg",
    "https://i.pinimg.com/236x/6d/82/07/6d8207caebd7ff644d5835eb22c5bfd2--gintoki-cosplay-cosplay-anime.jpg",
    "https://i.pinimg.com/originals/57/53/00/575300de7503a03fc8191f4b5bbc3d4b.jpg",
    "https://i.pinimg.com/originals/b0/ed/af/b0edafadc4adee5f16cc8bf30b11aebc.jpg",
    "https://i.pinimg.com/originals/8b/ea/61/8bea6183a2fe0cd494175b46965b36da.jpg",
    "https://i.pinimg.com/originals/ff/22/d1/ff22d1d94308bfbeed29bbb1a3972fd2.jpg",
    "https://i.pinimg.com/736x/d0/51/54/d0515487efb61dda9ec3a47239b9e41d.jpg",
    "https://i.pinimg.com/736x/23/78/2a/23782abd62d91b86b83dfdfbac837249.jpg",
    "https://i.pinimg.com/originals/6f/ab/53/6fab53f990a4044d2c9a548eb0754812.jpg",
    "https://i.pinimg.com/originals/dc/8d/11/dc8d1169aab1b6869ccba38502b6b1e7.jpg",
    "https://i.pinimg.com/originals/6c/92/00/6c92009dec098e54f7eb7c1b3e64e5b4.jpg",
    "https://i.pinimg.com/originals/41/7c/02/417c02f44d480e803362142d40e6772b.jpg",
    "https://i.pinimg.com/474x/04/50/10/0450104aa0731202db113fc5cd8c0d12.jpg",
    "https://i.pinimg.com/736x/46/2d/e3/462de328cf3cc69f5b10556ef30579e7.jpg",
    "https://i.pinimg.com/originals/47/3e/b5/473eb575b2f95ce5906bdad0e5b593b7.jpg",
    "https://i.pinimg.com/originals/26/8d/5e/268d5e20a747afea743b9a0cb96cc6de.jpg",
    "https://i.pinimg.com/736x/bc/a3/80/bca380011a5a682a9e7766c1d7c2db82.jpg",
    "https://i.pinimg.com/originals/71/2e/ac/712eacb25c094afd579c04d85ca7f9e0.jpg",
    "https://i.pinimg.com/originals/fc/c5/10/fcc5101e54e559952181e0bab0b1420e.jpg",
    "https://i.pinimg.com/originals/89/55/3d/89553d3b75d8d9484ffc29aba67c1fed.jpg",
    "https://i.pinimg.com/564x/c0/55/11/c05511492dcb02d6caa10e79df009d36.jpg",
    "https://i.pinimg.com/736x/cb/7e/e9/cb7ee99c3cdf99a0451da682ea4ac8fe.jpg"
  ]