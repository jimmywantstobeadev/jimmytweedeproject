const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
        let inline = true
        let resence = true
        const status = {
            online: "<:online:659833586014355499>",
            idle: "<:idle:659833637071486977>",
            dnd: "<:dnd:659833614510587924>",
            offline: "<:offline:659833659301560330> "
        }

        const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
        let target = message.mentions.users.first() || message.author

        if (member.user.bot === true) {
            bot = "<:dm_open:659141451459854336>";
        } else {
            bot = "<:dm_closed:659141481390407685>";
        }

        let embed = new Discord.MessageEmbed()
            //.setAuthor(member.user.username)
            .setThumbnail((target.displayAvatarURL))
            .setColor("#b5ffb3")
            .addField("Discord Username", `${member.user.tag}`, inline)
            .addField("ID", member.user.id, inline)
            .addField("Nickname", `${member.nickname !== null ? `<:dm_open:659141451459854336> Nickname: ${member.nickname}` : "<:dm_closed:659141481390407685>"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join("\n") || "<:dm_closed:659141481390407685>"}`, true)
                .addField("Created discord at", member.user.createdAt)
                .setFooter(`Info of ${member.user.username}`)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }

    module.exports.help = {
        name: "userinfo"
    }