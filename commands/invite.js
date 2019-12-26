const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;

    let inviteEmbed = new Discord.MessageEmbed()
        .setDescription("`Invite link`")
        .setColor("#f792ed")
        .setThumbnail('https://imgur.com/rVX3fKL.png')
        .addField("Invite link for our server", "https://discord.gg/jCrSQTN")

    message.channel.send(inviteEmbed);

    message.delete();

}
module.exports.help = {
    name: "invite"
}