const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let embed = new Discord.MessageEmbed()
        .setColor("#7d64fa")
        .setThumbnail(bicon)
        .setTitle("Support / Help")
        .addField("`BOT COMMANDS`", "https://ehub.carrd.co/")
        .setFooter(`If you have questions/problems contact Louis Vuitton#0001`);

    message.channel.send(embed)

    message.delete();
}

module.exports.help = {
    name: "help"
}