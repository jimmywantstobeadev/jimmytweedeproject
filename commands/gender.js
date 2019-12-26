const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let infuperms = new Discord.MessageEmbed()
        .setColor("#32a852")
        .addField(`<:ehub:658697955037020190> Error!`, `${message.author} you aren't allowed to do this.`)
        .setTimestamp()
        .setFooter(`� E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");


    if (message.channel.id !== "658423922844237825") return;
    if (message.channel.id === "658423922844237825") {

        if (!message.member.hasPermission('READ_MESSAGES')) {
            message.delete();
            message.channel.send(infuperms);

        }
        if (message.member.hasPermission('READ_MESSAGES')) {

            let embed = new Discord.MessageEmbed()
                .setColor("#a10505")
                .setFooter(`LIMITED EDITION ROLE`)
                .setDescription('⛄ **-** `Receive a ⛄ Snowman role`\n_Merry christmas!_')
                .setTitle(`You can't remove this role when you click on the reaction!`);

            message.delete()
            message.channel.send(embed)
                .then(async function(message) {
                    await message.react('⛄')



                });
        }
    }


};

module.exports.help = {
    name: "limitededition"
}