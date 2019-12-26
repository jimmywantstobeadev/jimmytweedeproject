const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');

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
        .setFooter(`USAGE: -kick @<name> <reason>`, "https://imgur.com/kFa4FoZ.png");

    //EMBED 3

    let specifyreason = new Discord.MessageEmbed()
        .setColor("#ff4040")
        .addField(`<:outage:658496488518975498>`, `${message.author} you haven't specified a reason.`)
        .setTimestamp()
        .setFooter(`USAGE: -kick @<name> <reason>`, "https://imgur.com/kFa4FoZ.png");

    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(infuperms);
    if (!target) return message.channel.send(specifymember);
    if (!reason) return message.channel.send(specifyreason);

    let logs = message.guild.channels.find(channel => channel.name === 'punishments');

    let qembed = new Discord.MessageEmbed()
        .setColor('#00bcd9')
        .setAuthor('Punishment 「KICK」')
        .addField('👤 Member ', `${target.user.username}`, true)
        .addField('🔧 Staff ', `${message.author.username}`, true)
        .addField('📰 Reason ', reason, true)
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");

    let embed = new Discord.MessageEmbed()
        .setColor('#ff6652')
        .setAuthor('Punishment 「KICK」')
        .addField('👤 Member ', `${target.user.username}`, true)
        .addField('🔧 Staff ', `${message.author.username}`, true)
        .addField('📰 Reason ', reason, true)
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");

    message.channel.send(qembed);
    target.kick(reason);

    logs.send(embed);

};

module.exports.help = {
    name: 'kick'
};