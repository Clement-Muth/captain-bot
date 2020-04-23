const Discord = require('discord.js');

function emoji (message, id) {
    return message.emojis.get(id).toString()
}

module.exports.run = async (bot, message, av) =>    
{
    message.delete()
    const embed = new Discord.MessageEmbed()
    embed.setTitle('Helper')
    .setAuthor(bot.user.username, 'https://discord.bots.gg/img/logo_transparent_coloured.png')
    .setColor(3066993)
    .setDescription(':e_mail: : For question [Gmail](https://mail.google.com/)\n \
                    <:github:700079510388998174> : Follow-me on [Github](https://github.com/Clement-Muth) \
                    ' + '\n\u200b')
    .setFooter('© 2020 - 2020 CaptainBot toute reproduction est interdite - Clément Muth',
            'https://discord.bots.gg/img/logo_transparent_coloured.png')
    .setThumbnail('https://discord.bots.gg/img/logo_transparent_coloured.png')
    .setURL('https://google.com')

    embed.addField(':pencil: **Administration**', '`clear` `warn` `kick` `ban`')
    .addField(':wrench: **Outils**', '`help`')

    message.channel.send ({embed: embed})
}

module.exports.help = {
    name: "help"
}