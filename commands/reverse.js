const Discord = require("discord.js");

exports.run = function(bot, msg, args) {


    if (args.length < 1) {
        throw 'You must input text to be reversed!';
    }

    let embed = new Discord.MessageEmbed()
        .setColor("#8ec42f")
        .setFooter(`Usage: -reverse MESSAGEHERE`)
        .setDescription(args.join(' ').split('').reverse().join(''))
        .setTitle(`Reversed Message`);

    msg.channel.send(embed);


}

module.exports.help = {
    name: "reverse"
}