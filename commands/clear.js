const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    // Command is !clear <Number that's less than 100 and greater than 0.

    let infuperms = new Discord.MessageEmbed()
        .setColor("#32a852")
        .addField(`<:ehub:658697955037020190> Error!`, `${message.author} you aren't allowed to do this.`)
        .setTimestamp()
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");

    let nanembed = new Discord.MessageEmbed()
        .setColor("#32a852")
        .addField(`<:ehub:658697955037020190> Error!`, `${message.author} you need to specify an amount.`)
        .setTimestamp()
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");

    let argsembed = new Discord.MessageEmbed()
        .setColor("#32a852")
        .addField(`<:ehub:658697955037020190> Error`, `${message.author} amount has to be under 100!`)
        .setTimestamp()
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(infuperms).then(msg => {
        msg.delete(5000)
    });
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        if (isNaN(args[0])) return message.channel.send(nanembed).then(msg => {
            msg.delete(5000)
        });
        if (args[0] > 100) return message.channel.send(argsembed).then(msg => {
            msg.delete(5000)
        });

        let logs = message.guild.channels.find(channel => channel.name === 'logs');

        let logsembed = new Discord.MessageEmbed()
            .setColor("#32a852")
            .addField(`<:ehub:658697955037020190> Logs`, `${message.author}  has deleted ${args[0]} messages!`)
            .setTimestamp()
            .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");


        message.channel.bulkDelete(args[0])
            .then(messages => logs.send(logsembed));
    }
}
module.exports.help = {
    name: "clear"
}