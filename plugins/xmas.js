let limit = 10
let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Masukkan text yang Anda inginkan', m)
if (text > 10) return conn.reply(m.chat, '*Text terlalu panjang sayang!*\n_Maksimal 10 huruf!_', m)
let link = 'https://bsbt-api-rest.herokuapp.com/api/textpro/xmas?text=' + text + '&apikey=benniismael'
conn.sendFile(m.chat, link, 'xmas.png', 'Sukses!', m)
}
handler.help = ['xmas <text>']
handler.tags = ['creator']
handler.command = /^(3d)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.register = true
handler.fail = null

handler.limit = true
module.exports = handler
