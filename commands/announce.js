const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //EMBED

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

    if (!message.member.hasPermissions('KICK_MEMBERS')) return message.channel.send(infuperms);
    let logs = message.guild.channels.find(channel => channel.name === 'punishments');
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send(specifymember);
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return message.channel.send(specifyreason);
    let muterole = message.guild.roles.find(`name`, "Muted");

    await (user.addRole(muterole.id));
    let qembed = new Discord.MessageEmbed()
        .setColor('#00bcd9')
        .setAuthor('Punishment 「MUTE」')
        .addField('👤 Member ', `${user}`, true)
        .addField('🔧 Staff ', `${message.author.username}`, true)
        .addField('📰 Reason ', reason, true)
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");

    let embed = new Discord.MessageEmbed()
        .setColor('#ff6652')
        .setAuthor('Punishment 「MUTE」')
        .addField('👤 Member ', `${user}`, true)
        .addField('🔧 Staff ', `${message.author.username}`, true)
        .addField('📰 Reason ', reason, true)
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");

    logs.sendEmbed(embed);
    message.channel.send(qembed);

}

module.exports.help = {
    name: "mute"
}