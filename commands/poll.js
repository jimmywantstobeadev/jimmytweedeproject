const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let infuperms = new Discord.MessageEmbed()
        .setColor("#32a852")
        .addField(`<:ehub:658697955037020190> Error!`, `${message.author} you aren't allowed to do this.`)
        .setTimestamp()
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");

    let nanembed = new Discord.MessageEmbed()
        .setColor("#32a852")
        .addField(`<:ehub:658697955037020190> Error!`, `${message.author} you need to ask a question.`)
        .setTimestamp()
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");

    if (message.channel.id !== "659015883380752384") return;
    if (message.channel.id === "659015883380752384") {

        if (!message.member.hasPermission('READ_MESSAGES')) {
            message.delete();
            message.channel.send(infuperms);
            
        }
        if (message.member.hasPermission('READ_MESSAGES')) {



            if (!args[0]) {
                message.delete();
                message.channel.send(nanembed).then(msg => {
                    msg.delete(5000)
                });
            }

            if (args[0]) {
                let embed = new Discord.MessageEmbed()
                    .setColor("#34c972")
                    .setFooter(`Poll created by ${message.author.username}`)
                    .setDescription(args.join(' '))
                    .setTitle(`React to vote!`);
                message.delete()
                message.channel.send(embed)
                    .then(async function (message) {
                        await message.react('658495553880981536')
                        await message.react('658495588924653578')

                    });
            }
        }
    }


};

module.exports.help = {
    name: "poll"
}