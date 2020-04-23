const Color = require('../models/color');
const Discord = require('discord.js');

module.exports.run = async (bot, message, av) =>
{
    let warnUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.get(av[0])
    );
    if (!warnUser) return message.channel.send("**❌** | User not found !");
    let warnReason = av.join(' ').slice(22);

    message.delete()
    warnUser.send ({embed: {
        color: Color.red(),
        description: ':warning: **AVERTISSEMENT** - Your received a warning from **' + `${message.author}` +
        '** in the server **Projets** for reason: ' + warnReason + ' !'
    }})
    console.log("test");
    bot.channels.cache.get("699418570748067921").send({embed: {
        color: Color.green(),
        description: ':white_check_mark: **| Warning has been correctly add for '
        + `${warnUser}` + ' for the reason : ' + warnReason + '** by ' + `${message.author}`
    }})
}

module.exports.help = {
    name: "warn"
}