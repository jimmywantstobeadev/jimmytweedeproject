const Discord = require("discord.js");
const urban = require("urban");

module.exports.run = async(bot, message, args) => {
    let embed = new Discord.MessageEmbed()
        .setColor("#34c972")
        .setFooter(`Usage: -urban WORDHERE`)
        .setDescription('Please enter a word!')
        .setTitle(`Error!`);

    let eembed = new Discord.MessageEmbed()
        .setColor("#34c972")
        .setFooter(`We couldn't find the urban of that word`)
        .setDescription('Try a different word!')
        .setTitle(`Error!`);
    if (args.length < 1) return message.channel.send(embed);
    let XD = args.join(" ");

    urban(XD).first(json => {
        if (!json) return message.channel.send(eembed)

        let urbEmbed = new Discord.MessageEmbed()
            .setColor("#4db1ff")
            .setTitle(json.word)
            .setDescription(json.definition)
            .addField("👍", json.thumbs_up, true)
            .addField("👎", json.thumbs_down, true)

        message.channel.send(urbEmbed)
    });


}

module.exports.help = {
    name: "urban"
}