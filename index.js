const fs = require("fs")
const config = require("./config.json")
const Discord = require("discord.js")
const { promptMessage } = require("./functions.js");
const bot = new Discord.Client({
    partials: ['MESSAGE']
});
bot.commands = new Discord.Collection()
let prefix = "-"



fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Kon geen commands folder vinden")
        return
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        console.log(`${i + 1}: ${f} geladen!`)
        bot.commands.set(props.help.name, props)
    })

})

process.on("error", console.error)


//adada
bot.on('messageReactionAdd', async(reaction, user) => {

    let applyRole = async() => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === '⛄ 𝓢𝓷𝓸𝔀𝓶𝓪𝓷');
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if (role && member) {
                await member.roles.add(role);
                await member.roles.add('659450225865392161');
            }
        } catch (err) {
            console.log(err);
        }
    }
    if (reaction.message.partial) {
        try {
            let msg = await reaction.message.fetch();
            if (msg.id === '659456650792665088') {
                applyRole();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        if (reaction.message.id === '659456650792665088') {
            applyRole();
        }
    }
});

bot.on('messageReactionRemove', async(reaction, user) => {
        let removeRole = async() => {
            let emojiName = reaction.emoji.name;
            let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
            let member = reaction.message.guild.members.find(member => member.id === user.id);
            try {
                if (role && member) {
                    await member.roles.remove(role);
                }
            } catch (err) {
                console.log(err);
            }
        }
        if (reaction.message.partial) {
            try {
                let msg = await reaction.message.fetch();
                if (msg.id === '659456650792665088') {
                    removeRole('⛄ 𝓢𝓷𝓸𝔀𝓶𝓪𝓷');
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            if (reaction.message.id === '659456650792665088') {
                removeRole('⛄ 𝓢𝓷𝓸𝔀𝓶𝓪𝓷');
            }
        }
    })
    //ssa


bot.on('messageReactionAdd', async(reaction, user) => {

    let applyRole = async() => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if (role && member) {
                await member.roles.add(role);
            }
        } catch (err) {
            console.log(err);
        }
    }
    if (reaction.message.partial) {
        try {
            let msg = await reaction.message.fetch();
            if (msg.id === '659454603988828182') {
                applyRole();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        if (reaction.message.id === '659454603988828182') {
            applyRole();
        }
    }
});

bot.on('messageReactionRemove', async(reaction, user) => {
    let removeRole = async() => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if (role && member) {
                await member.roles.remove(role);
            }
        } catch (err) {
            console.log(err);
        }
    }
    if (reaction.message.partial) {
        try {
            let msg = await reaction.message.fetch();
            if (msg.id === '659454603988828182') {
                removeRole();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        if (reaction.message.id === '659454603988828182') {
            removeRole();
        }
    }
})

bot.on('message', message => {


    if (message.author === bot.user) return;
    let AFKuser = message.mentions.members.first();
    let embed = new Discord.MessageEmbed()
        .setColor("#a10505")
        .setFooter(`Drinking some water :D`)
        .setDescription(`<a:wtf:650760063266455610> | ${AFKuser} has AFK Mode enabled.\n<a:ping:650759995746680842> | Mentioned by ||${message.author}||`)
        .setTitle(`Currently Away.`);
    if (!AFKuser) return;
    if (AFKuser.roles.has("659148415736741888")) {
        message.channel.send(embed);
    }
})

bot.on('messageReactionAdd', async(reaction, user) => {

    let applyRole = async() => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if (role && member) {
                await member.roles.add(role);
            }
        } catch (err) {
            console.log(err);
        }
    }
    if (reaction.message.partial) {
        try {
            let msg = await reaction.message.fetch();
            if (msg.id === '659086298996408320') {
                applyRole();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        if (reaction.message.id === '659086298996408320') {
            applyRole();
        }
    }
});

bot.on('messageReactionRemove', async(reaction, user) => {
    let removeRole = async() => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if (role && member) {
                await member.roles.remove(role);
            }
        } catch (err) {
            console.log(err);
        }
    }
    if (reaction.message.partial) {
        try {
            let msg = await reaction.message.fetch();
            if (msg.id === '659086298996408320') {
                removeRole();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        if (reaction.message.id === '659086298996408320') {
            removeRole();
        }
    }
})

// 2

bot.on('messageReactionAdd', async(reaction, user) => {

    let applyRole = async() => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if (role && member) {
                await member.roles.add(role);
            }
        } catch (err) {
            console.log(err);
        }
    }
    if (reaction.message.partial) {
        try {
            let msg = await reaction.message.fetch();
            if (msg.id === '659095792761700363') {
                applyRole();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        if (reaction.message.id === '659095792761700363') {
            applyRole();
        }
    }
});

bot.on('messageReactionRemove', async(reaction, user) => {
    let removeRole = async() => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if (role && member) {
                await member.roles.remove(role);
            }
        } catch (err) {
            console.log(err);
        }
    }
    if (reaction.message.partial) {
        try {
            let msg = await reaction.message.fetch();
            if (msg.id === '659095792761700363') {
                removeRole();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        if (reaction.message.id === '659095792761700363') {
            removeRole();
        }
    }
})

//3

bot.on('messageReactionAdd', async(reaction, user) => {

    let applyRole = async() => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if (role && member) {
                await member.roles.add(role);
            }
        } catch (err) {
            console.log(err);
        }
    }
    if (reaction.message.partial) {
        try {
            let msg = await reaction.message.fetch();
            if (msg.id === '659123277968441344') {
                applyRole();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        if (reaction.message.id === '659123277968441344') {
            applyRole();
        }
    }
});

bot.on('messageReactionRemove', async(reaction, user) => {
    let removeRole = async() => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if (role && member) {
                await member.roles.remove(role);
            }
        } catch (err) {
            console.log(err);
        }
    }
    if (reaction.message.partial) {
        try {
            let msg = await reaction.message.fetch();
            if (msg.id === '659123277968441344') {
                removeRole();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        if (reaction.message.id === '659123277968441344') {
            removeRole();
        }
    }
})

//4

bot.on('messageReactionAdd', async(reaction, user) => {

    let applyRole = async() => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if (role && member) {
                await member.roles.add(role);
                await member.roles.add('659137881239191610');
            }
        } catch (err) {
            console.log(err);
        }
    }
    if (reaction.message.partial) {
        try {
            let msg = await reaction.message.fetch();
            if (msg.id === '659137452589449218') {
                applyRole();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        if (reaction.message.id === '659137452589449218') {
            applyRole();
        }
    }
});

bot.on('messageReactionRemove', async(reaction, user) => {
    let removeRole = async() => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if (role && member) {
                await member.roles.remove(role);
            }
        } catch (err) {
            console.log(err);
        }
    }
    if (reaction.message.partial) {
        try {
            let msg = await reaction.message.fetch();
            if (msg.id === '659137452589449218') {
                removeRole();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        if (reaction.message.id === '659137452589449218') {
            removeRole();
        }
    }
})

// 5

bot.on('messageReactionAdd', async(reaction, user) => {

    let applyRole = async() => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if (role && member) {
                await member.roles.add(role);
            }
        } catch (err) {
            console.log(err);
        }
    }
    if (reaction.message.partial) {
        try {
            let msg = await reaction.message.fetch();
            if (msg.id === '659143766103293973') {
                applyRole();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        if (reaction.message.id === '659143766103293973') {
            applyRole();
        }
    }
});

bot.on('messageReactionRemove', async(reaction, user) => {
    let removeRole = async() => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if (role && member) {
                await member.roles.remove(role);
            }
        } catch (err) {
            console.log(err);
        }
    }
    if (reaction.message.partial) {
        try {
            let msg = await reaction.message.fetch();
            if (msg.id === '659143766103293973') {
                removeRole();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        if (reaction.message.id === '659143766103293973') {
            removeRole();
        }
    }
})

//6

bot.on('messageReactionAdd', async(reaction, user) => {

    let applyRole = async() => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if (role && member) {
                await member.roles.add(role);
            }
        } catch (err) {
            console.log(err);
        }
    }
    if (reaction.message.partial) {
        try {
            let msg = await reaction.message.fetch();
            if (msg.id === '659149264756277250') {
                applyRole();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        if (reaction.message.id === '659149264756277250') {
            applyRole();
        }
    }
});

bot.on('messageReactionRemove', async(reaction, user) => {
    let removeRole = async() => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if (role && member) {
                await member.roles.remove(role);
            }
        } catch (err) {
            console.log(err);
        }
    }
    if (reaction.message.partial) {
        try {
            let msg = await reaction.message.fetch();
            if (msg.id === '659149264756277250') {
                removeRole();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        if (reaction.message.id === '659149264756277250') {
            removeRole();
        }
    }
})




bot.on("ready", async() => {

    console.log(`${bot.user.username} is now activated!`)
    if (config.activity.streaming == true) {
        bot.user.setActivity(config.activity.game, { url: 'https://twitch.tv/username' });
    } else {
        bot.user.setActivity(config.activity.game, { type: 'WATCHING' }); //PLAYING, LISTENING, WATCHING
        bot.user.setStatus('dnd'); // dnd, idle, online, invisible
    }

})
bot.on('message', message => {



    if (message.channel.id === "659015883380752384") {

        if (message.content !== '-poll' && message.author.id !== '659812322835169296') {
            message.delete();

        }

    }


    const author = message.author.id;
    const vembed = new Discord.MessageEmbed()
        .setColor("#c93636")
        .setTitle('<a:tickred:658495588924653578> No Access!')
        .setDescription(`**${message.author}** please click on the reaction under this message to receive access to channels!`)
        .setFooter(`USAGE: -verify`, "https://imgur.com/kFa4FoZ.png")
        .setTimestamp();
    const dembed = new Discord.MessageEmbed()
        .setColor("#42e388")
        .setTitle('<a:tickgreen:658495553880981536> Access Granted')
        .setDescription(`Thank you for verifying!`)
        .setFooter(`USAGE: -verify`, "https://imgur.com/kFa4FoZ.png")
        .setTimestamp();

    if (message.channel.id !== "658797645111754785") return;
    if (message.channel.id === "658797645111754785") {

        if (message.content !== '-verify' && message.author.id !== '659812322835169296') {
            message.delete();

        }
        let msg = message.content.toUpperCase();
        if (message.content === '-verify') {
            message.delete();
            message.channel.send(vembed)
                .then(async sentMessage => {
                    const emoji = await promptMessage(sentMessage, message.member, 15000, "🧊")


                    if (emoji === "🧊") {
                        message.member.roles.add('648301201300914186');
                        message.member.roles.add('659096642481291287');
                        message.member.roles.add('659098773913337856');

                        sentMessage.edit(dembed).then(async sentMessage => {
                            sentMessage.reactions.removeAll();
                        })
                    }
                })
        }
    }
})




bot.on('guildMemberAdd', member => {
    //    var role = member.guild.roles.find('name', 'Citizen');
    // member.addRole(role)
    let arrivals = member.guild.channels.find(channel => channel.name === 'arrivals');
    if (!arrivals) return;
    let embed = new Discord.MessageEmbed()
        .setColor("#3bdbd6")
        .setDescription(`🛬 Dear **${member}** you just landed at E-Hub Airport! Please Read <#658423911113031680>!`)
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png")
        .setTimestamp()

    arrivals.send(embed);
});



bot.on('guildMemberRemove', member => {
    let departure = member.guild.channels.find(channel => channel.name === 'departure');
    if (!departure) return;
    let embed = new Discord.MessageEmbed()
        .setColor("#de8b37")
        .setDescription(`🛫 Passenger **${member}** left E-Hub Airport!`)
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png")
        .setTimestamp()

    departure.send(embed);
});

bot.on('message', message => {

    const logs = message.guild.channels.find(channel => channel.name === 'logs');
    if (!logs) return;
    let msg = message.content.toUpperCase();
    let logsembed = new Discord.MessageEmbed()
        .setColor("#38d1a1")
        .addField(`Discord Console`, `${message.author} used a forbidden word(s)!`)
        .setTimestamp()
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");

    let advertisembed = new Discord.MessageEmbed()
        .setColor("#38d1a1")
        .addField(`Discord Console`, `${message.author} tried to send **${message}**.`)
        .setTimestamp()
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");

    let linkembed = new Discord.MessageEmbed()
        .setColor("#38d1a1")
        .addField(`Discord Console`, `${message.author} tried to send **${message}**.`)
        .setTimestamp()
        .setFooter(`© E-HUB DISCORD`, "https://imgur.com/kFa4FoZ.png");

    const swearWords = ["CANCER", "NIGGER", "KANKER", "KKR", "KYS", "NIGGA", "DICKHEAD"];
    if (swearWords.some(word => msg.includes(word))) {
        message.delete();
        logs.send(logsembed)
    }


    let aut = message.author;

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {

        const links = [".GG", ".COM", ".NET", ".ORG", ".CO.UK", ".EU", ".CO", ".XYZ", ".FUN", ".NL", ".SPACE"];
        if (links.some(word => msg.includes(word))) {
            message.delete();
            logs.send(linkembed)
        }
    }



    if (!message.content.startsWith(prefix)) return


    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1)
    let commandFile = bot.commands.get(cmd.slice(prefix.length))
    if (commandFile) commandFile.run(bot, message, args)


});

bot.login(process.env.token);