const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const m = await message.channel.send('Ping!');
    let pong = new Discord.MessageEmbed()
        .setColor("#32a852")
        .setTitle('🏓 Pong!')
        .setDescription(`${m.createdTimestamp - message.createdTimestamp} ms`)
        .setTimestamp()
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");


    message.channel.send(pong)
    m.delete();

}
module.exports.help = {
    name: "ping"
}