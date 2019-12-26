const yoMamma = require('yo-mamma').default;
const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    let insult = yoMamma();
    let roast = new Discord.MessageEmbed()
        .setColor("#ff684a")
        .setFooter(`command | -joe`)
        .setDescription("<a:wtf:650760063266455610> | " + insult)
        .setTitle(`DAMN!`);
    message.channel.send(roast)

}

module.exports.help = {
    name: "joe"
}