const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    let infuperms = new Discord.MessageEmbed()
        .setColor("#ff4040")
        .addField(`<:outage:658496488518975498>`, `${message.author} you don't have enough permissions!`)
        .setTimestamp()
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(infuperms)


    let specifymember = new Discord.MessageEmbed()
        .setColor("#ff4040")
        .addField(`<:outage:658496488518975498>`, `${message.author} you haven't specified a member.`)
        .setTimestamp()
        .setFooter(`USAGE: -mute @<name> <reason>`, "https://imgur.com/kFa4FoZ.png");

    let notmuted = new Discord.MessageEmbed()
        .setColor("#ff4040")
        .addField(`<:outage:658496488518975498>`, `${message.author} user is not muted`)
        .setTimestamp()
        .setFooter(`USAGE: -mute @<name> <reason>`, "https://imgur.com/kFa4FoZ.png");


    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!toMute) return message.channel.send(specifymember);

    let role = message.guild.roles.find(r => r.name === "Muted")

    let unmuted = new Discord.MessageEmbed()
        .setColor("#ff4040")
        .addField(`<:outage:658496488518975498>`, `${message.author} you have unmuted ${toMute}`)
        .setTimestamp()
        .setFooter(`USAGE: -mute @<name> <reason>`, "https://imgur.com/kFa4FoZ.png");
    if (!role || !toMute.roles.has(role.id)) return message.channel.send(notmuted);

    message.channel.send(unmuted).then(aysnc => {
        toMute.roles.remove(role);
    });


}

module.exports.help = {
    name: "unmute"
}