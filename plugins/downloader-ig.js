import instagramGetUrl from 'instagram-url-direct'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
    
    await m.reply(wait)
    var anu = await axios.get(`https://api.zahwazein.xyz/downloader/instagram/story?apikey=LuOlangNgentot&url=${args[0]}`)
    //let result = anu.data.result.url.url
    conn.sendMessage(m.chat, { video: {url: anu.data.result.url.url}, caption: "Succes!"},{quoted: m})
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?)$/i

export default handler