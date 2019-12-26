const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {

    let killed = message.mentions.members.first();
    if (!killed) {

        let emb = new Discord.MessageEmbed()
            .setColor("#f28f8f")
            .setDescription(`${message.author} decied to kill themself 💔 REST IN PEACE`)

        message.channel.send(emb)

    } else {

        let emb = new Discord.MessageEmbed()
            .setColor("#b53a3a")
            .setDescription(`${killed} was killed by ${message.author} <a:wtf:650760063266455610>`)

        message.channel.send(emb)


    }

}
module.exports.help = {
    name: "kill"
}