function emoji (message, id) {
    return message.emojis.get(id).toString()
}

module.exports = class Helper {

    static parse (message, bot, Discord) {
        if (this.match(message)) {
            this.action(message, bot, Discord)
            return (true)
        }
        return (false)
    }

    static match (message) {
        return message.content.startsWith('.help')
    }

    static action (message, bot, Discord) {
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

        embed.addField(':pencil: **Administration**', '`warn`')
        .addField(':wrench: **Outils**', '`clear`')

        message.channel.send ({embed: embed})
    }
}