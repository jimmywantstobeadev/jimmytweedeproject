const Discord = require('discord.js');
const fs = require("fs");

exports.run = (client, message, args) => {

    let infuperms = new Discord.MessageEmbed()
        .setColor("#ff4040")
        .addField(`<:outage:658496488518975498>`, `${message.author} you don't have enough permissions!`)
        .setTimestamp()
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");

    //EMBED 2

    let specifymember = new Discord.MessageEmbed()
        .setColor("#ff4040")
        .addField(`<:outage:658496488518975498>`, `${message.author} you haven't specified a member.`)
        .setTimestamp()
        .setFooter(`USAGE: -mute @<name> <reason>`, "https://imgur.com/kFa4FoZ.png");

    //EMBED 3

    let specifyreason = new Discord.MessageEmbed()
        .setColor("#ff4040")
        .addField(`<:outage:658496488518975498>`, `${message.author} you haven't specified a reason.`)
        .setTimestamp()
        .setFooter(`USAGE: -mute @<name> <reason>`, "https://imgur.com/kFa4FoZ.png");


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(infuperms);
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.channel.send(specifymember);
    if (reason.length < 1) return message.channel.send(specifyreason);

    let qembed = new Discord.MessageEmbed()
        .setColor('#00bcd9')
        .setAuthor('Punishment 「WARN」')
        .addField('👤 Member ', `${user}`, true)
        .addField('🔧 Staff ', `${message.author.username}`, true)
        .addField('📰 Reason ', reason, true)
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");

    message.delete();

    message.channel.send(qembed)

}

exports.help = {
    name: 'warn'
};