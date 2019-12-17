const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = "$";
const moment = require('moment');

const fs = require('fs');
bot.commands = new Discord.Collection();

var version = '1.0.1'


bot.on('ready', () => {
    console.log('I am ready!');
})



bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        default:
            const DedEmbed = new Discord.RichEmbed()
            .setAuthor(bot.user.username, bot.user.displayAvatarURL)
            .setColor('BLACK')
            .setDescription("You're dead!")
            .setTimestamp();
            message.channel.send({ embed: DedEmbed })
    }
})

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
