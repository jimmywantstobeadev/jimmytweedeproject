const Discord = require("discord.js")



module.exports.run = async(bot, message, args) => {

    let secs = Math.floor(bot.uptime % 60);
    let days = Math.floor((bot.uptime % 31536000) / 86400);
    let hours = Math.floor((bot.uptime / 3600) % 24);
    let mins = Math.floor((bot.uptime / 60) % 60);

    //let duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    let embedStats = new Discord.MessageEmbed()
        .setTitle("`E-HUB` STATS")
        .setColor("#75c6ff")
        .addField("<:discordstaff:658500824359763969> Owner", message.guild.owner, true)
        .addField("<:europe:659089308535226378> Region", message.guild.region, true)
        .addField("⚙️ Roles", message.guild.roles.size, true)
        .addField("<a:kawaii:650760016579657778> Users", `${bot.users.size.toLocaleString()}`, true)
        .addField("<:ehub:658697955037020190> Name", message.guild.name, true)
        .addField("<a:wumpuskeyboard:658500920769904640> Channels", `${bot.channels.size.toLocaleString()}`, true)
        .addField(`<a:kawaiiheart:658492941722976297> Server Created`, message.guild.createdAt)
        .addField("<a:kawaiiheart:658492941722976297> You Joined", message.member.joinedAt)
        .setFooter('E-HUB STATS');
    message.channel.send(embedStats)


}

module.exports.help = {
    name: "stats"
}