const Discord = require('discord.js');
const Color = require('../models/color');
const ms = require('ms');

module.exports.run = async (bot, message, av) =>
{
    let muteUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.get(av[0])
    );
    if (!muteUser) return message.channel.send("**❌** | User not found !");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(":warning: You're not allow to mute someone !");
    }
    if (muteUser.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(":warning: You can not mute this person. respect your superior!");
    }
    
    // Role creation
        
    const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted') || await message.guild.roles.create ({
        name: "Muted",
        color: "#000000",
        permissions: 0 // 0 = no perms instead of []
    });
    const textChannels = message.guild.channels.cache.filter(channel => channel.type === 'text');
    if (!textChannels.every(channel => channel.permissionOverwrites.get(muteRole.id))) {
        textChannels.forEach(async (channel, id) => {
            await channel.overwritePermissions[(muteRole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            })];
        });
    };

    let muteTime = av[1];
    if (!muteTime) return message.channel.send(':warning: Your must specify the time (sec)');

    await muteUser.roles.add(muteRole.id);
    message.channel.send(`<@${muteUser.id}> is muted for ${ms(ms(muteTime))}`);
    setTimeout(() =>
    {
        muteUser.roles.remove(muteRole.id);
        message.channel.send(`<@${muteUser.id}> is no longer muted`);
    }, ms(muteTime));
};

module.exports.help = {
    name: "mute"
}