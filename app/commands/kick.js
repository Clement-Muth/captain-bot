const Discord = require('discord.js');
const Color = require('../models/color');

module.exports.run = async (bot, message, av) =>
{
    let kickUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.get(av[0])
    );
    if (!kickUser) return message.channel.send("**❌** | User not found !");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(":warning: You're not allow to kick someone !");
    }
    let kickReason = av.join(' ').slice(22);
    let kicker = message.author;

    message.delete()
    const embed = new Discord.MessageEmbed()
        embed.setTitle(':raised_hand: Sorry but you\'re Kicked :raised_hand:')
        .setAuthor(bot.user.username, 'https://discord.bots.gg/img/logo_transparent_coloured.png')
        .setColor(Color.red())
        .setDescription('Sorry, You\'re kicked' +
        ' from the server **Projets** for reason: ' + kickReason + ' !')
        .addField('Kicker: ', kicker)
        .setFooter('© 2020 - 2020 CaptainBot any reproduction is prohibited - Clément Muth',
                'https://discord.bots.gg/img/logo_transparent_coloured.png')
        .setThumbnail('https://discord.bots.gg/img/logo_transparent_coloured.png')
    kickUser.send({embed: embed});

    const validate = new Discord.MessageEmbed()
        validate.setTitle(':white_check_mark: **| kick validate**')
        .setAuthor(bot.user.username, 'https://discord.bots.gg/img/logo_transparent_coloured.png')
        .setColor(Color.green())
        .setDescription('Sorry, You\'re kicked' +
        ' from the server **Projets** for reason: ' + kickReason + ' !')
        .addField('Kicker: ', kicker)
        .setDescription('kick has been correctly set for '
        + `${kickUser}` + ' for the reason : **' + kickReason + '**')
        .setFooter('© 2020 - 2020 CaptainBot any reproduction is prohibited - Clément Muth',
                'https://discord.bots.gg/img/logo_transparent_coloured.png')
        .setThumbnail('https://discord.bots.gg/img/logo_transparent_coloured.png')
    await bot.channels.cache.get("702617392626401350").send({embed: validate});
    await message.guild.member(kickUser).kick(kickReason);
}

module.exports.help = {
    name: "kick"
}