const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(infuperms);
    if (message.member.hasPermission('KICK_MEMBERS')) {
        let embed = new Discord.MessageEmbed()
            .setColor('#409ff7')
            .setAuthor('ANTI-RAID SYSTEM')
            .setDescription("Please type `-verify` without caps, this is to prevent raids.")
            .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");

        message.channel.send(embed);
    }


}

module.exports.help = {
    name: "embed"
}