const Discord = require("discord.js");
let giveMeAJoke = require('give-me-a-joke');;

module.exports.run = async(bot, message, args) => {
    giveMeAJoke.getRandomDadJoke(function(joke) {

        let funny = new Discord.MessageEmbed()
            .setColor("#ff684a")
            .setFooter(`command | -joke`)
            .setDescription("<a:pepe:650759967921405972> | " + joke)
            .setTitle(`😂`);

        message.channel.send(funny)
    })
}

module.exports.help = {
    name: "joke"
}