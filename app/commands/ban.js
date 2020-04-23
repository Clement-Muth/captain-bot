const Discord = require('discord.js');
const Color = require('../models/color');

module.exports.run = async (bot, message, av) =>
{
    let banUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.get(av[0])
    );
    if (!banUser) return message.channel.send("**❌** | User not found !");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(":warning: You're not allow to ban someone !");
    }
    if (banUser.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(":warning: You can not ban this person. respect your superior!");
    }
    let banReason = av.join(' ').slice(22);
    let baner = message.author;

    message.delete()
    const embed = new Discord.MessageEmbed()
        embed.setTitle(':raised_hand: Sorry but you\'re baned :raised_hand:')
        .setAuthor(bot.user.username, 'https://discord.bots.gg/img/logo_transparent_coloured.png')
        .setColor(Color.red())
        .setDescription('Sorry, You\'re baned' +
        ' from the server **Projets** for reason: ' + banReason + ' !')
        .addField('baner: ', baner)
        .setFooter('© 2020 - 2020 CaptainBot any reproduction is prohibited - Clément Muth',
                'https://discord.bots.gg/img/logo_transparent_coloured.png')
        .setThumbnail('https://discord.bots.gg/img/logo_transparent_coloured.png')
    banUser.send({embed: embed});

    const validate = new Discord.MessageEmbed()
        validate.setTitle(':white_check_mark: **| ban validate**')
        .setAuthor(bot.user.username, 'https://discord.bots.gg/img/logo_transparent_coloured.png')
        .setColor(Color.green())
        .setDescription('Sorry, You\'re baned' +
        ' from the server **Projets** for reason: ' + banReason + ' !')
        .addField('baner: ', baner)
        .setDescription('ban has been correctly set for '
        + `${banUser}` + ' for the reason : **' + banReason + '**')
        .setFooter('© 2020 - 2020 CaptainBot any reproduction is prohibited - Clément Muth',
                'https://discord.bots.gg/img/logo_transparent_coloured.png')
        .setThumbnail('https://discord.bots.gg/img/logo_transparent_coloured.png')
    await bot.channels.cache.get("702617449006235789").send({embed: validate});
    await message.guild.member(banUser).ban(banReason);
}

module.exports.help = {
    name: "ban"
}