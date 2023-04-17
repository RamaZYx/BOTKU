let handler = function (m) {
 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (err) {
 	m.reply(`🚩 *Itu bukan pesan dari bot*`)
 }
 conn.sendMessage(m.chat, { delete: key })
}
handler.help = ['delete']
handler.tags = ['info']
handler.command = /^(own-del|own-|delete|del)$/i
handler.limit = false
//handler.owner = true


export default handler