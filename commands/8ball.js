const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {

    //!8ball question
    if (!args[1]) return message.reply("Plesae enter a full question!");
    let replies = ["Yes", "No", "I don't know", "I am not sure!", "Pls No", "You tell me", "Without a doubt", "Cannot predict now"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    let ballembed = new Discord.MessageEmbed()

    .setFooter(message.author.username)
        .setColor("#00ff00")
        .setTitle(question)
        .setDescription(replies[result]);

    message.channel.send(ballembed)

    message.delete();


}

module.exports.help = {
    name: "8ball"
}